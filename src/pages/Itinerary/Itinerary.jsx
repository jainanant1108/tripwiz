import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Header, TripDisplay } from "../../components";
import TripImage from "../../utils/images/TripImage.png";

const Itinerary = () => {
  const [placeImage, setPlaceImage] = useState(null);
  const { trip_details } = useSelector((state) => state.itinerary.itinerary);
  console.log(trip_details);
  const handleSaveClick = () => {
    console.log("here");
  };
  const getPlaceImage = async (place) => {
    const apiKey = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace with your API key
    const maxWidth = 400; // Set the maximum width of the image

    try {
      // Fetch place details including photo reference
      const placeDetailsResponse = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.placeId}&fields=photos&key=${apiKey}`
      );

      const placeDetailsData = await placeDetailsResponse.json();

      if (
        placeDetailsData.status === "OK" &&
        placeDetailsData.result.photos &&
        placeDetailsData.result.photos.length > 0
      ) {
        const photoReference =
          placeDetailsData.result.photos[0].photo_reference;

        // Fetch the actual image using the photo reference
        const imageUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxWidth}&photoreference=${photoReference}&key=${apiKey}`;

        // Set the image URL to the state
        setPlaceImage(imageUrl);
      } else {
        // Handle the case when no photos are available
        console.log("No photos available for this place");
      }
    } catch (error) {
      // Handle any errors that occurred during the fetch
      console.error("Error fetching place details:", error);
    }
  };
  useEffect(() => {}, []);

  return (
    <>
      <div className="container">
        <Header />
      </div>
      <img src={TripImage} alt="" style={{ width: "100vw" }} />
      <div className="container">
        <TripDisplay trip={trip_details} handleSaveClick={handleSaveClick} />
      </div>
    </>
  );
};

export default Itinerary;
