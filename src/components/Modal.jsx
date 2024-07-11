import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.css';
import { GiNachos } from 'react-icons/gi';

function Modal({ children }) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate('..'); // the .. allows a dynamic route to the parent of the current route
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;