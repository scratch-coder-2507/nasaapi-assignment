import React from "react";
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

export default function ModalPhotoSelected({setModalWithDetails, photo}) {
  return (
    <span className="modal">
      <button
        onClick={() => setModalWithDetails(false)}
        className="btnCloseModal"
      >
        <CancelPresentationIcon style={{ fontSize: 30 }}/>
      </button>
      <div className="infoPhoto">
        <div className="photoSelected">
        {photo?.media_type === 'image' ? <img loading="lazy" src={photo.hdurl} alt={photo.title} /> : <iframe title={photo.title} width="100%" height= "100%" src={photo.url}/> }
        </div>
        <div className="photoDescription">
          <p>
            <strong>Title:</strong> {photo.title}
          </p>
          <p>
            <strong>Description:</strong> {photo.explanation}
          </p>
          {photo.copyright ? (<p>
            <strong>Author:</strong> {photo.copyright}
          </p>) : null}
          <p>
            <strong>Date:</strong> {photo.date}
          </p>
        </div>
      </div>
    </span>
  );
}
