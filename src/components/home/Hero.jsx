import { home } from "../data/dummyData";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <>
      <section className="hero">
        {home.map((val, i) => {
          return (
            <div className="heroContainer" key={i}>
              <h3>{val.text}</h3>
              <h1>
                <Typewriter
                  options={{
                    strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <p>{val.desc}</p>
              <button className="primaryBtn">DownLoad CV</button>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Hero;
