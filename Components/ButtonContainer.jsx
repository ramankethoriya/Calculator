const ButtonContainer = ({onButtonClick}) => {
  return (
    <>
      <div className="row">
        <button className="buttonfn" onClick={onButtonClick}>%</button>

        <button className="buttonfn" onClick={onButtonClick}>DEL</button>

        <button className="buttonfn" onClick={onButtonClick}>AC</button>

        <button className="buttonfn" onClick={onButtonClick}>/</button>
      </div>

      <div className="row">
        <button className="button" onClick={onButtonClick}>7</button>

        <button className="button" onClick={onButtonClick}>8</button>

        <button className="button" onClick={onButtonClick}>9</button>

        <button className="buttonfn" onClick={onButtonClick}>x</button>
      </div>

      <div className="row">
        <button className="button" onClick={onButtonClick}>4</button>

        <button className="button" onClick={onButtonClick}>5</button>

        <button className="button" onClick={onButtonClick}>6</button>

        <button className="buttonfn" onClick={onButtonClick}>+</button>
      </div>

      <div className="row">
        <button className="button" onClick={onButtonClick}>1</button>

        <button className="button" onClick={onButtonClick}>2</button>

        <button className="button" onClick={onButtonClick}>3</button>

        <button className="buttonfn" onClick={onButtonClick}>-</button>
      </div>

      <div className="row">
        <button className="button" onClick={onButtonClick}>00</button>

        <button className="button" onClick={onButtonClick}>0</button>

        <button className="button" onClick={onButtonClick}>.</button>

        <button className="eql" onClick={onButtonClick}>=</button>
      </div>
    </>
  );
};
export default ButtonContainer;
