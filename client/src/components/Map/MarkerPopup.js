import React from 'react';
import { Popup } from 'react-leaflet';

const MarkerPopup = (props) => {
    const { link, description } = props.data;
    console.log(props,"props<<<")
  return  (
    <Popup >      
          <a className='poup-text' href={link}><h8 data-container="body" data-toggle="popover" data-placement="top" >{description}</h8></a>
    </Popup>
  ); 
};
export default MarkerPopup;