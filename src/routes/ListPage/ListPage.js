import React from "react";
import "./ListPage.scss";
import listData from "../../lib/dummyData";
import Card from "../../Components/Card/Card";
import FilterList from "../../Components/FilterList/FilterList";
import Map from "../../Components/Map/Map";
const ListPage = () => {
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <FilterList />
          {listData?.map((item) => (
            <Card key={item?.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map listData={listData} />
      </div>
    </div>
  );
};

export default ListPage;
