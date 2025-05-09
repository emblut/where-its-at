import './Button.css';

function Button({ button, onClick }) {
  return (
    <button onClick={onClick} className={button.classNames} type={button.type}>
      {button.text}
    </button>
  );
}

export default Button;
