const DecrementButton = ({ counter, setState }) => {
  const handleClick = () => {
    setState(counter - 1);
  };
  return (
    <div className="operation-button">
      <button
        style={{ display: counter <= 0 ? "none" : "inline" }}
        onClick={handleClick}
      >
        <i className="fas fa-minus fa-3x"></i>
      </button>
    </div>
  );
};

export default DecrementButton;
