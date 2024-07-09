import Post from "./Post";
import classes from "./PostList.module.css";

function PostList() {
  return (
    <ul>
      <Post author="Jordan" body="I'm refreshing my React knowledge!" />
      <Post author="Dylan" body="I'm learning to play the guitar!" />
    </ul>
  );
}

export default PostList;