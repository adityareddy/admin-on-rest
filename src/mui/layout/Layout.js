import React, { PropTypes } from 'react';
import { connect } from 'dva';
import {
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
    ProgressBar,
} from 'react-bootstrap';
import Navbar, { Brand } from 'react-bootstrap/lib/Navbar';
import Sidebar from './Sidebar';

const Layout = (props) => {
    return (<div className="app app-header-fixed">
        <header id="header" className="app-header navbar" role="menu">
            <Navbar.Header className="bg-dark">
                <Navbar.Brand>
                    <a href="#">React-Bootstrap</a>
                </Navbar.Brand>
            </Navbar.Header>
            <div className="collapse pos-rlt navbar-collapse box-shadow bg-white-only">
                <Nav className="navbar-nav">
                    <NavItem eventKey={1} href="#">Link</NavItem>
                    <NavItem eventKey={2} href="#">Link</NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
                <Nav className="navbar-nav navbar-right">
                    <NavItem eventKey={1} href="#">Link</NavItem>
                    <NavItem eventKey={2} href="#">Link</NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
            </div>
        </header>
        <Sidebar />
        <div id="content" className="app-content" role="main">
            <div className="app-content-body ">
                <div className="hbox hbox-auto-xs hbox-auto-sm">
                    <div className="col">
                        <div className="wrapper-md">
                            layout
({props.auth.authenticated ? props.auth.currentUser.email : 'log In'})

            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >
    );
};


function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(
    mapStateToProps,
)(Layout);