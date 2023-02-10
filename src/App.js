import './App.css';

function App() {
  return (
    <div className="container d-flex align-items-center text-center">
    <div className="form-signin">
      <form>
        <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/vi/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png" alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">Sign in</h1>
        <div className="form-floating">
          <label>Email address: </label>
          <br >
          <input type="email" className="form-control email" id="floatingInput" placeholder="name@example.com" />
        </div>
        <div className="form-floating">
          <label>Password:</label>
          <br >
          <input type="password" className="form-control password" id="floatingPassword" placeholder="Password" />
        </div>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      </form>
    </div>
  </div>
  );
}

export default App;
