import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import "./PlaceForm.css";
import { useForm } from "../../shared/hooks/form-hook";
import Card from "../../shared/components/UIElements/Card";

const PLACES = [
  {
    id: "1",
    title: "Patio Olmos Shoping",
    description:
      "Centro comercial urbano con una arquitectura llamativa, tiendas de todo tipo, restaurantes y cine.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Patio_Olmos_2011-12-22.jpg/1200px-Patio_Olmos_2011-12-22.jpg",
    address: "Av. Vélez Sarsfield 361, Córdoba",
    location: {
      lat: -31.419581362824193,
      lng: -64.18854301351536,
    },
    creator: "1",
  },
  {
    id: "2",
    title: "Torre Eiffel",
    description:
      "Emblemática torre de hierro forjado diseñada por Gustave Eiffel y construida en 1889, dispone de observatorio.",
    imageUrl:
      "https://www.toureiffel.paris/sites/default/files/styles/1200x675/public/actualite/image_principale/vue_depuisjardins_webbanner.jpg?itok=wx044mad",
    address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, Francia",
    location: {
      lat: 48.85840231373297,
      lng: 2.2944828501325065,
    },
    creator: "2",
  },
];

const UpdatePlace = (props) => {
  const placeId = useParams().placeId;
  const [isLoading, setIsLoading] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = PLACES.find((place) => {
    return place.id === placeId;
  });

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateHandlerSubmit = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find a place</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    formState.inputs.title.value && (
      <form className="place-form" onSubmit={placeUpdateHandlerSubmit}>
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title"
          onInput={inputHandler}
          initialValue={formState.inputs.title.value}
          initialValid={formState.inputs.title.isValid}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description"
          onInput={inputHandler}
          initialValue={formState.inputs.description.value}
          initialValid={formState.inputs.description.isValid}
        />
        <Button type="submit" disabled={!formState.isValid}>
          UPDATE PLACE
        </Button>
      </form>
    )
  );
};

export default UpdatePlace;
