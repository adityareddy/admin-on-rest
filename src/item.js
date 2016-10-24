import pathToRegexp from 'path-to-regexp';
import {
  fetchIdsByType,
  fetchItem,
  fetchItems,
  watchList,
} from './hn';

const ITEM_TYPES = [
  'top', 'new', 'show', 'ask', 'job'
];

export default {

  namespace: 'item',

  state: {
    activeType: null,
    itemsPerPage: 20,
    lists: {
      top: [],
      new: [],
      show: [],
      ask: [],
      job: [],
    },
    itemsById: {},
  },

  subscriptions: {
    listSubscriber({ dispatch, history }) {
      const type = 'new'
      const page = 1
      dispatch({ type: 'fetchList', payload: { type, page } });
      watchList(type, ids => {
        dispatch({ type: 'saveList', payload: { type, ids } });
        dispatch({ type: 'fetchList', payload: { type, page } });
      });
    },
  },
  effects: {
    *fetchList({ payload }, { put, call, select }) {
      const { type, page } = payload;
      const ids = yield call(fetchIdsByType, type);
      const itemsPerPage = yield select(state => state.item.itemsPerPage);
      const items = yield call(
        fetchItems,
        ids.slice(itemsPerPage * (page - 1), itemsPerPage * page)
      );
      yield put({ type: 'saveList', payload: { ids, type } });
      yield put({ type: 'saveItems', payload: items });
    },

    *fetchComments({ payload: id }, { put, call }) {
      const item = yield call(fetchItem, id);
      yield put({ type: 'saveItems', payload: [item] });

      let ids = item.kids;
      while (ids && ids.length) {
        const items = yield call(fetchItems, ids);
        yield put({ type: 'saveItems', payload: items });
        ids = items.reduce((memo, item) => {
          if (item.kids) {
            memo = [...memo, ...item.kids];
          }
          return memo;
        }, []);
      }
    },
  },

  reducers: {
    saveList(state, { payload }) {
      const { ids, type } = payload;
      return { ...state, lists: { ...state.lists, [type]: ids } };
    },

    saveItems(state, { payload: itemsArr }) {
      const items = itemsArr.reduce((memo, item) => {
        memo[item.id] = item;
        return memo;
      }, {});
      return { ...state, itemsById: { ...state.itemsById, ...items } };
    },

    saveActiveType(state, { payload: activeType }) {
      return { ...state, activeType };
    },
  },
};