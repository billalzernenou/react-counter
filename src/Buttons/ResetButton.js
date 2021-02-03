const ResetButton = ({ counter, setState }) => {
  const handleClick = () => {
    setState(0);
  };
  return (
    <div className="reset-button">
      <button onClick={handleClick}>
        <b>Reset</b>
      </button>
    </div>
  );
};

export default ResetButton;
