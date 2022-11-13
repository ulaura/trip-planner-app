import { FirebaseError } from "firebase/app";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_ERROR_MESSAGE } from "../../../Constants";
import { useAuth } from "../../../context/AuthenticationContext";
import { NavRoute } from "../../../Types";
import styles from "./Signup.module.css";


const Signup = () => {  
  const [error, setError] = useState("");

    const {signup} = useAuth();
  const navigate = useNavigate();

  const redirectHandler = () => {
    navigate(NavRoute.HOME, {replace: true});
  }


  const onSubmitHandler = async (event: any) => {

    event.preventDefault();
    const target = event.target;

    const email = target.email.value;
    const password = target.password.value;
    const confirmationPassword = target.confirmPassword.value

    if(password !== confirmationPassword) {
      return setError("Passwords don't match");
    }

    try {
   await signup(email, password, redirectHandler);
  } catch (err) {
    console.log(err);
    const authError = err as FirebaseError; //cast err to FirebaseError
    const message = AUTH_ERROR_MESSAGE.find(error => error.code === authError.code)?.message;
    setError(message || authError.message);
  }
  }

  return (
    <section className={styles.signupFormContent}>
      <div className={styles.signupWrapper}>
        {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={onSubmitHandler}>
        <img src="avatar.png" alt="user logo" className={styles.formImage} />
        <div className={styles.inputGroup}>
          <i className="me-2 fa-solid fa-user"></i>
          <input
            required
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            autoComplete="off"
          />
        </div>
        <div className={styles.inputGroup}>
          <i className="me-2 fa-solid fa-lock"></i>
          <input
            required
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className={styles.inputGroup}>
          <i className="me-2 fa-solid fa-lock"></i>
          <input
            required
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
        </div>
          <button className={styles.registerUserFormBtn} type="submit">REGISTER</button>
      </form>

      </div>
    </section>
  );
};

export default Signup;
