import { Form, Formik } from "formik";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../App/feature/user/userApi";
import graphic from "../../assets/graphic.svg";
import CustomInput from "../../helpers/custom-input";
import Loader from "../../helpers/Loader";
import { ChatGpt } from "../../icons/Icons";
import { registerSchema } from "../../validation/registationValidation";

const Register = () => {
  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();
  const { state } = useLocation();

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
                  validationSchema={registerSchema}
                  initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    file: "",
                  }}
                  onSubmit={async (values, { resetForm }) => {
                    try {
                      await register(values);
                      state?.from && navigate("/");
                    } catch (error: any) {
                      alert(error?.data?.message);
                    }
                  }}
                >
                  {({ values: { email, name, password }, setFieldValue }) => {
                    return (
                      <Form>
                        <div>
                          <CustomInput
                            name="name"
                            placeholder="Full Name"
                            type="text"
                            value={name}
                          />
                        </div>
                        <div>
                          <CustomInput
                            name="email"
                            placeholder="E-mail Address"
                            type="email"
                            value={email}
                          />
                        </div>

                        <div>
                          <input
                            onChange={(event: any) => {
                              setFieldValue(
                                "file",
                                event.currentTarget.files[0]
                              );
                            }}
                            type={"file"}
                            name="file"
                          />
                        </div>

                        <div>
                          <CustomInput
                            name="password"
                            placeholder="Password"
                            type="password"
                            value={password}
                          />
                        </div>
                        <div className="submit">
                          <button
                            className="submit-button"
                            disabled={isLoading}
                            type="submit"
                          >
                            <span> Register</span>
                            {isLoading && <Loader />}
                          </button>
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

export default Register;
