import moment from "moment";
import { useState, useEffect } from "react";
import DropdownInput from "./DropdownInput";

const DateDropdownInput = (props) => {
  const [month, setMonth] = useState();
  const [day, setDay] = useState();
  const [year, setYear] = useState();
  const currentYear = new Date();
  const dayArray = [];
  const [dayOptions, setDayOptions] = useState([]);
  const isValid = props.isValid;
  const monthOptions = moment.monthsShort();
  const yearOptions = [];
  for (var i = 1900; i <= currentYear.getFullYear(); i++) {
    yearOptions.push({ label: i.toString() });
  }

  function onChangeDate(e, unit) {
    if (unit === "month") {
      let date = year
        ? moment().year(year).month(e.target.value)
        : moment().month(e.target.value);
      setMonth(date.format("MMM"));
      let numOfDays = date.daysInMonth();
      const daysArray = [...Array(numOfDays + 1).keys()].slice(1);
      setDayDropdownOptions(daysArray);
    }
    if (unit === "day") {
      setDay(e.target.value);
    }
    if (unit === "year") {
      let date = month
        ? moment().year(e.target.value).month(month)
        : moment().year(e.target.value);
      setYear(date.format("YYYY"));
      let numOfDays = date.daysInMonth();
      if (day && day > numOfDays) {
        setDay(null);
      }
      const daysArray = [...Array(numOfDays + 1).keys()].slice(1);
      setDayDropdownOptions(daysArray);
    }
  }

  function setDayDropdownOptions(daysArray) {
    daysArray.forEach((day) => dayArray.push({ label: day.toString() }));
    setDayOptions(dayArray);
  }

  useEffect(() => {
    if (day && month && year) {
        props.handleChange(moment().year(year).month(month).date(day).format("MM/DD/YYYY"));
    }
  }, [day, month, year])

  return (
    <>
      <DropdownInput
        label={props.label}
        placeholder={"MM"}
        onChange={(e) => onChangeDate(e, "month")}
        value={month}
        options={monthOptions}
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
