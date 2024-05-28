const Display = ({displayValue}) => {
  return (
    <input type="text" placeholder="0" value={displayValue} className="display" readOnly/>
  );
};

export default Display;