import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPost, deletePost } from '../actions/index';
import ProgressBar from './ProgressBar';

class ShowPost extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }
  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
    .then(() => {
      this.context.router.push('/');
    });
  }

  render() {
    const { post } = this.props;

    if(!this.props.post) {
      return <ProgressBar />;
    }

    return (
      <div class="container">
        <Link class="btn btn-primary pull-xs-right" to='/'>Back to main page
        </Link>
        <button
          class="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >Delete this post
        </button>
        <h3>{post.title}</h3>
        <h3>{post.categories}</h3>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(ShowPost);
