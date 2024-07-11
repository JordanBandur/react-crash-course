import { useLoaderData } from 'react-router-dom';
import Post from "./Post";
import classes from "./PostList.module.css";

function PostList() {
  const posts = useLoaderData();

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    setPosts((prev) => [postData, ...prev]); // React does not excute state updating functions instantly
    // using prev gets the current snapshot(prev) of the state and allows you update state with the
    // previous snapshot
  }

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (<Post key={posts.body} author={posts.author} body={posts.body} />
          ))}
        </ul>
      )}
      {post.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostList;