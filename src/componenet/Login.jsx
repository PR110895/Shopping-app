import React from "react";

function Login() {
  return (
    <div className="container">
      <div className="row-3">
        <div className="modal-body">
          <button className="btn btn-primary w-100 mb-2">
            <span className="fa fa-google me-2"></span> Sign in With Google
          </button>
          <button className="btn btn-primary w-100 mb-2">
            <span className="fa fa-facebook me-2"></span> Sign in With Facebook
          </button>

          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail2" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword2" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword2"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck2"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-outline-primary w-100 mt-5"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
