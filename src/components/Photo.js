const Photo = props => {
  console.log('Photo component props:', props); // Log props to console for debugging

  const isVideo = props.photo && props.photo.media_type === "video";


  return (
  <div>
      {props.photo && (props.photo.img_src || props.photo.url) && (
      <>
        <h3>{props.photo.title}</h3>
        {/* <img src={props.photo.url} alt={props.photo.title} /> */}
        {isVideo ? (
            <iframe
              src={props.photo.url}
              title={props.photo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: '100%', height: 'auto' }}
            ></iframe>
          ) : (
        <img src={props.photo.img_src || props.photo.url} alt={props.photo.title} />
      )}

        <p>{props.photo.explanation}</p>
      </>
    )}
    {!props.photo && <p>Loading...</p>}
  </div>
  );
};

export default Photo;