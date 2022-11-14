import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FirebaseError } from "firebase/app";
import { AUTH_ERROR_MESSAGE } from "../../../Constants";
import { useAuth } from "../../../context/AuthenticationContext";
import { NavRoute } from "../../../Types";
import styles from "./Signin.module.css";

const Signin =  () => {

  const {signin} = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleRedirect = () => {
    navigate(NavRoute.HOME, {replace: true});
  }


  const formSubmitHandler = async (event: any) => {
    event?.preventDefault();
    const target = event.target;
    const email = target.email.value;
    const password = target.password.value;

    try {
    await signin(email, password, handleRedirect);
    } catch (err) {
      const authError = err as FirebaseError;
      const message = AUTH_ERROR_MESSAGE.find(error => error.code === authError.code)?.message;
      setError(message || authError.message);
    }
  };

  return (
    <section className={styles.signinFormContent}>
      <div className={styles.signinWrapper}>
        {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={formSubmitHandler}>
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
            autoComplete="off"
          />
        </div>

          <button className={styles.loginUserFormBtn} type="submit">LOGIN</button>
      </form>

      <Link to="/signup">Registere here</Link>
      </div>
    </section>
  );
};

export default Signin;
