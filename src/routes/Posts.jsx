import { Outlet } from 'react-router-dom';
import PostList from '../components/PostList';

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;

// this executes outside of the component and can't manipulate component state
// since this is returning a promise react will wait for this to resolve before rendering
// the element/component that is using this loader
export async function loader() {
  const response = await fetch('http://localhost:8080/posts');
  const resData = await response.json();
  return resData.Posts;
}