import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPhotos } from "../../redux/actions/getPhotos";
import {ErrorAlert } from "./Alerts";

export default function AreaSearch() {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [alertERR, setAlertERR] = useState(false);

  const handleClick = () => {
    if (startDate === "" && endDate === "") {
      setAlertERR(true);
      return setTimeout(() => {
        setAlertERR(false);
      }, 1500);
    }
    return dispatch(getPhotos(startDate, endDate));
  };
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  }

  return (
    <div id="searchPhotos">
      <label htmlFor="search">Search for Date:</label>
      <input type="Date" id="search" value={startDate} onChange={handleStartDateChange} />
      <input type="Date" id="search" value={endDate} onChange={handleEndDateChange} />
      <button onClick={handleClick}>Search</button>
      {alertERR ? <ErrorAlert/> : ""}
    </div>
  );
}
