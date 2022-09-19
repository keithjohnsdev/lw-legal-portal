import FloatingInput from "./Shared/FloatingInput";
import DropdownInput from "./Shared/DropdownInput";
import DropdownInputRight from "./Shared/DropdownInputRight";
import { Header, Header2 } from "./Shared/Header";
import { useEffect, useState } from "react";
import Container from "./Shared/Container";
import { Link, useNavigate } from "react-router-dom";
import OpposingCounselTable from "./OpposingCounselTable";
import moment from "moment";

const AddCase = (props) => {
  const [caseInfoData, setCaseInfoData] = useState({});
  const [formFilled, setFormFilled] = useState(true);
  const [internalCounsel, setInternalCounsel] = useState(null);
  const [opposingCounsel, setOpposingCounsel] = useState(null);
  const [procedureCodes, setProcedureCodes] = useState(null);
  const [diagnosisCodes, setDiagnosisCodes] = useState(null);
  const [NDCCodes, setNDCCodes] = useState(null);
  const currentYear = new Date();
  const dayArray = [];
  const [startDayOptions, setStartDayOptions] = useState([]);
  const [endDayOptions, setEndDayOptions] = useState([]);
  const monthOptions = [
    { label: "Jan" },
    { label: "Feb" },
    { label: "Mar" },
    { label: "Apr" },
    { label: "May" },
    { label: "Jun" },
    { label: "Jul" },
    { label: "Aug" },
    { label: "Sep" },
    { label: "Oct" },
    { label: "Nov" },
    { label: "Dec" },
  ];
  const yearOptions = [];
  const navigate = useNavigate();
  for (var i = 1900; i <= currentYear.getFullYear(); i++) {
    yearOptions.push({ label: i.toString() });
  }

  function handleChange(key, value) {
    setCaseInfoData((prev) => ({ ...prev, [key]: value }));
    console.log(caseInfoData);
  }

  function onChangeDate(e, type, unit) {
    if (type === "start") {
      if (unit === "month") {
        let date = caseInfoData.docStartYear
          ? moment().year(caseInfoData.docStartYear).month(e.target.value)
          : moment().month(e.target.value);
        handleChange("docStartMonth", e.target.value);
        let numOfDays = date.daysInMonth();
        const daysArray = [...Array(numOfDays + 1).keys()].slice(1);
        setStartDayDropdownOptions(daysArray);
      }
      if (unit === "year") {
        let date = caseInfoData.docStartMonth
          ? moment().year(e.target.value).month(caseInfoData.docStartMonth)
          : moment().year(e.target.value);
          console.log(date.format("MM DD YYYY"));
        handleChange("docStartYear", e.target.value);
        let numOfDays = date.daysInMonth();
        if (caseInfoData.docStartDay && caseInfoData.docStartDay > numOfDays) {
          setCaseInfoData((prev) => ({ ...prev, docStartDay: null }));
        }
        const daysArray = [...Array(numOfDays + 1).keys()].slice(1);
        setStartDayDropdownOptions(daysArray);
      }
    }

    if (type === "end") {
      if (unit === "month") {
        let date = caseInfoData.docEndYear
          ? moment().year(caseInfoData.docEndYear).month(e.target.value)
          : moment().month(e.target.value);
        handleChange("docEndMonth", e.target.value);
        let numOfDays = date.daysInMonth();
        const daysArray = [...Array(numOfDays + 1).keys()].slice(1);
        setEndDayDropdownOptions(daysArray);
      }
      if (unit === "year") {
        let date = caseInfoData.docEndMonth
          ? moment().year(e.target.value).month(caseInfoData.docEndMonth)
          : moment().year(e.target.value);
          console.log(date.format("MM DD YYYY"));
        handleChange("docEndYear", e.target.value);
        let numOfDays = date.daysInMonth();
        if (caseInfoData.docEndDay && caseInfoData.docEndDay > numOfDays) {
          setCaseInfoData((prev) => ({ ...prev, docEndDay: null }));
        }
        const daysArray = [...Array(numOfDays + 1).keys()].slice(1);
        setEndDayDropdownOptions(daysArray);
      }
    }
  }

  // function onChangeMonth(e, type) {
  //   if (type === "start") {
  //     let date = caseInfoData.docStartYear
  //       ? moment().year(caseInfoData.docStartYear).month(e.target.value)
  //       : moment().month(e.target.value);
  //     handleChange("docStartMonth", e.target.value);
  //     let numOfDays = date.daysInMonth();
  //     const daysArray = [...Array(numOfDays + 1).keys()].slice(1);
  //     setStartDayDropdownOptions(daysArray);
  //   }

  //   if (type === "end") {
  //     let endMonth = moment().month(e.target.value);
  //     let numOfDays = endMonth.daysInMonth();
  //     const daysArray = [...Array(numOfDays + 1).keys()].slice(1);
  //     setEndDayDropdownOptions(daysArray);
  //     handleChange("docEndMonth", e.target.value);
  //   }
  // }

  function setStartDayDropdownOptions(daysArray) {
    daysArray.forEach((day) => dayArray.push({ label: day.toString() }));
    setStartDayOptions(dayArray);
  }

  function setEndDayDropdownOptions(daysArray) {
    daysArray.forEach((day) => dayArray.push({ label: day.toString() }));
    setEndDayOptions(dayArray);
  }

  // function onChangeYear(e, type) {
  //   if (type === "start") {
  //     let startYear = moment().year(e.target.value);
  //     console.log(startYear.format("YYYY"));
  //     handleChange("docStartYear", e.target.value);
  //     checkValidity("date");
  //   }
  // }

  // Check relevant inputs for validity, add valid state to isValid object
  function checkValidity(type, value) {
    if (type === "text") {
      if (!formFilled) {
        return value ? true : false;
      }
    }
    if (type === "email") {
      if (!formFilled) {
        return (
          (value ? true : false) && value.includes("@") && value.includes(".")
        );
      }
      return !value || (value.includes("@") && value.includes("."));
    }
    if (type === "date") {
      if (!formFilled) {
        return (
          (value ? true : false) &&
          caseInfoData.docEndDate > caseInfoData.docStartDate
        );
      }
      // if (caseInfoData.docStartDate) {
      //   let startDate = moment(
      //     `${caseInfoData.docStartYear}-${caseInfoData.docStartMonth}-${caseInfoData.docStartDay}`
      //   );
      // }
      if (caseInfoData.docEndDate && caseInfoData.docStartDate) {
        return caseInfoData.docEndDate > caseInfoData.docStartDate;
      }
      return true;
    }
  }

  // Create and store Date object in caseInfoData once month, day and year are selected
  useEffect(() => {
    if (
      caseInfoData.docStartMonth &&
      caseInfoData.docStartDay &&
      caseInfoData.docStartYear
    ) {
      let startDate = new Date(
        moment().year(caseInfoData.docStartYear).month(caseInfoData.docStartMonth).date(caseInfoData.docStartDay).toDate()
      );
      handleChange("docStartDate", startDate);
    }
    if (
      caseInfoData.docEndMonth &&
      caseInfoData.docEndDay &&
      caseInfoData.docEndYear
    ) {
      let endDate = new Date(
        moment().year(caseInfoData.docEndYear).month(caseInfoData.docEndMonth).date(caseInfoData.docEndDay).toDate()
      );
      handleChange("docEndDate", endDate);
    }
  }, [
    caseInfoData.docEndDay,
    caseInfoData.docEndMonth,
    caseInfoData.docEndYear,
    caseInfoData.docStartDay,
    caseInfoData.docStartMonth,
    caseInfoData.docStartYear,
  ]);

  useEffect(() => {
    if (
      caseInfoData.caseTitle &&
      caseInfoData.defendant &&
      caseInfoData.lawsuitType &&
      caseInfoData.jurisdiction &&
      caseInfoData.judge &&
      caseInfoData.circuit &&
      caseInfoData.caseFileEmail &&
      caseInfoData.docStartDate &&
      caseInfoData.docEndDate &&
      checkValidity("email", caseInfoData.caseFileEmail) &&
      checkValidity("date", caseInfoData.docEndDate)
    ) {
      setFormFilled(true);
     }
  }, [caseInfoData])

  function handleSave() {
    if (
      caseInfoData.caseTitle &&
      caseInfoData.defendant &&
      caseInfoData.lawsuitType &&
      caseInfoData.jurisdiction &&
      caseInfoData.judge &&
      caseInfoData.circuit &&
      caseInfoData.caseFileEmail &&
      caseInfoData.docStartDate &&
      caseInfoData.docEndDate &&
      checkValidity("email", caseInfoData.caseFileEmail) &&
      checkValidity("date", caseInfoData.docEndDate)
    ) {
      console.log(caseInfoData);
      // navigate("/");
    } else {
      setFormFilled(false);
    }
  }

  return (
    <>
      <Header>
        <Header2
          centerTitle="Add New Case"
          leftLinkTo="/"
          onClick={handleSave}
        />
        {!formFilled && (
          <p className="form-incomplete-msg">
            Please fill out the complete form.
          </p>
        )}
      </Header>
      <section className="form-section">
        <div className="case-info">
          <Container>
            <h3>Case Information</h3>
            <div className="form-row">
              <FloatingInput
                placeholder="Enter Case Title"
                onChange={(e) => handleChange("caseTitle", e.target.value)}
                value={caseInfoData.caseTitle || ""}
                isValid={checkValidity("text", caseInfoData.caseTitle)}
              />
              <FloatingInput
                placeholder="Enter Defendant Name"
                onChange={(e) => handleChange("defendant", e.target.value)}
                value={caseInfoData.defendant || ""}
                isValid={checkValidity("text", caseInfoData.defendant)}
              />
              <DropdownInputRight
                label="Select Lawsuit Type"
                placeholder="Select Value"
                onChange={(e) => handleChange("lawsuitType", e.target.value)}
                value={caseInfoData.lawsuitType || "Select Value"}
                options={[
                  { value: "Type 1", label: "Type 1" },
                  { value: "Type 2", label: "Type 2" },
                ]}
                isValid={checkValidity("text", caseInfoData.lawsuitType)}
              />
            </div>
            <div className="form-row">
              <DropdownInput
                label="Select Jurisdiction"
                placeholder="Select Value"
                onChange={(e) => handleChange("jurisdiction", e.target.value)}
                value={caseInfoData.jurisdiction || "Select Value"}
                options={[
                  { value: "Type 1", label: "Type 1" },
                  { value: "Type 2", label: "Type 2" },
                ]}
                isValid={checkValidity("text", caseInfoData.jurisdiction)}
              />
              <FloatingInput
                placeholder="Enter Judge Name"
                onChange={(e) => handleChange("judge", e.target.value)}
                value={caseInfoData.judge || ""}
                isValid={checkValidity("text", caseInfoData.judge)}
              />
              <DropdownInputRight
                label="Select Circuit"
                placeholder="Select Value"
                onChange={(e) => handleChange("circuit", e.target.value)}
                value={caseInfoData.circuit || "Select Value"}
                options={[
                  { value: "Type 1", label: "Type 1" },
                  { value: "Type 2", label: "Type 2" },
                ]}
                isValid={checkValidity("text", caseInfoData.circuit)}
              />
            </div>
            <div className="form-row">
              <FloatingInput
                placeholder="Enter Case File Email"
                onChange={(e) => handleChange("caseFileEmail", e.target.value)}
                value={caseInfoData.caseFileEmail || ""}
                isValid={checkValidity("email", caseInfoData.caseFileEmail)}
                invalidMsg="Please provide a valid email."
              />
            </div>
          </Container>
        </div>
      </section>
      <section id="internal-counsel" className="general-external-form">
        <Container>
          <div className="section-title">
            <h3>Internal Counsel</h3>
            <Link to="/add-internal-counsel" className="external-form-link">
              Select Internal Counsel
            </Link>
          </div>
          {internalCounsel ? (
            ""
          ) : (
            <p className="no-entry">
              No internal counsel members currently listed.
            </p>
          )}
        </Container>
      </section>
      <section id="opposing-counsel" className="general-external-form">
        <Container>
          <div className="section-title">
            <h3>Opposing Counsel</h3>
            <Link to="/add-opposing-counsel" className="external-form-link">
              + Add Opposing Counsel
            </Link>
          </div>
          {opposingCounsel ? (
            <OpposingCounselTable />
          ) : (
            <p className="no-entry">
              No opposing counsel members currently listed.
            </p>
          )}
        </Container>
      </section>
      <section id="document-dates" className="general-external-form">
        <Container>
          <h3 style={{ padding: "5px 0 33px 0" }}>Document Dates</h3>
          <div className="date-dropdown-div">
            <DropdownInput
              label="Start Date"
              placeholder={"MM"}
              onChange={(e) => onChangeDate(e, "start", "month")}
              value={caseInfoData.docStartMonth || "MM"}
              options={monthOptions}
              modifier="month"
              isValid={checkValidity("text", caseInfoData.docStartMonth)}
            ></DropdownInput>
            <DropdownInput
              label=""
              placeholder={"DD"}
              onChange={(e) => handleChange("docStartDay", e.target.value)}
              value={caseInfoData.docStartDay || "DD"}
              options={startDayOptions}
              modifier="day"
              isValid={checkValidity("text", caseInfoData.docStartDay)}
            ></DropdownInput>
            <DropdownInput
              label=""
              placeholder={"YEAR"}
              onChange={(e) => onChangeDate(e, "start", "year")}
              value={caseInfoData.docStartYear || "YEAR"}
              options={yearOptions.reverse()}
              modifier="year"
              isValid={checkValidity("text", caseInfoData.docStartYear)}
            ></DropdownInput>
            <div style={{ width: "70px" }}></div>
            <DropdownInput
              label="End Date"
              placeholder={"MM"}
              onChange={(e) => onChangeDate(e, "end", "month")}
              value={caseInfoData.docEndMonth || "MM"}
              options={monthOptions}
              modifier="month"
              isValid={checkValidity("text", caseInfoData.docEndMonth)}
            ></DropdownInput>
            <DropdownInput
              label=""
              placeholder={"DD"}
              onChange={(e) => handleChange("docEndDay", e.target.value)}
              value={caseInfoData.docEndDay || "DD"}
              options={endDayOptions}
              modifier="day"
              isValid={checkValidity("text", caseInfoData.docEndDay)}
            ></DropdownInput>
            <DropdownInput
              label=""
              placeholder={"YEAR"}
              onChange={(e) => onChangeDate(e, "end", "year")}
              value={caseInfoData.docEndYear || "YEAR"}
              options={yearOptions}
              isValid={checkValidity("text", caseInfoData.docEndYear)}
              modifier="year"
            ></DropdownInput>
            {checkValidity("date", caseInfoData.docEndDate) !== true && (
              <p className="date-invalid-msg">
                {caseInfoData.docStartDate && caseInfoData.docEndDate
                  ? "End date must be after start date."
                  : ""}
              </p>
            )}
          </div>
        </Container>
      </section>
      <section id="procedure-codes" className="general-external-form">
        <Container>
          <div className="section-title">
            <h3>Procedure Codes</h3>
            <Link to="/" className="external-form-link">
              + Add Procedure Code(s)
            </Link>
          </div>
          {procedureCodes ? (
            ""
          ) : (
            <p className="no-entry">No procedure codes currently listed.</p>
          )}
        </Container>
      </section>
      <section id="diagnosis-codes" className="general-external-form">
        <Container>
          <div className="section-title">
            <h3>Diagnosis Codes</h3>
            <Link to="/" className="external-form-link">
              + Add Diagnosis Code(s)
            </Link>
          </div>
          {diagnosisCodes ? (
            ""
          ) : (
            <p className="no-entry">No diagnosis codes currently listed.</p>
          )}
        </Container>
      </section>
      <section id="NDC-codes" className="general-external-form">
        <Container>
          <div className="section-title">
            <h3>NDC Codes</h3>
            <Link to="/" className="external-form-link">
              + Add NDC Code(s)
            </Link>
          </div>
          {NDCCodes ? (
            ""
          ) : (
            <p className="no-entry">No NDC codes currently listed.</p>
          )}
        </Container>
      </section>
    </>
  );
};

export default AddCase;
