import React, { useState } from "react";
import "./Home.css";
import {
  Grid,
  Typography,
  useTheme,
  TextField,
  Autocomplete,
  Button,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomePageImage from "../../utils/images/HomePage.png";
import HomePageSection1 from "../../utils/images/HomePageSection1.png";
import HomePageSection2 from "../../utils/images/HomePageSection2.png";
import { Header, Snackbar } from "../../components";
import PlacesAutocomplete, {
  geocodeByPlaceId,
} from "react-places-autocomplete";
import { useNavigate } from "react-router-dom";

function Home() {
  const [address, setAddress] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const navigate = useNavigate();
  const handleSelect = (address, placeId) => {
    // Fetch location details by place ID
    geocodeByPlaceId(placeId)
      .then((results) => {
        if (results && results[0]) {
          const location = results[0];

          // Extract latitude and longitude
          const lat = location.geometry.location.lat();
          const lng = location.geometry.location.lng();

          setSelectedLocation({
            name: address,
            lat: lat,
            lng: lng,
          });
        }
      })
      .catch((error) => {
        <Snackbar message={"Error fetching location details"} />;
      });
  };
  const handleSuggestionsFetchRequested = ({ value }) => {
    if (value) {
      // Filter suggestions to show only cities
      setSuggestions((suggestions) =>
        suggestions.filter((suggestion) =>
          suggestion.types.includes("(cities)" || "locality")
        )
      );
    }
  };

  const handleSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const handleGoClick = () => {
    if (selectedLocation) {
      navigate(
        `/${selectedLocation.name}/${selectedLocation.lat}/${selectedLocation.lng}`
      );
    }
  };

  const theme = useTheme();
  return (
    <>
      <Header />
      <Grid m={`${theme.spacing(5)} 0px`}>
        <Grid container justifyContent={"space-between"}>
          <Grid
            item
            container
            sm={4}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography
              fontSize={{ sm: theme.spacing(3), md: theme.spacing(12) }}
              fontWeight={700}
            >
              {"Fuel your imagined trip with "}
              <span style={{ color: theme.palette.error.main }}>{"AI"}</span>
            </Typography>
          </Grid>
          <Grid item sm={7}>
            <img src={HomePageImage} alt="" style={{ maxWidth: "100%" }} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={11}>
            <PlacesAutocomplete
              value={address}
              onChange={setAddress}
              onSelect={handleSelect}
              searchOptions={{ type: ["(cities)", "locality"] }}
              debounce={300}
              highlightFirstSuggestion={true}
            >
              {({ getInputProps, suggestions }) => (
                <Autocomplete
                  options={suggestions}
                  getOptionLabel={(suggestion) => suggestion.description}
                  renderInput={(params) => (
                    <TextField
                      {...getInputProps(params)}
                      placeholder="Where would you like to go ?"
                      sx={{ background: "#f6f6f6" }}
                    />
                  )}
                  onSuggestionsFetchRequested={handleSuggestionsFetchRequested}
                  onSuggestionsClearRequested={handleSuggestionsClearRequested}
                  sx={{
                    background: "#f6f6f6",
                    borderRadius: "20px",
                    boxShadow: "10px 20px 50px 20px rgba(0, 0, 0, 0.06)",
                  }}
                />
              )}
            </PlacesAutocomplete>
          </Grid>
          <Grid container item sm={1} justifyContent={"flex-end"}>
            <Button
              variant="contained"
              endIcon={<NavigateNextIcon />}
              onClick={handleGoClick}
            >
              Go
            </Button>
          </Grid>
        </Grid>
        <Grid container>
          <Grid container sm={6} alignItems={"center"}>
            <Typography
              fontSize={{ sm: theme.spacing(3), md: theme.spacing(12) }}
              fontWeight={600}
            >
              {"The endless possibilities encompassed in "}
              <span style={{ color: theme.palette.error.main }}>{"AI "}</span>
              {"possibility"}
            </Typography>
          </Grid>
          <Grid item sm={6}>
            <img src={HomePageSection1} alt="" style={{ maxWidth: "100%" }} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={6}>
            <img src={HomePageSection2} alt="" style={{ maxWidth: "100%" }} />
          </Grid>
          <Grid
            item
            container
            sm={6}
            justifyItems={"flex-end"}
            alignItems={"center"}
          >
            <Typography
              fontSize={{ sm: theme.spacing(3), md: theme.spacing(12) }}
              fontWeight={600}
              textAlign={"end"}
            >
              {"Get your camera ready for some amazing Tripping!!"}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
