import axios from "axios";

export const getPhotos =
  (start_date, end_date) => async (dispatch, getState) => {
    dispatch({
      type: "FETCH_PHOTOS_REQUEST",
    });

    try {
      //https://api.nasa.gov/planetary/apod?api_key=gaff4Pwpu0Qg6woyFty1YhVRxhj4In1ImvOCyFD7&start_date=2022-10-01&end_date=2022-10-29&thumbs=true
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=gaff4Pwpu0Qg6woyFty1YhVRxhj4In1ImvOCyFD7&start_date=${start_date}&end_date=${end_date}&thumbs=true`
      );

      dispatch({
        type: "FETCH_PHOTOS_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_PHOTOS_FAILURE",
        error,
      });
    }
  };
