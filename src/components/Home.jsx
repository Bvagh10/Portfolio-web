import React from "react";
import MyImage from "../assets/my_image.png";
import { TypeAnimation } from "react-type-animation";
import SocialIcons from "./SocialIcons";
import Button from "./Button";

const Home = () => {
  return (
    <section className="flex flex-coll md:flex-row items-center justify-center min-h-screen px-6 ">
      <div className="md:w-1/2 flex justify-center">
        <img
          src={MyImage}
          alt="Babu"
          className="rounded-full w-48 sm:w-64 md:w-80 lg:w-[350px] xl:w-[400px] shadow-lg hover:scale-110 transition duration-300"
        />
      </div>
      <div className="md: w-1/2 text-center md:text-left mt-6 md:mt-0">
        <h1 className="text-4xl sm:text-7xl font-bold mb-4">
          Hi, i am <span className="text-red-500">Babu</span>
        </h1>
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
          I'am a <span className="text-red-500">

        <TypeAnimation 
        sequence={
          [
            "Frontend Developer",1000
          ]
        }
        speed={50}
        style={{fontSize:"1re"}}
        repeat={Infinity}/>
        

          </span>
        </h3>
        <p className="text-sm sm-:text-lg mb-6">
          Hi, I'm Babu Vagh, a web developer from Ahmedabad, India. I have a
          background in frontend development and I'm currently focused on
          mastering technologies like JavaScript and React.js. I'm passionate
          about building responsive and dynamic websites. In my free time, I
          love learning new technologies.
        </p>
        <SocialIcons/>
        <Button text="Hire me" href="#"/>
      </div>
    </section>
  );
};

export default Home;
