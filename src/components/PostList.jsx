import { useState } from 'react';
import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostList.module.css";

function PostList() {
  const [bodyText, setBodyText] = useState('');
  const [authorText, setAuthorText] = useState('');

  function changeBodyHandler(event) {
    setBodyText(event.target.value);
  }

  function changeAuthorHandler(event) {
    setAuthorText(event.target.value);
  }

  return (
    <>
      <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler} />
      <ul className={classes.posts}>
        <Post author={authorText} body={bodyText} />
        <Post author="Dylan" body="I'm learning to play the guitar!" />
      </ul>
    </>
  );
}

export default PostList;