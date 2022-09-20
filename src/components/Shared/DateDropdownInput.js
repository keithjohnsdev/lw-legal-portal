import moment from "moment";
import { useState, useEffect } from "react";
import DropdownInput from "./DropdownInput";

const DateDropdownInput = (props) => {
  const [month, setMonth] = useState();
  const [day, setDay] = useState();
  const [year, setYear] = useState();
  const dayArray = [];
  const [dayOptions, setDayOptions] = useState([]);
  const isValid = props.isValid;
  const monthOptions = moment.monthsShort();
  const yearOptions = [];
  for (var i = 1900; i <= moment().year(); i++) {
    yearOptions.push({ label: i.toString() });
  }

  function onChangeDate(e, unit) {
    if (unit === "month") {
      setMonth(e.target.value);
      let numOfDays = moment().month(e.target.value).daysInMonth();
      setDayDropdownOptions(numOfDays);
    } else if (unit === "year") {
      setYear(e.target.value);
      let numOfDays = moment().year(e.target.value).daysInMonth();
      setDayDropdownOptions(numOfDays);
    } else {
      setDay(e.target.value);
    }
  }

  useEffect(() => {
    if (month && year) {
      let numOfDays = moment().year(year).month(month).daysInMonth();
      if (day && day > numOfDays) {
        setDay(null);
      }
      setDayDropdownOptions(numOfDays);
    }
  }, [month, year]);

  function setDayDropdownOptions(numOfDays) {
    const daysArray = [...Array(numOfDays + 1).keys()].slice(1);
    daysArray.forEach((day) => dayArray.push({ label: day.toString() }));
    setDayOptions(daysArray.map((day) => ({ label: day.toString() })));
  }

  useEffect(() => {
    if (day && month && year) {
      props.handleChange(
        moment().year(year).month(month).date(day).format("MM/DD/YYYY")
      );
    }
  }, [day, month, year]);

  return (
    <>
      <DropdownInput
        label={props.label}
        placeholder={"MM"}
        onChange={(e) => onChangeDate(e, "month")}
        value={month}
        options={monthOptions.map((m) => ({ label: m }))}
        modifier="month"
        isValid={isValid}
      ></DropdownInput>
      <DropdownInput
        placeholder={"DD"}
        onChange={(e) => onChangeDate(e, "day")}
        value={day}
        options={dayOptions}
        modifier="day"
        isValid={isValid}
      ></DropdownInput>
      <DropdownInput
        placeholder={"YEAR"}
        onChange={(e) => onChangeDate(e, "year")}
        value={year}
        options={yearOptions.reverse()}
        modifier="year"
        isValid={isValid}
      ></DropdownInput>
    </>
  );
};

export default DateDropdownInput;
