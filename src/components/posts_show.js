import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import LoadingDots from './site_loading_dots';
// import ModalConfirmDelete from './site_modal_confirmation';
// import PageNotFound from './site_not_found';

class PostShow extends Component {

  componentDidMount() {
    // if (!this.props.post) --if statement that would prevent fetching post if we already have it
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  renderPost() {
    const { post } = this.props;

    if (!post) {
      return (
        <div>
          <LoadingDots />
        </div>
      )
    }

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories.split(/[ ,]+/).join(', ')}</h6>
        {post.content}
      </div>
    )
  }

  onDeletePost() {
    //ask the user to confirm they want to delete the post {post.title}
    //delete post
    //return to path='/'
    //display notification that {post.title} was deleted
    const { id } = this.props.match.params;

    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    return(
      <div>
        <ButtonToolbar>
          <Link className='btn btn-secondary' to='/'>BACK</Link>
          <button
            className='btn btn-danger pull-xs-right'
            onClick={this.onDeletePost.bind(this)}
            >
              DELETE
            </button>
        </ButtonToolbar>
        {this.renderPost()}
      </div>
    );
  }
}

function mapStatetoProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStatetoProps, { fetchPost, deletePost })(PostShow);
