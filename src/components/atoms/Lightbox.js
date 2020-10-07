import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  {
    url: "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg",
    id: 0,
    alt: "cat1"
  },
  {
    url: "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg",
    id: 1,
    alt: "cat2"
  },
  {
    url: "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg",
    id: 2,
    alt: "cat3"
  },
  {
    url: "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg",
    id: 3,
    alt: "cat4"
  }
];

const MyLightbox = () => {
  const [photoIndex, setIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <ul style={{ display: "flex", listStyle: "none" }}>
        {images.map((image, index) => (
          <li key={index}>
            <img
              style={{ maxWidth: "100%" }}
              src={image.url}
              alt={image.alt}
              onClick={() => {
                setIndex(index);
                setOpen(true);
              }}
            />
          </li>
        ))}
      </ul>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex].url}
          nextSrc={images[(photoIndex + 1) % images.length].url}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].url}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setIndex((photoIndex + images.length + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default MyLightbox;
