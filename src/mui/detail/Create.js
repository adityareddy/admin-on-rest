import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardActions } from 'material-ui/Card';
import inflection from 'inflection';
import Title from '../layout/Title';
import ListButton from '../button/ListButton';
import { crudCreate as crudCreateAction } from '../../actions/dataActions';
import RecordForm from './RecordForm'; // eslint-disable-line import/no-named-as-default

class Create extends Component {
    getBasePath() {
        const { location } = this.props;
        return location.pathname.split('/').slice(0, -1).join('/');
    }

    handleSubmit = (record) => this.props.crudCreate(this.props.resource, record, this.getBasePath());

    render() {
        const { title, children, isLoading, resource, validation } = this.props;
        const basePath = this.getBasePath();
        return (
            <RecordForm
                onSubmit={this.handleSubmit}
                resource={resource}
                basePath={basePath}
                validation={validation}
                record={{}}
                >
                {children}
            </RecordForm>
        );
    }
}

Create.propTypes = {
};

Create.defaultProps = {
    data: {},
};

function mapStateToProps(state) {
    return {
        isLoading: state.admin.loading > 0,
    };
}

export default connect(
    mapStateToProps,
    { crudCreate: crudCreateAction },
)(Create);
