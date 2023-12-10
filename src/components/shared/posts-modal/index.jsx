import './index.css';

const Modal = ({ isOpen, onClose, post }) => {
  if (!isOpen) return null;

  return (
    <div id='outside' className='custom-modal' onClick={onClose}>
      <div
        onClick={e => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
        id='inside'
        className='modal-content al-just-center pointer-events-none'
      >
        <div className='modal-title'>{post.title}</div>
        <div>{post.body}</div>
      </div>
    </div>
  );
};

export default Modal;
