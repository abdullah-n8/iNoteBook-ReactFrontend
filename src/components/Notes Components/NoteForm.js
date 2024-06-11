import React from "react";

const NoteForm = () => {
  return (
    <>

      <h3 className="my-3 text-center">Add a Note</h3>
      <form>
        <div className="mb-3 my-3">
          <label for="exampleInputEmail1" className="form-label">
            Title 
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default NoteForm;
