import React, { Component } from 'react';

class Sidebar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <aside id="aside" className="app-aside hidden-xs bg-dark">
                <div className="aside-wrap">
                    <div className="navi-wrap">
                        <div className="clearfix hidden-xs text-center hide" id="aside-user">
                            <div className="dropdown wrapper">
                                <a href="app.page.profile">
                                    <span className="thumb-lg w-auto-folded avatar m-t-sm">
                                    </span>
                                </a>
                                <a href="#" data-toggle="dropdown" className="dropdown-toggle hidden-folded">
                                    <span className="clear">
                                        <span className="block m-t-sm">
                                            <strong className="font-bold text-lt">John.Smith</strong>
                                            <b className="caret"></b>
                                        </span>
                                        <span className="text-muted text-xs block">Art Director</span>
                                    </span>
                                </a>
                                <ul className="dropdown-menu animated fadeInRight w hidden-folded">
                                    <li className="wrapper b-b m-b-sm bg-info m-t-n-xs">
                                        <span className="arrow top hidden-folded arrow-info"></span>
                                        <div>
                                            <p>300mb of 500mb used</p>
                                        </div>
                                        <div className="progress progress-xs m-b-none dker">
                                            <div className="progress-bar bg-white" data-toggle="tooltip" data-original-title="50%"></div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="">Settings</a>
                                    </li>
                                    <li>
                                        <a href="page_profile.html">Profile</a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span className="badge bg-danger pull-right">3</span>
                                            Notifications
                  </a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <a href="page_signin.html">Logout</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="line dk hidden-folded"></div>
                        </div>
                        <nav className="navi clearfix">
                            <ul className="nav">
                                <li className="hidden-folded padder m-t m-b-sm text-muted text-xs">
                                    <span>Navigation</span>
                                </li>
                                <li>
                                    <a href="" className="auto">
                                        <span className="pull-right text-muted">
                                            <i className="fa fa-fw fa-angle-right text"></i>
                                            <i className="fa fa-fw fa-angle-down text-active"></i>
                                        </span>
                                        <i className="glyphicon glyphicon-stats icon text-primary-dker"></i>
                                        <span className="font-bold">Dashboard</span>
                                    </a>
                                    <ul className="nav nav-sub dk">
                                        <li className="nav-sub-header">
                                            <a href="">
                                                <span>Dashboard</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index.html">
                                                <span>Dashboard v1</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="dashboard.html">
                                                <b className="label bg-info pull-right">N</b>
                                                <span>Dashboard v2</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="mail.html">
                                        <b className="badge bg-info pull-right">9</b>
                                        <i className="glyphicon glyphicon-envelope icon text-info-lter"></i>
                                        <span className="font-bold">Email</span>
                                    </a>
                                </li>
                                <li className="line dk"></li>

                                <li className="hidden-folded padder m-t m-b-sm text-muted text-xs">
                                    <span>Components</span>
                                </li>
                                <li>
                                    <a href="" className="auto">
                                        <span className="pull-right text-muted">
                                            <i className="fa fa-fw fa-angle-right text"></i>
                                            <i className="fa fa-fw fa-angle-down text-active"></i>
                                        </span>
                                        <b className="badge bg-info pull-right">3</b>
                                        <i className="glyphicon glyphicon-th"></i>
                                        <span>Layout</span>
                                    </a>
                                    <ul className="nav nav-sub dk">
                                        <li className="nav-sub-header">
                                            <a href="">
                                                <span>Layout</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="layout_app.html">
                                                <span>Application</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="layout_fullwidth.html">
                                                <span>Full width</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="layout_boxed.html">
                                                <span>Boxed layout</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="" className="auto">
                                        <span className="pull-right text-muted">
                                            <i className="fa fa-fw fa-angle-right text"></i>
                                            <i className="fa fa-fw fa-angle-down text-active"></i>
                                        </span>
                                        <i className="glyphicon glyphicon-briefcase icon"></i>
                                        <span>UI Kits</span>
                                    </a>
                                    <ul className="nav nav-sub dk">
                                        <li className="nav-sub-header">
                                            <a href="">
                                                <span>UI Kits</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="ui_button.html">
                                                <span>Buttons</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="ui_icon.html">
                                                <b className="badge bg-info pull-right">3</b>
                                                <span>Icons</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="ui_grid.html">
                                                <span>Grid</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="ui_widget.html">
                                                <b className="badge bg-success pull-right">13</b>
                                                <span>Widgets</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="ui_sortable.html">
                                                <span>Sortable</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="ui_portlet.html">
                                                <span>Portlet</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="ui_timeline.html">
                                                <span>Timeline</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="ui_jvectormap.html">
                                                <span>Vector Map</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="" className="auto">
                                        <span className="pull-right text-muted">
                                            <i className="fa fa-fw fa-angle-right text"></i>
                                            <i className="fa fa-fw fa-angle-down text-active"></i>
                                        </span>
                                        <b className="label bg-primary pull-right">2</b>
                                        <i className="glyphicon glyphicon-list"></i>
                                        <span>Table</span>
                                    </a>
                                    <ul className="nav nav-sub dk">
                                        <li className="nav-sub-header">
                                            <a href="">
                                                <span>Table</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="table_static.html">
                                                <span>Table static</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="table_datatable.html">
                                                <span>Datatable</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="table_footable.html">
                                                <span>Footable</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="" className="auto">
                                        <span className="pull-right text-muted">
                                            <i className="fa fa-fw fa-angle-right text"></i>
                                            <i className="fa fa-fw fa-angle-down text-active"></i>
                                        </span>
                                        <i className="glyphicon glyphicon-edit"></i>
                                        <span>Form</span>
                                    </a>
                                    <ul className="nav nav-sub dk">
                                        <li className="nav-sub-header">
                                            <a href="">
                                                <span>Form</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="form_element.html">
                                                <span>Form elements</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="ui_chart.html">
                                        <i className="glyphicon glyphicon-signal"></i>
                                        <span>Chart</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="auto">
                                        <span className="pull-right text-muted">
                                            <i className="fa fa-fw fa-angle-right text"></i>
                                            <i className="fa fa-fw fa-angle-down text-active"></i>
                                        </span>
                                        <i className="glyphicon glyphicon-file icon"></i>
                                        <span>Pages</span>
                                    </a>
                                    <ul className="nav nav-sub dk">
                                        <li className="nav-sub-header">
                                            <a href="">
                                                <span>Pages</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="page_profile.html">
                                                <span>Profile</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="page_post.html">
                                                <span>Post</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="page_search.html">
                                                <span>Search</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="page_invoice.html">
                                                <span>Invoice</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="page_price.html">
                                                <span>Price</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="page_lockme.html">
                                                <span>Lock screen</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="page_signin.html">
                                                <span>Signin</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="page_signup.html">
                                                <span>Signup</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="page_forgotpwd.html">
                                                <span>Forgot password</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="page_404.html">
                                                <span>404</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="line dk hidden-folded"></li>

                                <li className="hidden-folded padder m-t m-b-sm text-muted text-xs">
                                    <span>Your Stuff</span>
                                </li>
                                <li>
                                    <a href="page_profile.html">
                                        <i className="icon-user icon text-success-lter"></i>
                                        <b className="badge bg-success pull-right">30%</b>
                                        <span>Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="icon-question icon"></i>
                                        <span>Documents</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="wrapper m-t">
                            <div className="text-center-folded">
                                <span className="pull-right pull-none-folded">60%</span>
                                <span className="hidden-folded">Milestone</span>
                            </div>
                            <div className="progress progress-xxs m-t-sm dk">
                                <div className="progress-bar progress-bar-info">
                                </div>
                            </div>
                            <div className="text-center-folded">
                                <span className="pull-right pull-none-folded">35%</span>
                                <span className="hidden-folded">Release</span>
                            </div>
                            <div className="progress progress-xxs m-t-sm dk">
                                <div className="progress-bar progress-bar-primary">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        );
    }
}


export default Sidebar;
