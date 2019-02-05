import React from 'react';
import Link from 'next/link';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const CustomNavLink = ({ route, title }) => {
  return (
    <NavItem className="port-navbar-item">
      <Link href={route}>
        <a className="port-navbar-link nav-link">
          {title}
        </a>
      </Link>
    </NavItem>
  )
}

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="absolute port-navbar port-default" color="transparent" dark expand="md">
          <NavbarBrand className="port-navbar-brand" href="/">FENG CHEN</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <CustomNavLink route="/" title="Home"/>
              <CustomNavLink route="/about" title="About"/>
              <CustomNavLink route="/portfolios" title="Portfolios"/>
              <CustomNavLink route="/blogs" title="Blogs"/>
              <CustomNavLink route="/resume" title="Resume"/>
              <NavItem className="port-navbar-item">
                <NavLink className="port-navbar-link" href="https://github.com/anotherFeng/portfolio-page-2019">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;