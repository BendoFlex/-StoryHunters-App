import React from 'react';
import LayoutSpaceAround from './LayoutSpaceAround';


export default function Header() {
  return (
    <div className="headerMovie">
      <LayoutSpaceAround>
        
          <div className="logo">
            <img src="https://via.placeholder.com/80" />
          </div>

          <h1>Movie App</h1>

          <nav>
            <ul>
              <LayoutSpaceAround>
                <a href="/"><li>Home</li></a>
                <a href="/favorites"></a><li>Favoris</li>
                <a href="/login"><li>Login</li></a>
                </LayoutSpaceAround>
            </ul>
          </nav>
       </LayoutSpaceAround>
    </div>
  );
}
