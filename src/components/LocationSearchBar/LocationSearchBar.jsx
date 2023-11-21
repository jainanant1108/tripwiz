import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";

const LocationSearchBar = ({ handleSelect, initialValue }) => {
  const [address, setAddress] = useState(initialValue || "");
  return (
    <PlacesAutocomplete
      value={address}
      onChange={setAddress}
      onSelect={handleSelect}
      searchOptions={{ type: ["(cities)", "locality"] }}
      debounce={300}
    >
      {({ getInputProps, suggestions }) => (
        <Autocomplete
          options={suggestions}
          getOptionLabel={(suggestion) => suggestion.description}
          inputValue={address}
          renderInput={(params) => {
            return (
              <TextField
                {...getInputProps(params)}
                placeholder="Where would you like to go ?"
                sx={{ background: "#f6f6f6" }}
              />
            );
          }}
          sx={{
            background: "#f6f6f6",
            borderRadius: "20px",
            boxShadow: "10px 20px 50px 20px rgba(0, 0, 0, 0.06)",
          }}
        />
      )}
    </PlacesAutocomplete>
  );
};

export default LocationSearchBar;
