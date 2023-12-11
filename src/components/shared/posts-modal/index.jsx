import './index.css';

const Modal = ({ isOpen, onClose, post }) => {
  if (!isOpen) return null;

  return (
    <>
      <div id='outside' className='custom-modal' onClick={onClose}></div>
      <div
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
        }}
        id='inside'
        className='modal-content al-just-center'
      >
        <div className='modal-title'>{post.title}</div>
        <div>{post.body}</div>
      </div>
    </>
  );
};

export default Modal;
