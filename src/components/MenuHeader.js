import React from "react"
import "./styles/MenuHeader.css"

const MenuHeader = () => {
    return <>
     <div className="mainTitleContainer">
        <img src="images/logo.png" alt="logoImage" className="logoImage" />
        <TitleText />
      </div>
    </>
}

const TitleText = () => {
    return (
      <>
        <h3 className="sloganText">Flavorful Moments, Always Fresh!</h3>
        <h3 className="underneathSlogan">Take your pick!</h3>
      </>
    );
  };

  export default MenuHeader;