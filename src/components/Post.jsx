import classes from './Post.module.css';

function Post(props) {

  const { author, body } = props;

  return (
    <div className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </div>
  );
}

export default Post;