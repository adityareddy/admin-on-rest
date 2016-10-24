import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { push as pushAction } from 'react-router-redux';
import inflection from 'inflection';
import { change as changeFormValueAction, getFormValues } from 'redux-form';
import debounce from 'lodash.debounce';
import queryReducer, { SET_SORT, SET_PAGE, SET_FILTER } from '../../reducer/resource/list/queryReducer';
import { crudGetList as crudGetListAction } from '../../actions/dataActions';
import { changeListParams as changeListParamsAction } from '../../actions/listActions';
import { View } from 'react-native'

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children, ids, data } = this.props;
        return (<View>
            {React.cloneElement(children, {
                ids, 
                data
            })}
        </View>
        );
    }
}

List.propTypes = {
};

function itemSelector(state, ownProps) {
    let ids = state.item.lists.new
    if (ids.length > 20) {
        ids = ids.slice(0, 19)
    }
    return {
        ids: ids,
        data: state.item.itemsById
    };
}

export default connect(itemSelector)(List);
