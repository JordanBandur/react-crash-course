import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostList.module.css";
import Modal from './Modal';

function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((prev) => [postData, ...prev]); // React does not excute state updating functions instantly
    // using prev gets the current snapshot(prev) of the state and allows you update state with the
    // previous snapshot
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onCancel={onStopPosting}
            onAddPost={addPostHandler}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        {posts.map(() => <Post key={posts.body} author={posts.author} body={posts.body} />)}
      </ul>
    </>
  );
}

export default PostList;