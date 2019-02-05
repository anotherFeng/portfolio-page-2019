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
    <NavItem>
      <Link href={route}>
        <a className="nav-link">
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
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">FENG CHEN</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <CustomNavLink route="/" title="Home"/>
              <CustomNavLink route="/about" title="About"/>
              <CustomNavLink route="/portfolios" title="Portfolios"/>
              <CustomNavLink route="/blogs" title="Blogs"/>
              <CustomNavLink route="/resume" title="Resume"/>
              <NavItem>
                <NavLink href="https://github.com/anotherFeng/portfolio-page-2019">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;