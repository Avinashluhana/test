import { Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = ({ about }) => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>About me</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img
            src="https://scontent.fkhi6-2.fna.fbcdn.net/v/t39.30808-1/269571240_4649984255098519_6041326465643828892_n.jpg?stp=dst-jpg_p240x240&_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=QYQFHnNweG4AX-U2D2l&_nc_ht=scontent.fkhi6-2.fna&oh=00_AT-KCXh2oNw8bo0z_io49vncXUlexvAtQvui0Etch4fsAA&oe=625D58D7"
            alt="Abhi"
            className="aboutAvatar"
          />

          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            Avinash Kumar
          </Typography>

          <Typography>Full stack developer</Typography>

          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
            subtitle
          </Typography>
        </div>

        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            I am AVINASH KUMAR Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laudantium quisquam incidunt quas assumenda
            dolorum! Ab quidem ut fugiat porro. Quo reiciendis libero tempore.
            Inventore, ad animi magni voluptatibus obcaecati repudiandae?{" "}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
