import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions';
import { Link } from 'react-router-dom';

import { ButtonToolbar } from 'react-bootstrap';

class NewBlogPost extends Component {

  renderTextField(field) {
    const { meta: { touched, error }  } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={ className }>
        <label>{field.label}</label>
        <input
          className='form-control'
          type={field.fieldType}
          placeholder={field.placeholder}
          {...field.input}
        />
        <div className='form-errors text-help'>
          {touched ? error : ''}
        </div>
      </div>
    );
  }
  // { condition ? if true : if false } -- ternary expression
  // { condition && condition2 ? if true : if false } -- AND (consider both conditions)
  // { condition || condition2 ? if true : if false } -- OR (consider either condition)

  renderTextArea(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={ className }>
        <label>{field.label}</label>
        <textarea
          className='form-control'
          type={field.fieldType}
          placeholder={field.placeholder}
          {...field.input}
        >
        </textarea>
        <div className='form-errors text-help'>
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/')
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name='title'
          component={this.renderTextField}
          label='Post Title'
          placeholder='Title of Your Post'
          fieldType='text'
        />
        <Field
          name='categories'
          component={this.renderTextField}
          label='Categories'
          placeholder='tag1 tag2 tagN...'
          fieldType='text'
        />
        <Field
          name='content'
          component={this.renderTextArea}
          label='Post Content'
          placeholder='Pour your heart out, here.'
          fieldType='text'
        />
        <ButtonToolbar>
          <button type='submit' className='btn btn-secondary'>Submit</button>
          <Link className='btn btn-danger' to='/'>Cancel</Link>
        </ButtonToolbar>
      </form>
    );
  }
}

function validate(values) {
  // create an empty object called errors
  const errors = {};

  // Validate form inputs from values
  // If there is an error, add a prop to errors object with the same name as Field
  if (!values.title) {
    errors.title = 'Enter a title.'
  }
  if (!values.categories) {
    errors.categories = 'Enter at least one category.'
  }
  if (!values.content || values.content.length < 10) {
    errors.content = 'Write more content. This is a blog after all.'
  }

  // If errors is returned empty, the form is fine to submit
  return errors;
}

export default reduxForm({
  validate,
  form: 'NewPostForm'
}) (
  connect(null, { createPost }) (NewBlogPost)
);
