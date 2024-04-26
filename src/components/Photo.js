import React from 'react';

const Photo = props => {
  console.log('Photo component props:', props); // Log props to console for debugging

  return (
  <div>
      {props.photo && (props.photo.img_src || props.photo.url) && (
      <>
        <h3>{props.photo.title}</h3>
        {/* <img src={props.photo.url} alt={props.photo.title} /> */}
        <img src={props.photo.img_src || props.photo.url} alt={props.photo.title} />

        <p>{props.photo.explanation}</p>
      </>
    )}
    {!props.photo && <p>Loading...</p>}
  </div>
  );
};

export default Photo;
