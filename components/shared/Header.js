import React from 'react';
import Link from 'next/link';

import '../../styles/main.scss';

class Header extends React.Component {
  render() {
    const title = this.props.title;

    return (
      <React.Fragment>
        <p>{title}</p>
        <p>{this.props.children}</p>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/portfolios">
          <a>Portfolios</a>
        </Link>
        <Link href="/blogs">
          <a>Blogs</a>
        </Link>
        <Link href="/resume">
          <a>Resume</a>
        </Link>
      </React.Fragment>
    )
  }
}

export default Header;