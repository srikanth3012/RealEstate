import React from "react";
import { useParams } from "react-router-dom";
import { singlePostData } from "../../lib/dummyData";
import "./SinglePage.scss";
import User from "../../Components/User/User";
import Map from "../../Components/Map/Map";
import Slider from "../../Components/Slider/Slider";

const SinglePage = () => {
  const { id } = useParams();
  const { images } = singlePostData;

  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <User item={singlePostData} />
              </div>
            </div>
            <div className="bottom">{singlePostData?.description}</div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>

          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="utility" />
              <div className="featureText">
                <p>Utilities</p>
                <span>Renter is Responcible</span>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="utility" />
              <div className="featureText">
                <p>Pet Policy</p>
                <span>Pets Allowed</span>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="utility" />
              <div className="featureText">
                <p>Property Fees</p>
                <span>Must have 3x House Rent Income</span>
              </div>
            </div>
          </div>

          <p className="title">RoomSize</p>

          <div className="sizes">
            <div className="feature">
              <img src="/size.png" alt="fee" />
              <p>80sqm {"(861sqft)"}</p>
            </div>
            <div className="feature">
              <img src="/bed.png" alt="fee" />
              <p>2 beds</p>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="fee" />
              <p>2 bathrooms</p>
            </div>
          </div>

          <p className="title">Nearby Place</p>

          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="utility" />
              <div className="featureText">
                <p>School</p>
                <span>250m Away</span>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="utility" />
              <div className="featureText">
                <p>Bus Stand</p>
                <span>250m Away</span>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="utility" />
              <div className="featureText">
                <p>Restaureant</p>
                <span>250m Away</span>
              </div>
            </div>
          </div>

          <p className="title">Location</p>
          <div className="mapContainer">
            <Map />
          </div>
          <div className="buttonContainer">
            <button>
              <img src="/chat.png" alt="" />
              <span>Send the Message</span>
            </button>
            <button>
              <img src="/save.png" alt="" />
              <span>Save the Place</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
