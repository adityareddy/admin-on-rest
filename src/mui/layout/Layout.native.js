import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';


const Layout = ({ isLoading, children }) => {
    return (
        <View>
            <Text>Layout</Text>
            {children}
        </View>
    );
};

Layout.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    children: PropTypes.node,
};

function mapStateToProps(state) {
    return { isLoading: state.admin.loading > 0 };
}

export default connect(
    mapStateToProps,
)(Layout);
