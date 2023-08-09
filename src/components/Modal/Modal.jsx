import React, { useState } from "react";
import {  Modal, ModalHeader, ModalBody } from "reactstrap";
import './Modal.css'

export const ModalEffect = ({args, name}) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  // console.log(args);
  const random = Math.floor(Math.random() * args.length)

  return (
    <div>
      <button className="modalBtn" onClick={toggle}>
        <i id="modalIcon" className="fa-solid fa-lock"></i>
      </button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>
          {name}
        </ModalHeader>
        <ModalBody className="flex">
          {args.map(({title, name, overview, poster_path, id}) => {
            return (
              <div key={id}>
                <h3>{title || name}</h3>
               
                  <img
                    src={`https://image.tmdb.org/t/p/w185${poster_path}`}
                    className="p-1 border border-grey"
                  />
                <p>{overview}</p>
              </div>
            );
          } )}
        </ModalBody>
      </Modal>
    </div>
  );
}


