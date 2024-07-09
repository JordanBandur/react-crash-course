import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostList.module.css";

function PostList() {
  return (
    <>
      <NewPost />
      <ul>
        <Post author="Jordan" body="I'm refreshing my React knowledge!" />
        <Post author="Dylan" body="I'm learning to play the guitar!" />
      </ul>
    </>
  );
}

export default PostList;