import { Link, useLocation } from "react-router-dom";

interface Props {
  children?: any;
  title?: string;
}

const Login = ({ children }: Props) => {
  const { pathname } = useLocation();

  const isLoginPage = pathname === "/account/login";
  const title = pathname.split("/")[2];

  return (
    <section className="login-section">
      <video src="/video.mp4" autoPlay loop muted />
      <div className="form-box">
        <div className="form-value">
          <form>
            <h2>{title}</h2>

            {!isLoginPage && (
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
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <input id="email" type="email" name="email" required />
                <label htmlFor="email">Name</label>
              </div>
            )}
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
            {isLoginPage && (
              <div className="forget">
                <label htmlFor="remember">
                  <input id="remember" type={"checkbox"} />
                  Remember me
                </label>
                <a href="/">Forget Password</a>
              </div>
            )}

            <button type="submit">{title}</button>

            <div className="register">
              {isLoginPage ? (
                <p>
                  Don't have a account
                  <Link to={"/account/register"}>Register</Link>
                </p>
              ) : (
                <p>
                  Already have an account?
                  <Link to={"/account/login"}>Login</Link>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
