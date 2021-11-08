import React from "react";
import Nav from "../../components/Nav";

function Header(props) {
  const { currentTab, setCurrentTab } = props;

  return (
    <header>
      <div>
        <h2>do what excites!</h2>
      </div>
      <div>
        <Nav currentTab={currentTab} setCurrentTab={setCurrentTab}></Nav>
      </div>
    </header>
  );
}

export default Header;