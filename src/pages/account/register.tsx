import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="login-section">
      <video src="/video.mp4" autoPlay loop muted />
      <div className="form-box">
        <div className="form-value">
          <form>
            <h2>Login</h2>
            <div className="input-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <input id="email" type="email" name="email" required />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>

              <input id="password" type="password" name="password" required />
              <label htmlFor="password">Password</label>
            </div>

            <div className="forget">
              <label htmlFor="remember">
                <input id="remember" type={"checkbox"} />
                Remember me
              </label>
              <a href="/">Forget Password</a>
            </div>
            <button type="submit">Loign</button>

            <div className="register">
              <p>
                Don't have a account{" "}
                <Link to="/account/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
