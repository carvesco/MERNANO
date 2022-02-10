import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "empire state",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg",
    address: "calle falsa 123",
    location: {
      lat: 40.765239,
      lng: -74.0110418,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "empire state",
    imageUrl:
      "https://nuevayork.travel/wp-content/uploads/2013/02/EMPIRE-STATE.jpg",
    address: "calle falsa 123",
    location: {
      lat: 40.765239,
      lng: -74.0110418,
    },
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find the place</h2>
      </div>
    );
  }

  return (
    <form>
      <Input
        id="title"
        element="input"
        type="text"
        label="title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        type="description"
        label="title"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />

      <Button type="submit"disabled={true}> UPDATE PLACE</Button>
    </form>
  );
};

export default UpdatePlace;
