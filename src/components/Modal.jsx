import React from "react";
import "../App.css";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ open, setOpen }) => {
  const submitBtn = () => {
    alert("Your form is submitted");
  };

  return (
    <div className="modealContainer">
      <div className="closePosition">
        <span>
          <AiOutlineClose
            className="closeIcon"
            onClick={() => setOpen(false)}
          />
        </span>
      </div>

      <div className="buttons">
        <div className="sendMessage">
          <button className="yesBtn">Send Message</button>
        </div>

        <div>
          <button className="noBtn" onClick={() => setOpen(false)}>
            Do not send message
          </button>
        </div>

        <div>
          <button className="submitBtn" onClick={submitBtn}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
