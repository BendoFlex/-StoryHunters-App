import React from 'react';

class LoginPage extends React.Component {
  render() {
    return (
      <div id="loginPage">
        <form>
          <h1>Se connecter</h1>
          <p>
            <label>
              E-mail :
              <input type="text" name="email" value="email" />
            </label>
          </p>
          <p>
            <label>
              Password :
              <input type="password" name="password" value="pwd" />
            </label>
          </p>

          <p>
            <input type="submit" value="Se connecter" />
          </p>
        </form>

        <div className="button-test">
          <h1>Pas encore inscrit ?</h1>
          <a href="/register">
            <p>S"inscrire</p>
          </a>
        </div>
      </div>
    );
  }
}

export default LoginPage;
