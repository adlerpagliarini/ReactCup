import { Component } from 'react';
import {
    Collapse, Navbar, NavbarToggler,
    NavbarBrand, Nav, NavItem, Container
} from 'reactstrap';

import { NavLink as NavLinkReact } from 'react-router-dom';

class AppNavbar extends Component {
    state = { isOpen: false }
    constructor(props: any) {
        super(props);
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">
                            Games Cup
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLinkReact to="/" className="nav-link">Games</NavLinkReact>
                                </NavItem>
                                <NavItem>
                                    <NavLinkReact to="/gamecup/:idGameCup" className="nav-link">Game Cup</NavLinkReact>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default AppNavbar;