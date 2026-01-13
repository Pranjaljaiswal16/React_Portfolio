import Heading from "../common/Heading";
import { about } from "../data/dummyData";
import { Fragment } from "react";
import Man from "../../assets/man.png";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="container flex">
          {about.map((val, i) => {
            return (
              <Fragment key={i}>
                <div className="left">
                  <img src={Man} />
                </div>

                <div className="right">
                  <Heading title="About Me" />
                  <p>{val.desc}</p>
                  <p>{val.desc1}</p>
                  <button>Download CV</button>
                  <button className="primaryBtn">Download CV</button>
                </div>
              </Fragment>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default About;
