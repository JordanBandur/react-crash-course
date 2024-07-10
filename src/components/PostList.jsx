import { useState } from 'react';
import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostList.module.css";
import Modal from './Modal';

function PostList() {
  const [bodyText, setBodyText] = useState('');
  const [authorText, setAuthorText] = useState('');
  const [modalIsVisible, setModalIsVisible] = useState(true);

  function changeBodyHandler(event) {
    setBodyText(event.target.value);
  }

  function changeAuthorHandler(event) {
    setAuthorText(event.target.value);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler} />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={authorText} body={bodyText} />
        <Post author="Dylan" body="I'm learning to play the guitar!" />
      </ul>
    </>
  );
}

export default PostList;