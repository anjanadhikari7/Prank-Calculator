const Button = (props) => {
  const { buttonText, className, handleOnClick } = props;

  return (
    <button onClick={() => handleOnClick(buttonText)} className={className}>
      {buttonText}
    </button>
  );
};

export default Button;
