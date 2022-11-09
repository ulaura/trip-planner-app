import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  
  return (
    <section className={styles.loginFormContent}>
      <div className={styles.loginWrapper}>
      <form>
        <img src="avatar.png" alt="user logo" className={styles.formImage} />
        <div className={styles.inputGroup}>
          <i className="me-2 fa-solid fa-user"></i>
          <input
            type="text"
            name="loginUser"
            id="loginUser"
            placeholder="Email"
          />
        </div>
        <div className={styles.inputGroup}>
          <i className="me-2 fa-solid fa-lock"></i>
          <input
            type="password"
            name="loginPassword"
            id="loginPassword"
            placeholder="Password"
          />
        </div>

          <button className={styles.loginUserFormBtn} type="submit">LOGIN</button>
      </form>

      <Link to="/signup">Registere here</Link>
      </div>
    </section>
  );
};

export default Login;
