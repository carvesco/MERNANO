import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import PlaceList from "../components/PlaceList";

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

const UserPlaces = () => {
    const userId=useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
