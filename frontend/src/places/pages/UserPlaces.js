import React from "react";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://assets.simpleviewinc.com/simpleview/image/upload/crm/newyorkstate/GettyImages-486334510_CC36FC20-0DCE-7408-77C72CD93ED4A476-cc36f9e70fc9b45_cc36fc73-07dd-b6b3-09b619cd4694393e.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://assets.simpleviewinc.com/simpleview/image/upload/crm/newyorkstate/GettyImages-486334510_CC36FC20-0DCE-7408-77C72CD93ED4A476-cc36f9e70fc9b45_cc36fc73-07dd-b6b3-09b619cd4694393e.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
