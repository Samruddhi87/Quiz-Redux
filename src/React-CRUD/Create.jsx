import React from "react";
import { useState } from "react";
import axios from "axios";
const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get("http://localhost:8001/api/get");
  };
  return (
    <div className="container">
      <form className="row g-3">
        <div className="col-auto">
          <label for="staticEmail2" className="visually-hidden">
            Name
          </label>
          <input
            type="text"
            readonly
            className="form-control-plaintext"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="col-auto">
          <label for="inputPassword2" className="visually-hidden">
            Email
          </label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="col-auto">
          <button
            type="submit"
            className="btn btn-primary mb-3"
            onClick={handleSubmit}
          >
            Confirm identity
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
