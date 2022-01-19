import React from "react";

function PhotoCollection(props) {
  const openImage = () => {
    props.setCurrentImage(props.index);
    props.openViewer();
  };

  return (
    <>
      <div
        className="w-full h-full overflow-hidden rounded-lg"
        onClick={openImage}
      >
        <img
          src={props.image}
          alt="menu"
          className="w-full h-full transform transition duration-700 rounded-lg hover:scale-110"
        />
      </div>
    </>
  );
}

export default PhotoCollection;
