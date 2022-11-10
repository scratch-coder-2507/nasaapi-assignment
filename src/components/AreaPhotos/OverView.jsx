import React from 'react'
import { useSelector } from 'react-redux';

const OverView = () => {
    const state = useSelector((state) => state.result);
    if (state.loading) {
        return null;
      } if (state.photos.length === 0) {
        return null;
      }

  return (
    <div style={{display: "flex", justifyContent: "space-between"}}>
        
        <div style={{width: "60%"}} className="photoDescription">
          <p>
            <strong>Title:</strong> {state.photos.reverse()[0]?.title}
          </p>
          <p>
            <strong>Description:</strong> {state.photos.reverse()[0]?.explanation}
          </p>
          {state.photos.reverse()[0]?.copyright ? (<p>
            <strong>Author:</strong> {state.photos.reverse()[0]?.copyright}
          </p>) : null}
          <p>
            <strong>Date:</strong> {state.photos.reverse()[0]?.date}
          </p>
        </div>
        <div className='boxPhoto'>
            {state.photos.reverse()[0]?.media_type === 'image' ? <img loading="lazy" src={state.photos.reverse()[0]?.hdurl} alt={state.photos.reverse()[0]?.title} /> : <iframe title={state.photos.reverse()[0]?.title} width="100%" height= "100%" src={state.photos.reverse()[0]?.url}/> }
        </div>
    </div>
  )
}

export default OverView