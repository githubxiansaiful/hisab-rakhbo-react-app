import { Link } from "react-router";

const Register = () => {
  return (
    <div className="login-page">
      <div className="bg-[#00D09E] pt-[60px] pb-[130px]">
        <h2 className="text-3xl text-center text-white font-bold">
          Create Account
        </h2>
      </div>
      <div className="login-form-area">
        <div>
          <div className="form-header">
            <h2>Sign up with Email</h2>
          </div>
          <form action="">
            <div className="single-input">
              <label htmlFor="">Email</label>
              <input type="email" placeholder="example@gmal.com" />
            </div>
            <div className="single-input">
              <label htmlFor="">Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>
            <div className="submit-button">
              <button type="submit">Sign Up</button>
            </div>
          </form>
          <p className="pt-4 max-w-[500px] mx-auto">
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Login
            </Link>
          </p>
        </div>
        <div className="divider my-[20px] max-w-[500px] mx-auto">OR</div>
        <div className="social-login">
          {/* Google */}
          <button className="btn bg-white text-black border-[#e5e5e5]">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Sign Up with Google
          </button>
          {/* Facebook */}
          <button className="btn bg-[#1A77F2] text-white border-[#005fd8]">
            <svg
              aria-label="Facebook logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path
                fill="white"
                d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
              ></path>
            </svg>
            Sign Up with Facebook
          </button>
          {/* X */}
          <button className="btn bg-black text-white border-black">
            <svg
              aria-label="X logo"
              width="16"
              height="12"
              viewBox="0 0 300 271"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"
              />
            </svg>
            Sign Up with X
          </button>
        </div>
      </div>
    </div>
  );
};
export default Register;
