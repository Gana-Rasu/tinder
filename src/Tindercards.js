import React, { useState } from "react";
import "./TinderCards.css";
import { CardSwiper } from "react-card-rotate-swiper";

function Tindercards() {
  // const data = [

  // ]

  const [people, setPeople] = useState([
    {

      name: "Rahel Vaan",
      url:
        "https://i.imgur.com/Gg6BpGn.jpeg",
    },
    {

      name: "Angelina cruz",
      url:
        "https://i.imgur.com/OckVkRo.jpeg",
    },
  ]);

  //   function swiped(name)
  //   {console.log("removing...."+ name)}

  //   function outOfFrame(name)
  //   {console.log(name+ " left the screen")}

  const handleSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };



  return (
    <div className="tindercards">
      <div className="tinderContainer">
        {people.map((person, index) => (
          <CardSwiper
            key={index}
            onSwipe={handleSwipe}
            className={"swiper"}
            preventSwipe={["up", "down"]}
            contents={
              <div className="card" style={{
                backgroundImage: `url(${person.url})`,
                backgroundSize: "100% 100%",
                width: "300px",
                height: "380px"
              }} >
                    <span className="person-name" >{person.name}</span>
                {/* <img className="person-img"  src={person.url} ></img> */}
            
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Tindercards;
