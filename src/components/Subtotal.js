import React from "react";
import { ToastContainer } from "react-toastify";
import "./styles/Subtotal.css";



const Subtotal = ({
  orderTotal,
  orderNotification,
  clearOrder,
  toastVisible,
}) => {
    
  return (
    <>
      <div className="parentContainer">
        <h3 className="orderTotalText">Order Total: ${orderTotal}</h3>
        <div style={{display:'flex'}}>
          <button
            type="button"
            style={{marginRight:'1em'}}
            className="btn btn-outline-secondary orderButton"
            onClick={orderNotification}
            disabled={toastVisible}
          >
            Place Order
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary orderButton"
            onClick={clearOrder}
            disabled={toastVisible}
          >
            Clear Order
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={false}
        closeOnClick
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
};

export default Subtotal;
