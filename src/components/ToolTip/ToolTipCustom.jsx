import React, { useState } from "react";
import { Tooltip } from "reactstrap";
import "./ToolTipCustom.css";

export const ToolTipCustom = ({ name, id, info }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  const jenre = ['Action', 'Comedy', 'Drama', 'Horror']
  const country = ['US', 'DE', 'EN', 'CH', 'HU', 'SW']
  const random = Math.floor(Math.random() * info.length)
  return (
    <div>
      <Tooltip
        isOpen={tooltipOpen}
        target={id}
        toggle={toggle}
        placement="top"
        className=""
      >
        <div className="card" style={{ width: "5rem", height: "100%" }}>
          <div className="card-head">
            <img
              src={`https://image.tmdb.org/t/p/w185${
                info[random].poster_path
              }`}
              className="card-img-top img-fluid border border-secondary"
            />
          </div>
          <div className="card-body">
            <h5>
              {info[random].title ||
                info[random].name}
            </h5>
            <p>
              {info[random].release_date ||
                info[random].first_air_date}
              , {jenre[Math.floor(Math.random() * jenre.length)]},
              {country[Math.floor(Math.random() * country.length)]}
            </p>
          </div>
        </div>
      </Tooltip>
    </div>
  );
};
