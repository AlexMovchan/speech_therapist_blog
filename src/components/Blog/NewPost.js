import React from 'react';
import { Form, Field } from 'react-final-form';
import { NewPostContainer } from './style';
import { toggleModal } from '../../redux/modules/modal';
import { setPostTextToPreview } from '../../redux/modules/blog';

function insertMetachars(sStartTag, sEndTag, values) {
  const bDouble = arguments.length > 1;
  const oMsgInput = document.myForm.post;
  const nSelStart = oMsgInput.selectionStart;
  const nSelEnd = oMsgInput.selectionEnd;
  const sOldText = oMsgInput.value;
  values.post = sOldText.substring(0, nSelStart)
    + (bDouble ? sStartTag + sOldText.substring(nSelStart, nSelEnd) + sEndTag : sStartTag)
    + sOldText.substring(nSelEnd);
  oMsgInput.setSelectionRange(
    bDouble || nSelStart === nSelEnd ? nSelStart + sStartTag.length : nSelStart,
    (bDouble ? nSelEnd : nSelStart) + sStartTag.length
  );
  oMsgInput.focus();
}

const previewPostFoo = (dispatch, values) => {
  dispatch(setPostTextToPreview(values));
  dispatch(toggleModal('OPEN', 'preview'));
};

const NewPost = (props) => {
  /* eslint-disable */
  const { addPost, dispatch } = props;
  return (
    <NewPostContainer>
      <Form
        onSubmit={addPost}
        render={({ handleSubmit, form, values }) => (
          <form onSubmit={handleSubmit} name="myForm">
            <div>
              <span className="tag-btn" onClick={() => insertMetachars('<h3>', '</h3>', values)} title="Заголовок">
                Заголовок
              </span>

              <span
                className="tag-btn"
                onClick={() => insertMetachars('<ul>\n<li></li>\n<li></li>\n<li></li>\n', '</ul>', values)}
                title="Заголовок"
              >
                Список
              </span>

              <span className="tag-btn" onClick={() => insertMetachars('<p>', '</p>', values)} title="Абзац">
                Абзац
              </span>

              <span
                className="tag-btn"
                onClick={() => insertMetachars('<img src="тут має бутти ссилка на картинку"', '/>', values)}
                title="Картинка"
              >
                Картинка
              </span>

              <span
                className="tag-btn"
                onClick={() => insertMetachars('<img src="тут має бутти ссилка на картинку"', 'class="image-40" />', values)}
                title="Картинка"
              >
                Картинка 50%
              </span>
            </div>
            <Field name="header" component="input" className="header-input" type="text" placeholder="Post header" />
            <Field name="post" className="post-input" component="textarea" placeholder="Your post" />
            <div className="btn-container">
              <button type="submit">Опублікувати</button>
              <button type="button" onClick={() => previewPostFoo(dispatch, values)}>
                Переглянути
              </button>
            </div>
          </form>
        )}
      />
    </NewPostContainer>
  );
};

export default NewPost;
