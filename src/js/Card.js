// import React, { useState } from "react";
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import { Link } from 'react-router-dom';
// import '../css/card.css';

// const CustCard = ({ apod }) => {
//   const [showOptions, setShowOptions] = useState(false);

//   const toggleOptions = () => {
//     setShowOptions(!showOptions);
//   };

//   return (
//     <div className="col-md-4 mb-4" onMouseLeave={() => setShowOptions(false)}>
//       <Card onClick={toggleOptions}>
//         <Card.Img
//           variant="top"
//           src={apod.url}
//           alt={apod.title}
//           style={{ height: '455px', objectFit: 'cover' }}
//         />
//         <Card.Body>
//           <Card.Title>{apod.title}</Card.Title>
//         </Card.Body>
//         {showOptions && (
//           <div>
//             <ListGroup variant="flush">
//               {apod.listItems.map((item, index) => (
//                 <Link to={`/page/${item}`} key={index}>
//                   <ListGroup.Item>{item}</ListGroup.Item>
//                 </Link>
//               ))}
//             </ListGroup>
//           </div>
//         )}
//       </Card>
//     </div>
//   );
// };

// const GroupExample = () => {
//   const apods = [
//     {
//       title: "APOD Image",
//       url: "https://apod.nasa.gov/apod/image/2404/CometTriple_Casado_1080.jpg",
//       date: "2024-04-29",
//       listItems: ["Picture of the Day", "Astronomy facts", "Interesting information"],
//     },
//     {
//       title: "Mars Rover Image",
//       url: "https://i.tmgrup.com.tr/anews/v1/2023/04/11/nasa-shares-highest-resolution-image-of-mars-ever-1681206953344.jpg",
//       date: "2024-04-30",
//       listItems: ["Mars exploration details", "Rover data", "Martian landscape"],
//     },
//     // Add more apods here with different titles, URLs, and list items
//   ];

//   return (
//     <div className="row">
//       {apods.map((apod, index) => (
//          <CustCard key={index} apod={apod} />
//       ))}
//     </div>
//   );
// };

// export default GroupExample;
// import React, { useState } from "react";
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// //import { useNavigate } from 'react-router-dom';
// //import ImageContent from '../Image'; // Import the component containing the content of Image.js
// import '../css/card.css';

// const CustCard = ({ apod, setCurrentPage }) => {
//   const [showOptions, setShowOptions] = useState(false);
//   //const navigate = useNavigate(); // Use useNavigate hook instead of useHistory

//   const toggleOptions = () => {
//     setShowOptions(!showOptions);
//   };

//   const handleListItemClick = (item) => {
//     // Prevent the event from bubbling up to the parent (Card) onClick event
//     setShowOptions(false); // Hide the options after clicking

//     switch (item) {
//       case "Picture of the Day":
//         setCurrentPage("image");
//         break;
//       case "Picture of a certain day":
//         setCurrentPage("image-of-the-day");
//         break;
//       case "":
//         setCurrentPage("mars-rover");
//         break;
//       // Add cases for other items if needed
//       default:
//         setCurrentPage("home"); // Default page
//     }
//   };

//   return (
//     <div className="col-md-4 mb-4" onMouseLeave={() => setShowOptions(false)}>
//       <Card onClick={toggleOptions}>
//         <Card.Img
//           variant="top"
//           src={apod.url}
//           alt={apod.title}
//           style={{ height: '455px', objectFit: 'cover' }}
//         />
//         <Card.Body>
//           <Card.Title>{apod.title}</Card.Title>
//         </Card.Body>
//         {showOptions && (
//           <ListGroup variant="flush">
//             {apod.listItems.map((item, index) => (
//               <ListGroup.Item key={index} onClick={() => handleListItemClick(item)}>
//               {item}
//               </ListGroup.Item>
//             ))}
//           </ListGroup>
//         )}
//       </Card>
//     </div>
//   );
// };

// const GroupExample = () => {

//     const apods = [
//       {
//         title: "APOD Image",
//         url: "https://apod.nasa.gov/apod/image/2404/CometTriple_Casado_1080.jpg",
//         date: "2024-04-29",
//         listItems: ["Picture of the Day", "Picture of a certain day", "Interesting information"],
//       },
//       {
//         title: "Mars Rover Image",
//         url: "https://i.tmgrup.com.tr/anews/v1/2023/04/11/nasa-shares-highest-resolution-image-of-mars-ever-1681206953344.jpg",
//         date: "2024-04-30",
//         listItems: ["Mars rover images", "Rover data", "Martian landscape"],
//       },
//       // Add more apods here with different titles, URLs, and list items
//     ];
  
//     return (
//       <div className="row">
//         {apods.map((apod, index) => (
//            <CustCard key={index} apod={apod} setCurrentPage={setCurrentPage} />
//         ))}
//       </div>
//     );
//   };
  
//   // const Card = {
//   //   CustCard,
//   //   GroupExample
//   // };
//   // export default Card;
//   export { CustCard, GroupExample };
//   export default GroupExample;


import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import '../css/card.css';
import ImageOftheDay from '../ImageOftheDay';
import MarsRover from '../MarsRover';
import Image from '../Image';

const CustCard = ({ apod, setCurrentPage }) => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleListItemClick = (page) => {
    setCurrentPage(page.toLowerCase().replace(/\s+/g, '-')); // Update currentPage directly
    setShowOptions(false);
  };

  return (
    <div className="col-md-4 mb-4" onMouseLeave={() => setShowOptions(false)}>
      <Card onClick={toggleOptions}>
        <Card.Img
          variant="top"
          src={apod.url}
          alt={apod.title}
          style={{ height: '455px', objectFit: 'cover' }}
        />
        <Card.Body>
          <Card.Title>{apod.title}</Card.Title>
        </Card.Body>
        {showOptions && (
          <ListGroup variant="flush">
            {apod.listItems.map((item, index) => (
              <ListGroup.Item key={index} onClick={() => handleListItemClick(item)}>
                {item}
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Card>
    </div>
  );
};

const GroupExample = ({ setCurrentPage }) => {
  const apods = [
    {
      title: "APOD Image",
      url: "https://apod.nasa.gov/apod/image/1305/godafoss1600vetter.jpg",
      date: "2024-04-29",
      listItems: ["Picture of the Day", "Picture of a certain day", "Interesting information"],
    },
    {
      title: "Mars Rover Image",
      url: "https://i.tmgrup.com.tr/anews/v1/2023/04/11/nasa-shares-highest-resolution-image-of-mars-ever-1681206953344.jpg",
      date: "2024-04-30",
      listItems: ["Mars rover images", "Rover data", "Martian landscape"],
    },
    // Add more apods here with different titles, URLs, and list items
  ];

  return (
    <div className="row">
      {apods.map((apod, index) => (
        <CustCard key={index} apod={apod} setCurrentPage={setCurrentPage} />
      ))}
    </div>
  );
};


export { CustCard, GroupExample };
export default GroupExample;

