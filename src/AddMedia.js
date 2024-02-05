import React from "react";

function AddMedia({handleClick}) {
   return (
    <div className="Media-Maker">
    Title: <input type="text" id="title" />
    Media Type: <input type="text" id="mediaType" />
    Creator: <input type="text" id="creator" />
    Length: <input type="text" id="length" />
    Rating/10: <input type="text" id="rating" />
    Thoughts: <input type="text" id="thoughts" />
    <button onClick={handleClick}>Create Review</button>
    </div>
   )
}

export default AddMedia;