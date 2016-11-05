const fapp = require('./services/feathers')

export default {
    namespace: 'auth',
    state: {
        authenticated: false,
        currentUser: 'anonymous guest'
    },
    subscriptions: {
    },
    effects: {
        *logIn({ payload }, { put, call, select }) {
            const { data } = yield call(fapp.authenticate, {
                type: 'local',
                'email': 'admin@admin.com',
                'password': 'admin'
            })
            if (data) {
                yield put({ type: 'authenticate', payload: true })
                yield put({ type: 'setUser', payload: fapp.get('user') })
            }
            else {
                if (error.code === 401) window.location.href = '/login'
            }
        },
        *logOut({ payload }, { put, call, select }) {
            const { data } = yield call(fapp.logout)
            if (data) {
                yield put({ type: 'setUser', payload: 'anonymous guest' })
                yield put({ type: 'authenticate', payload: data.value })
                window.location.href = '/login'
            }
            else {
                if (error.code === 401) window.location.href = '/login'
            }
        }
    },
    reducers: {
        authenticate: (state, {payload}) => ({ ...state, authenticated: payload }),
        setUser: (state, {payload}) => ({ ...state, currentUser: payload })
    }
}