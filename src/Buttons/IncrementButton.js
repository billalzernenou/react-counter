const IncrementButton = ({ counter, setState }) => {
  const handleClick = () => {
    setState(counter + 1);
  };
  return (
    <div className="operation-button">
      <button
        style={{ display: counter >= 10 ? "none" : "inline" }}
        onClick={handleClick}
      >
        <i className="fas fa-plus fa-3x"></i>
      </button>
    </div>
  );
};

export default IncrementButton;
