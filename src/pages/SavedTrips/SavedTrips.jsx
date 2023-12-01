import React, { useEffect, useState } from "react";
import { Header } from "../../components";
import { getSavedTrips } from "../../services";

const SavedTrips = () => {
  const uid = "ixtsgm3xUQcdCak73O6Y22uoXhb2";
  const [trips, setTrips] = useState();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await getSavedTrips({
          uid: "ixtsgm3xUQcdCak73O6Y22uoXhb2",
        });
        setTrips(response);
      };
      fetchData();
    } catch (error) {}
  }, [uid]);
  console.log(trips);
  return (
    <div className="container">
      <Header />
    </div>
  );
};

export default SavedTrips;
