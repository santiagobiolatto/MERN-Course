import React, { Fragment, useState, useContext } from "react";
import "./PlaceItem.css";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import {AuthContext} from '../../shared/context/auth-context'

const PlaceItem = (props) => {
  const auth = useContext(AuthContext)
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const openMapHandler = () => {
    setShowMap(true);
  };
  const closeMapHandler = () => {
    setShowMap(false);
  };

  const openModalDeleteHandler = () => {
    setShowConfirmModal(true);
  };

  const closeModalDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = () => {
    console.log("Deleted");
    setShowConfirmModal(false);
  };
  return (
    <Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <img
            src="https://m.media-amazon.com/images/I/61nTuLYI7pL._AC_SL1000_.jpg"
            alt="map"
            style={{ maxHeight: "100%" }}
            className="center"
          />
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        onCancel={closeModalDeleteHandler}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <Fragment>
            <Button inverse onClick={closeModalDeleteHandler}>CANCEL</Button>
            <Button danger onClick={confirmDeleteHandler}>DELETE</Button>
          </Fragment>
        }
      >
        <p>Do you want to delete this place?</p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            {auth.isLoggedIn &&(<Button to={`/places/${props.id}`}>EDIT</Button>)}
            {auth.isLoggedIn &&(<Button danger onClick={openModalDeleteHandler}>DELETE</Button>)}
            
          </div>
        </Card>
      </li>
    </Fragment>
  );
};

export default PlaceItem;
