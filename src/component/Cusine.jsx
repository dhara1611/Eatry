import {  useRef } from "react";
import Shimmer from "./Shimmer";

const Cusine = ({ cusineList }) => {
  const sliderRef = useRef();

  const chunkArray = (arr = [], size) => {
    return arr.reduce((acc, __, i) => {
      if (i % size === 0) acc.push(arr.slice(i, i + size));
      return acc;
    }, []);
  };

  const info = cusineList?.data?.cards[0]?.card?.card?.imageGridCards?.info;

  if (!Array.isArray(info) || info.length === 0) return <Shimmer />;

  const chunkedCategories = chunkArray(info, 2);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };
  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });

  };




  return (
    <div className="category-slider">
      <div className="navigation-container">
        <button className="arrow left" onClick={scrollLeft} >
        ⬅️
        </button>
        <button className="arrow right" onClick={scrollRight}>
          ➡️
        </button>
      </div>
      <div className="slider-container" ref={sliderRef}>
        {chunkedCategories.map((group, i) => (
          <div key={i} className="slider-column">
            {group.map((item, index) => (
              <div className="category-item" key={index}>
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
                  alt={item.accessibility?.altText || "cuisine"}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cusine;
