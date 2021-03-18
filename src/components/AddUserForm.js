import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import classnames from "classnames";
// import shortid from "shortid";
import ButtonComponent from "../components/resubaleComponents/ButtonComponent";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions/userAction";

import axios from "axios";

const AddUserForm = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [colleges, setColleges] = useState([]);
  const { register, handleSubmit, errors } = useForm();

  /***************************
   * @DESC get College data
   ***************************/
  // useEffect(() => {
  //   axios
  //     .get(`http://universities.hipolabs.com/search?name=${colleges}`)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [colleges]);

  /***************************
   * @DESC onSubmit Handler
   ***************************/
  const onSubmit = (data) => {
    // let _id = data.Math.floor(Math.random() * 10);
    // console.log(_id);
    dispatch(addUser(data));
    // console.log(data);
  };

  /***************************
   * @DESC First Column
   ***************************/
  const InputForms = () => {
    return (
      <>
        <div className="col-md-6">
          <div className="form-group">
            <input
              name="name"
              placeholder="Name"
              className={classnames("form-control", {
                "is-invalid": errors.name,
              })}
              ref={register({
                required: "this feild is required",
                minLength: {
                  value: 4,
                  message: "please enter full name minimum 4 characters",
                },
              })}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name.message}</div>
            )}
          </div>
          <div className="form-group">
            <input
              name="birthdate"
              placeholder="Date of Birth"
              className={classnames("form-control", {
                "is-invalid": errors.birthdate,
              })}
              ref={register({
                required: "this feild is required",
                message: "please enter valid date od birth",
              })}
            />
            {errors.birthdate && (
              <div className="invalid-feedback">{errors.birthdate.message}</div>
            )}
          </div>
          <div className="form-group">
            <input
              name="email"
              placeholder="Email"
              className={classnames("form-control", {
                "is-invalid": errors.email,
              })}
              ref={register({
                required: "this feild is required",
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-z0-9-]+)*$/,
                  message: "please enter a valid e-mail address",
                },
              })}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>
          <div className="form-group">
            <input
              name="phone"
              placeholder="Phone"
              className={classnames("form-control", {
                "is-invalid": errors.phone,
              })}
              ref={register({
                required: "this feild is required",
                pattern: {
                  value: /^\d{10}$/,
                  message: "please enter a valid 10-digit phone number",
                },
              })}
            />
            {errors.phone && (
              <div className="invalid-feedback">{errors.phone.message}</div>
            )}
          </div>
          <div className="form-group">
            <input
              name="address"
              placeholder="Address"
              className={classnames("form-control", {
                "is-invalid": errors.address,
              })}
              ref={register({
                required: "this feild is required",
                message: "please enter valid address",
              })}
            />
            {errors.address && (
              <div className="invalid-feedback">{errors.address.message}</div>
            )}
          </div>

          <div className="gender-div">
            <p className="mr-3">Gender:</p>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                ref={register({
                  required: "this feild is required",
                })}
                name="gender"
                value="male"
              />
              <label className="form-check-label mr-3" htmlFor="gender">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                ref={register({
                  required: "this feild is required",
                })}
                name="gender"
                value="female"
              />
              <label className="form-check-label mr-3" htmlFor="gender">
                Female
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                ref={register({
                  required: "this feild is required",
                })}
                name="gender"
                value="other"
              />
              <label className="form-check-label mr-3" htmlFor="gender">
                Other
              </label>
            </div>
          </div>
          {errors.gender && (
            <div className="form-text text-danger">{errors.gender.message}</div>
          )}
        </div>
      </>
    );
  };

  /***************************
   * @DESC Second Column
   ***************************/

  const RadioForm = () => {
    return (
      <>
        <div className="col-md-6">
          <p className="mr-3">Hobbies:</p>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              ref={register({
                required: "this feild is required",
              })}
              name="hobbies"
              value="reading"
            />
            <label classNames="form-check-label" htmlFor="hobbies">
              Reading
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              ref={register({
                required: "this feild is required",
              })}
              name="hobbies"
              value="gaming"
            />
            <label classNames="form-check-label" htmlFor="hobbies">
              Gaming
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              ref={register({
                required: "this feild is required",
              })}
              name="hobbies"
              value="traveling"
            />
            <label classNames="form-check-label" htmlFor="hobbies">
              Traveling
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              ref={register({
                required: "this feild is required",
              })}
              name="hobbies"
              onChange={() => setChecked(!checked)}
              checked={checked}
            />
            <label classNames="form-check-label" htmlFor="hobbies">
              Other
            </label>
            {checked ? (
              <input
                name="other"
                type="text"
                placeholder="Other"
                ref={register}
                className="ml-2"
              />
            ) : (
              ""
            )}
          </div>

          {errors.hobbies && (
            <div className="form-text text-danger">
              {errors.hobbies.message}
            </div>
          )}
          <div className="form-group">
            <label htmlFor="college">Choose Your College</label>
            <select
              name="college"
              id="college"
              className={classnames("form-control", {
                "is-invalid": errors.college,
              })}
              ref={register({
                required: "this feild is required",
                message: "please select college",
              })}
            >
              <option value="">--- Select your college---</option>
              <option value="Pune Univercity">Pune Univercity</option>
              <option value="AISSMS IOIT">AISSMS IOIT</option>
              <option value="Modern College">Modern College</option>
            </select>
          </div>

          {errors.college && (
            <div className="invalid-feedback">{errors.college.message}</div>
          )}
        </div>
      </>
    );
  };

  return (
    <>
      <div className="user-form container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            {InputForms()}
            {RadioForm()}

            <ButtonComponent
              type="submit"
              buttontext="Submit"
              buttonclass="custom-button"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddUserForm;
