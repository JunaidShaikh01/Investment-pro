import React from "react";
import "./InputSection.css";
import { useState } from "react";
export default function InputSection(props) {
  const [currentSavings, setCurrentSaving] = useState("10000");
  const [yearlyContribution, setYearlyContribution] = useState("1200");
  const [expectedReturn, setExpectedReturn] = useState("7");
  const [duration, setDuration] = useState("10");

  function onCurrentSaving(event) {
    setCurrentSaving(event.target.value);
  }
  function onYearlyContribution(event) {
    setYearlyContribution(event.target.event);
  }
  function onExpectedReturn(event) {
    setExpectedReturn(event.target.value);
  }
  function onDuration(event) {
    setDuration(event.target.value);
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    const submitData = {
      "current-savings": currentSavings,
      "yearly-contribution": yearlyContribution,
      "expected-return": expectedReturn,
      duration: duration,
    };

    props.onSubmitValue(submitData);
  }

  function onResetHandler() {
    setCurrentSaving("10000");
    setYearlyContribution("1200");
    setExpectedReturn("7");
    setDuration("10");
  }
  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={currentSavings}
            onChange={onCurrentSaving}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearlyContribution}
            onChange={onYearlyContribution}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={expectedReturn}
            onChange={onExpectedReturn}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={onDuration}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" onClick={onResetHandler} className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}
