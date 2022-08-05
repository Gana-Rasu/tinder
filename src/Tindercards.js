import React, { useState } from "react";
import TinderCard from "react-tinder-card";

function Tindercards() {
  const [people, setPeople] = useState([
    {
      id: 0,
      name: "Elon Musk",
      url:
        "data:image/jpeg;base64,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",
    },
    {
      id: 1,
      name: "Jeff Bezos",
      url:
        "data:image/jpeg;base64,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",
    },
  ]);

  const swiped = (direction,nameToDelete) => {
      console.log("removing:" + nameToDelete);
    //   setLastDirection(direction);
    };

    const outOfFrame = (name) => {
      console.log(name + "left the screen")
    };

  return (
    <div className="tindercards">
      <div className="tinderContainer">
        {people.map((person) => (
        
            //  <TinderCard
            //   className="swipe"
            //   key={person.name}
            //   preventSwipe={["up", "down"]}
            //   onSwipe={(dir)=>swiped(dir,person.name)} 
            //   onCardLeftScreen={()=>outOfFrame(person.name)}  
            // > 
            // <div
            // style={{backgroundImage:`url(${person.url})`}}
            // className="card"
            // >
            <h3>{person.name}</h3>
            // </div>
         //</TinderCard>  
    
        ))}
      </div>
    </div>
  );
}

export default Tindercards;