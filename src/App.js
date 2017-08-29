import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Badge,
    Nav,
    Navbar,
    NavItem,
    NavDropdown,
    MenuItem,
    FormGroup,
    FormControl
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Place from './Place';
import './app.scss';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Amazon Restaurant</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Navbar.Form>
                            <FormGroup>
                                <FormControl type="text" placeholder="Search" />
                            </FormGroup>
                        </Navbar.Form>
                        <Nav pullRight>
                            <NavItem>
                                <Link to="/"><navHome>Home</navHome></Link>
                            </NavItem>
                            <NavItem>
                                <Badge>{this.props.count}</Badge>
                                Cart
                            </NavItem>
                            <NavDropdown
                                eventKey={3}
                                title="Hello, User"
                                id="basic-nav-dropdown"
                            >
                                <MenuItem eventKey={3.1}>My Account</MenuItem>
                                <MenuItem eventKey={3.2}>Settings</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Logout</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="main">
                    <div className="container">
                        <div className="main-content">
                            <Switch>
                                <Route
                                    exact
                                    strict={false}
                                    path="/"
                                    component={Home}
                                />
                                <Route
                                    exact
                                    path="/places/:place"
                                    component={Place}
                                />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

App.PropTypes = {
    count: PropTypes.number
};

function mapStateToProps(state) {
    const { count } = state.Cart;
    return {
        count
    };
}

export default connect(mapStateToProps, null)(App);
