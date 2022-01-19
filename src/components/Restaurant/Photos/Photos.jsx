import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ImageViewer from "react-simple-image-viewer";
import { getImage } from "../../../redux/reducers/image/image.action";
import PhotoCollection from "./PhotoCollection";

function Photos() {
  const [photos, setPhotos] = useState([]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [currentImage, setCurrentImage] = useState(0);

  const closeViewer = () => setIsMenuOpen(false);

  const openViewer = () => setIsMenuOpen(true);

  const reduxState = useSelector(
    (globalState) => globalState.restaurant.selectedRestaurant.restaurant
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (reduxState) {
      dispatch(getImage(reduxState?.photos)).then((data) => {
        const image = [];
        data.payload.images.map(({ location }) => image.push(location));
        setPhotos(image);
      });
    }
  }, [reduxState, dispatch]);

  return (
    <>
      {isMenuOpen && (
        <ImageViewer
          src={photos}
          currentIndex={currentImage}
          disableScroll={true}
          onClose={closeViewer}
        />
      )}

      <div className="gap-5 grid md:grid-cols-3 lg:grid-cols-4 px-3 md:px-5">
        {photos.map((photo, index) => (
          <PhotoCollection
            key={index}
            index={index}
            openViewer={openViewer}
            image={photo}
            setCurrentImage={setCurrentImage}
          />
        ))}
      </div>
    </>
  );
}

export default Photos;
