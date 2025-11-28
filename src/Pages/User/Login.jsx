const Login = () => {
  return (
    <div className="login-page">
      <div className="bg-[#00D09E] pt-[100px] pb-[150px]">
        <h2 className="text-3xl text-center text-white font-bold">Welcome</h2>
      </div>
      <div className="login-form-area">
        <div>
          <form action="">
            <input
              type="email"
              placeholder="Enter your email"
              className="input w-full"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="input w-full"
            />
            <button type="submit" className="btn w-full bg-[#00D09E]">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
