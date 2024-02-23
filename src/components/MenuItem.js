import React from "react";
import "./styles/MenuItem.css";

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price }) => {
  return (
    <div>
      <li className="list-group-item">
        <div className="itemRow">
          <div className="menuImageContainer">
            <img src={ `images/${imageName}`}
            alt={imageName}
            className="menuImage"
            ></img>
          </div>
          <div className="menuTextContainer">
            <div>
              <h5 className="itemNameText">{title}</h5>
              <p className="menuItemDescriptionText">{description}</p>
            </div>
            <div className="buttonContainer">
              <div className="costContainer">
                <p className="costText">${price}</p>
              </div>
              <button type="button" className="btn btn-outline-secondary">
                Add
              </button>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default MenuItem;
