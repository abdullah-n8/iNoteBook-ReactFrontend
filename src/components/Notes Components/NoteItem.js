import React from "react"

const NoteItem = (props) => {

    const { note } = props;

    return (
            <div class=" card my-2 mx-5 col-md-3">
                    <div class="card-body">
                        <h5 class="card-title">{note.title}</h5>
                        <p class="card-text">{note.description}  </p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    </div>
            </div>

    )
}

export default NoteItem