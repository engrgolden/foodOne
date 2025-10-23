import classes from "./RegisterForm.module.scss";

const RegisterForm: () => JSX.Element = () => {
  return (
    <>
      <form action="" method="get" className={classes["signing-form"]}>
        <section className={classes["signing-form-item"]}>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" />
        </section>
        <section className={classes["signing-form-item"]}>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" />
        </section>
        <section className={classes["signing-form-item"]}>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
        </section>
        <section className={classes["signing-form-item"]}>
          <label htmlFor="confirm-password">Confirm password:</label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
          />
        </section>
      </form>
    </>
  );
};

export default RegisterForm;
