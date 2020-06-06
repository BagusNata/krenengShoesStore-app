import React from "react";
import Toggle from "./Toggle";

function Header() {
  return (
    <div>
      <header className="market-headerr">
        <br />
        <h1>Muvesuna Shoe Store</h1>
        <h3>All the shoes come straight from China</h3>
      </header>

      <div>
        <Toggle />
      </div>
    </div>
  );
}

export default Header;
