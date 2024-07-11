import { useState } from 'react';
import Modal from '../components/Modal';
import classes from './NewPost.module.css';

function NewPost({ onCancel, onAddPost }) {
  const [bodyText, setBodyText] = useState('');
  const [authorText, setAuthorText] = useState('');

  function changeBodyHandler(event) {
    setBodyText(event.target.value);
  }

  function changeAuthorHandler(event) {
    setAuthorText(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: bodyText,
      author: authorText
    };
    onAddPost();
    oncancel();
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={changeBodyHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required onChange={changeAuthorHandler} />
        </p>
        <p className={classes.actions}>
          <button type='button' onClick={onCancel}>Cancel</button>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;