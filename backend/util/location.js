const AppleMaps = require("apple-maps-server-sdk").default;

const HttpError = require("../models/http-error");
const { appleMapKitKey } = require("../secrets/authKeys");

const appleMaps = new AppleMaps({
  authorizationToken: appleMapKitKey,
});

async function getCoordsForAddress(address) {
  await appleMaps
    .geocode({
      q: address,
    })
    .then((response) => {
      // console.log(response.results[0]);
      coordinates = {
        lat: response.results[0].coordinate.latitude,
        lng: response.results[0].coordinate.longitude,
      };
    })
    .catch((err) => {
      const error = new HttpError(
        "Could not find location for the specified address.",
        422
      );
      throw error;
    });

  return coordinates;
}

module.exports = getCoordsForAddress;
