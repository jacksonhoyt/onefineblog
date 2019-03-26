import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';
import { ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class BlogPostsIndex extends Component {

  //React lifecycle method componentDidMount()
  //automatically called by React after this component loads in the DOM
  //this is a good place to initiate fetchPosts and load data into the component
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    // Using lodash .map() method on the data object this.props.posts to create an array of records
     return _.map(this.props.posts, post => {
       return (
         <Link to={`/posts/${post.id}`}>
             <li
               className='list-group-item'
               key={post.id}
               >
               {post.title} <span className='item-categories'>{post.categories.split(/[ ,]+/).join(', ')}</span>
             </li>
         </Link>
       )
     });
  }

  render() {
    return(
      <div>
        <div className='text-xs-right'>
          <Link className='btn btn-secondary' to='/posts/new'>NEW POST</Link>
        </div>
        <h3>POSTS</h3>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return { posts: state.posts };
}

export default connect(mapStatetoProps, { fetchPosts })(BlogPostsIndex);
