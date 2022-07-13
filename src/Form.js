import { useState } from "react";
import './App.css';

export default function Form() {
  const [TradeLicenseNo, setTradeLicenseNo] = useState("");
  const [BusinessOrganizationName, setBusinessOrganizationName] = useState("");
  const [Name, setName] = useState("");
  const [FathersName, setFathersName] = useState("");
  const [MothersName, setMothersName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");
  const [TypeOfBusiness, setTypeOfBusiness] = useState("");
  const [IssueDate, setIssueDate] = useState("");
  const [ExpiryDate, setExpiryDate] = useState("");
  const [TradeLicenseFee, setTradeLicenseFee] = useState("");
  const [VATdeposit, setVATdeposit] = useState("");
  const [CareerTax, setCareerTax] = useState("");
  const [AdvertisingTax, setAdvertisingTax] = useState("");
  const [Arrears, setArrears] = useState("");
  const [ServiceCharge, setServiceCharge] = useState("");
  const [Total, setTotal] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleTradeLicenseNo = (e) => {
    setTradeLicenseNo(e.target.value);
    setSubmitted(false);
  };

  const handleBusinessOrganizationName = (e) => {
    setBusinessOrganizationName(e.target.value);
    setSubmitted(false);
  };

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  const handleFathersName = (e) => {
    setFathersName(e.target.value);
    setSubmitted(false);
  };

  const handleMothersName = (e) => {
    setMothersName(e.target.value);
    setSubmitted(false);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
    setSubmitted(false);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
    setSubmitted(false);
  };

  const handleTypeOfBusiness = (e) => {
    setTypeOfBusiness(e.target.value);
    setSubmitted(false);
  };

  const handleIssueDate = (e) => {
    setIssueDate(e.target.value);
    setSubmitted(false);
  };

  const handleExpiryDate = (e) => {
    setExpiryDate(e.target.value);
    setSubmitted(false);
  };

  const handleTradeLicenseFee = (e) => {
    setTradeLicenseFee(e.target.value);
    setSubmitted(false);
  };

  const handleVATdeposit = (e) => {
    setVATdeposit(e.target.value);
    setSubmitted(false);
  };

  const handleCareerTax = (e) => {
    setCareerTax(e.target.value);
    setSubmitted(false);
  };

  const handleAdvertisingTax = (e) => {
    setAdvertisingTax(e.target.value);
    setSubmitted(false);
  };

  const handleArrears = (e) => {
    setArrears(e.target.value);
    setSubmitted(false);
  };

  const handleServiceCharge = (e) => {
    setServiceCharge(e.target.value);
    setSubmitted(false);
  };

  const handleTotal = (e) => {
    setTotal(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      TradeLicenseNo === "" ||
      BusinessOrganizationName === "" ||
      Name === "" ||
      FathersName === "" ||
      MothersName === "" ||
      Phone === "" ||
      Address === "" ||
      TypeOfBusiness === "" ||
      IssueDate === "" ||
      ExpiryDate === "" ||
      TradeLicenseFee === "" ||
      VATdeposit === "" ||
      CareerTax === "" ||
      AdvertisingTax === "" ||
      Arrears === "" ||
      ServiceCharge === "" ||
      Total === ""
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>
          Trade License No. {TradeLicenseNo} successfully filled the information
        </h1>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="form">
      <h1 className="form__Heading">Trade License Certificate</h1>

      <div className="Structure">
        <form className="Form__Fields">
          <img
            className="bd-gov"
            src="https://certificate.upsheba.com/img/bd-gov.png"
          />
          <label className="label">Trade License No. : </label> <input onChange={handleTradeLicenseNo} className="input" value={TradeLicenseNo} type="number"/>

          <label className="label">Name of the business organization : </label>
          <input
            onChange={handleBusinessOrganizationName}
            className="input"
            value={BusinessOrganizationName}
            type="text"
          />

          <label className="label">Name : </label>
          <input
            onChange={handleName}
            className="input"
            value={Name}
            type="text"
          />

          <label className="label">Father's/Husband's Name : </label>
          <input
            onChange={handleFathersName}
            className="input"
            value={FathersName}
            type="text"
          />

          <label className="label">Mother's Name : </label>
          <input
            onChange={handleMothersName}
            className="input"
            value={MothersName}
            type="text"
          />

          <label className="label">Phone : </label>
          <input
            onChange={handlePhone}
            className="input"
            value={Phone}
            type="text"
          />

          <label className="label">
            Address of the business organization :{" "}
          </label>
          <input
            onChange={handleAddress}
            className="input"
            value={Address}
            type="text"
          />

          <label className="label">Type of Business : </label>
          <input
            onChange={handleTypeOfBusiness}
            className="input"
            value={TypeOfBusiness}
            type="text"
          />

          <label className="label">Date of Issue : </label>
          <input
            onChange={handleIssueDate}
            className="input"
            value={IssueDate}
            type="text"
          />

          <label className="label">Expiry Date : </label>
          <input
            onChange={handleExpiryDate}
            className="input"
            value={ExpiryDate}
            type="text"
          />

          <label className="label">Trade license fee (annually) : </label>
          <input
            onChange={handleTradeLicenseFee}
            className="input"
            value={TradeLicenseFee}
            type="text"
          />

          <label className="label">15% VAT deposit : </label>
          <input
            onChange={handleVATdeposit}
            className="input"
            value={VATdeposit}
            type="text"
          />

          <label className="label">
            Tax on career business and scholarship :{" "}
          </label>
          <input
            onChange={handleCareerTax}
            className="input"
            value={CareerTax}
            type="text"
          />

          <label className="label">Advertising tax (annually) : </label>
          <input
            onChange={handleAdvertisingTax}
            className="input"
            value={AdvertisingTax}
            type="text"
          />

          <label className="label">Arrears (annually) : </label>
          <input
            onChange={handleArrears}
            className="input"
            value={Arrears}
            type="text"
          />

          <label className="label">Service Charge (Annually) : </label>
          <input
            onChange={handleServiceCharge}
            className="input"
            value={ServiceCharge}
            type="text"
          />

          <label className="label">Total : </label>
          <input
            onChange={handleTotal}
            className="input"
            value={Total}
            type="text"
          />

          <div className="uploadDiv">
            <label className="custom-file-upload">
              <input type="file" />
              Signature1
            </label>

            <label className="custom-file-upload">
              <input type="file" />
              Signature2
            </label>
          </div>

          <button onClick={handleSubmit} className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
