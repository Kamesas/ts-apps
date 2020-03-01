import React, { useState } from "react";
import { OPERATORS, DIGIT_BUTTONS, ADDITIONAL_OPERATORS } from "./model";
import CalculatorInput from "./CalculatorInput";

const Simplecalculator = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [prevValue, setPrevValue] = useState<string>("");
  const [operator, setOperator] = useState<string>("");

  const onInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = e;

    setInputValue(value);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const resultHandler = () => {
    let result: number | null = null;

    switch (operator) {
      case "+":
        result = +prevValue + +inputValue;
        break;

      case "-":
        result = +prevValue - +inputValue;
        break;
      case "/":
        result = +prevValue / +inputValue;
        break;

      case "*":
        result = +prevValue * +inputValue;
        break;

      default:
        break;
    }

    result && setInputValue(result.toString());
  };

  const operatorsHandler = (buttonOperator: string) => {
    setOperator(buttonOperator);
    setPrevValue(inputValue);
    setInputValue("");
  };

  const buttonHandler = (buttonOperator: string) => {
    switch (buttonOperator) {
      case "+":
        operatorsHandler(buttonOperator);
        break;
      case "-":
        operatorsHandler(buttonOperator);
        break;
      case "*":
        operatorsHandler(buttonOperator);
        break;
      case "/":
        operatorsHandler(buttonOperator);
        break;
      case "0":
        setInputValue(inputValue + buttonOperator);
        break;
      case ".":
        setInputValue(inputValue + buttonOperator);
        break;
      case "%":
        const res = +prevValue * +inputValue;
        setInputValue((res / 100).toString());
        break;
      case "=":
        resultHandler();
        break;
      case "C":
        setInputValue("");
        setOperator("");
        setPrevValue("");
        break;
      case "Back":
        const copyInputValue = inputValue;
        copyInputValue.slice(0, -1);
        setInputValue(copyInputValue.slice(0, -1));
        break;

      default:
        break;
    }
  };

  return (
    <div className="Simplecalculator container mt-5">
      <CalculatorInput
        inputValue={inputValue}
        onInputHandler={onInputHandler}
        prevValue={prevValue}
        submitHandler={submitHandler}
      />

      <div className="row">
        <div className="col-12 col-md-9 col-lg-6 mx-auto d-flex flex-wrap px-0">
          <div className="row">
            <div className="col-9 d-flex flex-wrap pr-2">
              {DIGIT_BUTTONS.map(button => {
                return (
                  <div key={button} className="col-4 pb-3">
                    <button
                      type="button"
                      className="btn btn-outline-light d-block w-100"
                      onClick={() =>
                        setInputValue(inputValue + button.toString())
                      }
                    >
                      {button}
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="col-3 pl-0">
              {ADDITIONAL_OPERATORS.map(button => {
                return (
                  <div key={button} className="col-12 pb-3">
                    <button
                      type="button"
                      className="btn btn-outline-danger d-block w-100"
                      onClick={() => buttonHandler(button)}
                    >
                      {button}
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="col-12 d-flex flex-wrap">
              {OPERATORS.map(button => {
                const cls =
                  button === "0" ? "btn-outline-light" : "btn-outline-success";
                return (
                  <div key={button} className="col-3 pb-3">
                    <button
                      type="button"
                      className={`btn ${cls}  d-block w-100 font-weight-bold`}
                      onClick={() => buttonHandler(button)}
                    >
                      {button}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simplecalculator;
