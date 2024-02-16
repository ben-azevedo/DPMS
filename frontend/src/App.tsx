import bananaLogo from "/banana.svg";
import "./App.css";

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={bananaLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Design Project Management System</h1>

      <h3 id="user"></h3>

      <form id="sign_up_form">
        <input type="text" id="signup-email" placeholder="Email" />
        <input type="password" id="signup-password" placeholder="Password" />
        <input
          type="password"
          id="signup-password-confirm"
          placeholder="Confirm Password"
        />
        <button type="submit" id="Sign Up">
          Submit
        </button>
      </form>

      <form id="sign_in_form">
        <input type="text" id="signin-email" placeholder="Email" />
        <input type="password" id="signin-password" placeholder="Password" />
        <button type="submit" id="Login">
          Submit
        </button>
      </form>

      <button id="sign_out">Logout</button>
    </>
  );
}

export default App;
