import { FastField, Form, Formik } from "formik";
import { Link, NavLink } from "react-router-dom";
import { useLoginMutation } from "../../App/feature/user/userApi";
import graphic from "../../assets/graphic.svg";
import { ChatGpt } from "../../icons/Icons";
import { loginSchema } from "../../validation/registationValidation";

const Login = () => {
  const [login, { data, isLoading }] = useLoginMutation();
  return (
    <section>
      <div className="form-body">
        <div className="website-logo">
          <ChatGpt />
          <h1>Chat-gpt 2.0</h1>
        </div>
        <div className="row">
          <div className="img-holder">
            <div className="info-holder">
              <img src={graphic} alt="graphif" />
            </div>
          </div>
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                <h1>Get more things done with Loggin platform.</h1>
                <p>
                  Access to the most powerfull tool in the entire design and web
                  industry.
                </p>

                <ul className="page-routes">
                  <li>
                    <NavLink
                      to={"/account/login"}
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) => (isActive ? "active" : "")}
                      to={"/account/register"}
                    >
                      Register
                    </NavLink>
                  </li>
                </ul>

                <Formik
                  validationSchema={loginSchema}
                  initialValues={{ email: "", password: "" }}
                  onSubmit={(values) => {
                    login(values);
                  }}
                >
                  {({ values }) => {
                    return (
                      <Form>
                        <div>
                          <FastField
                            value={values.email}
                            name="email"
                            placeholder="E-mail Address"
                            type="email"
                          />
                        </div>

                        <div>
                          <FastField
                            value={values.password}
                            name="password"
                            placeholder="Password"
                            type="password"
                          />
                        </div>
                        <div className="submit">
                          <button type="submit">Login</button>
                          <Link to="/">Forget Password</Link>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
