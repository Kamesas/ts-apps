import React, { useState } from "react";
import { DIGIT_BUTTONS } from "./model";

const Simplecalculator = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const onInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = e;

    setInputValue(value);
  };
  return (
    <div className="Simplecalculator container">
      <form className="row">
        <div className="form-group col-6 mx-auto">
          <label htmlFor="exampleInputEmail1">Enter value</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={inputValue}
            onChange={e => onInputHandler(e)}
          />
          {/*  <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small> */}
        </div>
      </form>

      <div className="">
        <div className="col-6 mx-auto d-flex flex-wrap">
          {DIGIT_BUTTONS.map(button => {
            return (
              <div key={button} className="col-4 pb-3">
                <button
                  type="button"
                  className="btn btn-outline-light d-block w-100"
                >
                  {button}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Simplecalculator;
