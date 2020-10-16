import React from 'react';


export default function Header() {
  return (
    <div className="headerMovie">
        <div className="logo">
          <img src="https://via.placeholder.com/80" />
        </div>

        <h1>Movie App</h1>

        <nav>
          <ul>
            <a href="/"><li>Home</li></a>
            <a href="/favorites"></a><li>Favoris</li>
            <a href="/login"><li>Login</li></a>
          </ul>
        </nav>
      
    </div>
  );
}
