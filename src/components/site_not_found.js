import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class PageNotFound extends Component {
  render() {
    return (
      <div>
        <h1>404</h1>
        <h3>Page Not Found</h3>
        <Link className='btn btn-secondary' to='/'>BACK</Link>
      </div>
    )
  }
}

export default PageNotFound;
