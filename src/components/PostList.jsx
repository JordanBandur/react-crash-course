import Post from "./Post";

function PostList() {
  return (
    <ul>
      <Post author="Jordan" body="I'm refreshing my React knowledge!" />
      <Post author="Dylan" body="I'm learning to play the guitar!" />
    </ul>
  );
}

export default PostList;