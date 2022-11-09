import styles from "./Signup.module.css";

const Signup = () => {
  
  return (
    <section className={styles.signupFormContent}>
      <div className={styles.signupWrapper}>
      <form>
        <img src="avatar.png" alt="user logo" className={styles.formImage} />
        <div className={styles.inputGroup}>
          <i className="me-2 fa-solid fa-user"></i>
          <input
            type="text"
            name="signupUser"
            id="signupUser"
            placeholder="Email"
          />
        </div>
        <div className={styles.inputGroup}>
          <i className="me-2 fa-solid fa-lock"></i>
          <input
            type="password"
            name="signupPassword"
            id="signupPassword"
            placeholder="Password"
          />
        </div>
        <div className={styles.inputGroup}>
          <i className="me-2 fa-solid fa-lock"></i>
          <input
            type="password"
            name="signupConfirmPassword"
            id="signupConfirmPassword"
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
