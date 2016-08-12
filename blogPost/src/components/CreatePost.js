import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { createPost } from '../actions/index';
import style from '../style/custom.css';

class NewPost extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
//navigating to indexpage after new post created (promise resolved)
  onSubmit(props) {
    this.props.createPost(props)
    .then(()=> {
      this.context.router.push('/');
    });
  }

  render() {
    const { fields: {title, categories, content}, handleSubmit } = this.props;

    return (
      <form class="container" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a new post</h3>
        <div class={
          `form-group ${title.touched && title.invalid ? 'has-danger' : ''}`
        }>
          <label>Post Title</label>
          <input type="text" class="form-control" {...title}/>
          <div class="text-help">{title.touched ? title.error : ''}</div>
        </div>
        <div class={
          `form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`
        }>
          <label>Categories</label>
          <input type="text" class="form-control" {...categories}/>
          <div class="text-help">{categories.touched ? categories.error : ''}</div>
        </div>
        <div class={
          `form-group ${content.touched && content.invalid ? 'has-danger' : ''}`
        }>
          <label>Message</label>
          <textarea class="form-control" {...content}/>
          <div class="text-help">{content.touched ? content.error : ''}</div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <Link to='/' class="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if(!values.title) {
    errors.title = 'This field cannot be empty';
  }
  if(!values.categories) {
    errors.categories = 'This field cannot be empty too~';
  }
  if(!values.content) {
    errors.content = 'Please enter your message';
  }
  return errors;
}

//connect form to redux-form

export default reduxForm({
  form: 'NewPostForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(NewPost);
