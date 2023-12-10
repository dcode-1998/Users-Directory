import './index.css';
const PostsCard = props => {
  return (
    <div
      className='posts-card'
      onClick={() => {
        props.onClick(props.post);
      }}
    >
      <div style={{ padding: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bolder' }}>
          {props.post.title}
        </div>
        <div>{props.post.body}</div>
      </div>
    </div>
  );
};

export default PostsCard;
