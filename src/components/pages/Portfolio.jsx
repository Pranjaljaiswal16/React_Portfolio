import { useState } from "react";
import { portfolio } from "../data/dummyData";
import { Visibility } from "@mui/icons-material";
import Heading from "../common/Heading";

const Portfolio = () => {
  const allCategory = [
    "all",
    ...new Set(portfolio.map((item) => item.category)),
  ];

  const [List, SetList] = useState(portfolio);
  const [category, SetCategory] = useState(allCategory);

  const filterItems = (cat) => {
    if (cat === "all") {
      SetList(portfolio);
      return;
    }

    const newItems = portfolio.filter((item) => item.category === cat);
    SetList(newItems);
  };

  return (
    <>
      <article>
        <div className="container">
          <Heading title="Portfolio" />
          <div className="catButton">
            {category.map((cat) => {
              return (
                <button
                  className="primaryBtn"
                  onClick={() => filterItems(cat)}
                  data-aos="zoom-in-down"
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="content grid3">
            {List.map((items) => {
              return (
                <div className="box" data-aos="fade-up">
                  <div className="img">
                    <img src={items.cover} alt="" />
                  </div>

                  <div className="overlay">
                    <h3>{items.title}</h3>
                    <span>{items.name}</span>
                    <Visibility />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </article>
    </>
  );
};

export default Portfolio;
