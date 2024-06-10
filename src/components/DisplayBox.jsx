const DisplayBox = (props) => {
  const { displayValue, isPrank } = props;
  return (
    <div className={`display-box ${isPrank ? "prank" : ""}`}>
      {displayValue || "0.00"}
    </div>
  );
};

export default DisplayBox;
