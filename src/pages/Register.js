import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};
const Register = () => {
  const navigate = useNavigate(); // setting up the useNavigate
  const [values, setValues] = useState(initialState);
  const {
    user,
    isLoading,
    showAlert,
    displayAlert,
    registerUser,
    loginUser,
    setupUser,
  } = useAppContext();
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value }); // dynamic object keys. makes so much sense
    // console.log(values);
  };
  const onSubmit = (e) => {
    e.preventDefault(); // this prevents submission.
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };
    if (isMember) {
      // loginUser(currentUser);
      setupUser({
        currentUser,
        endPoint: "login",
        alertText: "Login successful! Redirecting",
      });
    } else {
      setupUser({
        currentUser,
        endPoint: "register",
        alertText: "User Created!! successful! Redirecting",
      });
    }
  };
  const toggleMember = () => {
    console.log("this changes the values of the members.");
    setValues({ ...values, isMember: !values.isMember });
  };
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        {/* conditionally rendering based on the isMember boolean value */}
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {/* name input */}
        {/* toggle name */}
        {/* we are using conditional rendering to do this. */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* email input */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* password input */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          submit
        </button>
        <p>
          {/* conditional rendering based on the value of isMember */}
          {values.isMember ? "Not a member yet" : "Already a member"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
