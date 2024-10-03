import React from "react";
import User from "./props/User";
import { userOne } from "./props/Data/User";
import About from "./props/about";
import { contact } from "./props/Data/about";
import { service } from "./props/Data/profile";
import Profile from "./props/Profile";


function Info() {
  let user = ["akjol", "ariet", "kutman", "fatima"];

  return (
    <div>
      {user.map((item, index) => (
        <div key={index}>
          {" "}
          {item} {console.log(index)}
        </div>
      ))}
      {userOne.map((item) => (
        <User key={item.id} data={item} />
      ))}
      <div className="about">
        {contact.map((item) => (
          <About key={item.id} data={item} />
        ))}
      </div>
        <div className="profiles">
      {service.map((item)=>(
        <Profile key={item.id} data={item} active={true} />
      )
      )}
        </div>
    </div>
  );
}

export default Info;
