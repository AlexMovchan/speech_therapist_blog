import React from 'react';
import { Form, Field } from 'react-final-form';
import { Post } from './style';

const NewPost = (props) => {
  /* eslint-disable */
  const { addPost } = props;
  return (
    <Post>
      <Form
        onSubmit={addPost}
        render={({
          handleSubmit,
          form,
          submitting,
          pristine,
        }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="header"
              component="input"
              className="header"
              type="text"
              placeholder="Post header"
            />
            <Field name="post" className="post" component="textarea" placeholder="Your post" />
            <button type="submit">
                Опублікувати
            </button>
          </form>
        )}
      />
    </Post>
  );
};

export default NewPost;
