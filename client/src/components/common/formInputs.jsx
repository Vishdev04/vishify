import React from "react";

export const FormText = ({ icon, value, label, handleChange }) => {
  return (
    <div className="form-group">
      {icon ? <i className={"fas fa-" + icon}></i> : ""}
      <label htmlFor={value + "field"}>{label}</label>

      <input
        autoComplete="false"
        type="text"
        className="form-control"
        id={value + "field"}
        placeholder={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export const FormEmail = ({ icon, value, label, handleChange }) => {
  return (
    <div className="form-group">
      {icon ? <i className={"fas fa-" + icon}></i> : ""}

      <label htmlFor={value + "field"}>{label}</label>
      <input
        autoComplete="false"
        type="email"
        className="form-control"
        id={value + "field"}
        placeholder={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export const FormPassword = ({ icon, value, label, handleChange }) => {
  return (
    <div className="form-group">
      {icon ? <i className={"fas fa-" + icon}></i> : ""}
      <label htmlFor={value + "field"}>{label}</label>
      <input
        autoComplete="false"
        type="password"
        className="form-control"
        id={value + "field"}
        placeholder={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export const FormTextArea = ({ icon, value, label, handleChange }) => {
  return (
    <div className="form-group">
      {icon ? <i className={"fas fa-" + icon}></i> : ""}
      <label htmlFor={value + "field"}>{label}</label>
      <textarea
        className="form-control"
        id={value + "field"}
        placeholder={value}
        rows="3"
        onChange={(e) => handleChange(e.target.value)}
      ></textarea>
    </div>
  );
};

export const FormFile = ({ icon, value, label, handleChange }) => {
  return (
    <div className="form-group">
      {icon ? <i className={"fas fa-" + icon}></i> : ""}
      <label htmlFor={value + "field"}>{label}</label>
      <input
        autoComplete="false"
        type="file"
        className="form-control-file"
        id={value + "field"}
        placeholder={value}
        onChange={(e) => handleChange(e.target.files[0])}
      />
    </div>
  );
};
