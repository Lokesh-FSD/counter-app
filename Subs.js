// importing essential Hooks and libraries
import React, { useState, useEffect } from "react";
import axios from "axios";

// creating instance of data
export const Subs = (props) => {
  const { getFoodItems } = props;
  const itemId = props.match.params.id;
  const [fetchedData, setfetchedData] = useState(null);

  //fetching subitems
  async function getData() {
    const responseData = await axios.get(
      `http://localhost:8080/data/${itemId}`
    );
    setfetchedData(responseData.data.result[0]);
  }

  //useEffect hook to get the Food items
  useEffect(() => {
    getData();
  }, []);

  async function addFoodData(item) {
    const addTask = await axios.post("http://localhost:8080/data/add", {
      name: item.name,
      image: item.image,
      price: item.price,
      description: item.description,
    });
    console.log(addTask);
    getFoodItems();
  }

  //function to display subitems
  function displaySubItems() {
    if (fetchedData != null) {
      console.log(fetchedData);
      return fetchedData.subItemsData.subItems.map((item, index) => {
        return (
          <div className="item-container " key={index}>
            <div className="sub-item">
              <div>
                <img
                  style={{ width: "15rem" }}
                  src={item.image}
                  alt={item.name}
                ></img>
              </div>
              <div className="description">
                <h5 className="title">{item.name}</h5>
                <h5>Rs.{item.price}</h5>
                <p>{item.description}</p>
                <button className="O-btn" onClick={() => addFoodData(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      });
    }
  }
  return (
    <div>
      <div>{displaySubItems()}</div>
    </div>
  );
};
////////////////////////////////////////////
////////////////////////////////////////////
