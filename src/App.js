import React, { useEffect, useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [open, setOpen] = useState(false);

  const movieData = {
    title: "My title",
    releaseYear: 2022,
    rating: 2.5,
    director: "My director",
  };

  useEffect(() => {
    console.log(
      `The movie name is ${movieData.title} released in ${movieData.releaseYear} with rating of ${movieData.rating} and directed by ${movieData.director}`
    );
  }, []);

  return (
    <div className="container">
      <div className="buttonContainer">
        <button className="emailButton" onClick={() => setOpen(true)}>
          Click here for signing in
        </button>
      </div>

      {open && <Modal open={open} setOpen={setOpen} />}

      <div>
        <p className="articleText">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
      </div>

      {/* <div className="buttonContainer">
        <img src={Picture} className="imagePicture" alt="familyImage" />
      </div> */}
      <div className="buttonContainer">
        <form className="formBox">
          <div>
            <label className="label">Firstname</label>
            <input className="input" type="text" placeholder="First Name" />
          </div>
          <div>
            <label className="label">Lastname</label>
            <input className="input" type="email" placeholder="Last Email" />
          </div>
        </form>
      </div>

      {/* 4 rows and 2 columns */}
      <div className="tableBox">
        {/**rows */}

        <div className="rowBox">
          <div>
            <span className="columnName">Column 1</span>
          </div>
          <div>
            <span className="columnName">Column 2</span>
          </div>
        </div>

        {/**columns */}
        <div>
          <span className="columnName">Row 1</span>
        </div>
        <div>
          <span className="columnName">Row 2</span>
        </div>
        <div>
          <span className="columnName">Row 3</span>
        </div>
        <div>
          <span className="columnName">Row 4</span>
        </div>
      </div>
    </div>
  );
}

export default App;
