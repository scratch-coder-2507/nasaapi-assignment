import React from "react";
import AreaSearch from "./AreaSearch";
import GridPhotos from "./GridPhotos";
import OverView from "./OverView";
import "./style.css";


export default function AreaPhotos() {
  return (
    <section id="areaPhotos">
      <div id="titleAreaPhotos">
        <h1>Astronomy Picture of the day</h1>
      </div>
     <AreaSearch/>
     <OverView/>
     <GridPhotos/>
    </section>
  );
}
