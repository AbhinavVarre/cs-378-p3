import React from "react";
import "./styles/MenuItem.css";
import { useState, useEffect } from "react";

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.

const MenuItem = ({
  title,
  description,
  imageName,
  price,
  changePrice,
  clearClicked,
  modifyOrderDetails,
  setClearClicked,
}) => {
  const [count, setCount] = useState(0);
  const changeCount = (price, countToAdd) => {
    if (count + countToAdd < 0) {
      return;
    }
    modifyOrderDetails(title, countToAdd);
    setCount((prev) => prev + countToAdd);
    changePrice(price * countToAdd);
  };

  useEffect(() => {
    if (clearClicked) {
      setCount(0);
      setClearClicked(false); // Reset clearClicked to false
    }
  }, [clearClicked]);

  return (
    <div>
      <li className="list-group-item">
        <div className="itemRow">
          <div className="menuImageContainer">
            {/* <img src={sushiImage} alt="n" className="menuImage" /> */}
            <img src={ `images/${imageName}`}
            alt={imageName}
            className="menuImage"
            ></img>
          </div>
          <div className="menuTextContainer">
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <h5 className="itemNameText">{title}</h5>
                <p className="costText">${price}</p>
              </div>
              <p className="menuItemDescriptionText">{description}</p>
            </div>
            <div className="buttonContainer">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => {
                  changeCount(price, 1);
                }}
              >
                +
              </button>
              <div
                style={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  padding: "0 1em 0 1em",
                }}
              >
                <p
                  style={{
                    margin: "0",
                    alignSelf: "center",
                    alignContent: "center",
                  }}
                >
                  {count}
                </p>
              </div>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => {
                  changeCount(price, -1);
                }}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default MenuItem;
