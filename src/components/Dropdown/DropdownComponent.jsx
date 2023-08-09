import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";


function DropdownComponent({ direction, handleFilter }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="d-flex p-0">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle caret>Filter by</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => handleFilter("female")}>
            Female
          </DropdownItem>
          <DropdownItem onClick={() => handleFilter("male")}>
            Male
          </DropdownItem>
          <DropdownItem onClick={() => handleFilter("popu")}>
            Popularity
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}



export default DropdownComponent;
