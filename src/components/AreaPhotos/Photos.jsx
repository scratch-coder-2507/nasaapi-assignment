import React, { useState } from "react";

import ModalPhotoSelected from "./ModalPhotoSelected";

export default function Photos({ photo, index }) {
  const [modalWithDetails, setModalWithDetails] = useState(false);
  const handleDetails = () => {
    setModalWithDetails(true);
  };
  return (
    <>
      {modalWithDetails ? (
       <ModalPhotoSelected setModalWithDetails={setModalWithDetails} photo={photo}/>
      ) : (
        <div
          className="boxPhoto"
          style={{ gridArea: `p${index}` }}
          onClick={handleDetails}
        >
          <div style={{display: "flex", flexDirection: "row", padding: "3px"}}>
              {photo?.media_type === 'image' ? <img src={photo.url} alt={photo.title} /> : <img src={photo.thumbnail_url} alt={photo.title}/> }
            <p>{photo?.title}, {photo?.date}</p>
          </div>
        </div>
      )}
    </>
  );
}
