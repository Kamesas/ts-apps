import React from "react";

type ICalculatorInputTypes = {
  onInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  prevValue: string;
  submitHandler: (e: React.FormEvent) => void;
};

const CalculatorInput: React.FC<ICalculatorInputTypes> = ({
  inputValue,
  onInputHandler,
  prevValue,
  submitHandler
}) => {
  return (
    <form onSubmit={submitHandler} className="row">
      <div className="form-group col-12 col-md-9 col-lg-6 mx-auto">
        <label htmlFor="exampleInputEmail1">Enter value</label>
        <input
          type="number"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="value"
          value={inputValue}
          onChange={e => onInputHandler(e)}
        />
        <small id="value" className="form-text text-muted">
          prev value: {prevValue}
        </small>
      </div>
    </form>
  );
};

export default CalculatorInput;
