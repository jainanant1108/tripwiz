import { Button, Grid, TextField, Typography, useTheme } from "@mui/material";
import React from "react";
import { FacebookIcon, GoogleIcon, Logo } from "../../utils/images";
import LoginImage from "../../utils/images/LoginImage.png";
// import { Button } from "../../components";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/Button/Button";

const Login = () => {
  const navigate = useNavigate();
  const methods = useForm({
    mode: "onBlur",
  });
  const {
    control,
    formState: { errors },
  } = methods;
  const theme = useTheme();
  const handleSignInWithGoogle = () => {
    const auth = getAuth(); // Get the Firebase Auth instance

    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // User is signed in with Google.
        const user = result.user;
        console.log("User logged in:", user);
        navigate("/", { replace: true });

        // You can now redirect the user or perform further actions.
      })
      .catch((error) => {
        // Handle errors here.
        console.error(error);
      });
  };

  const handleSignInWithFacebook = async () => {
    const auth = getAuth();

    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User logged in with Facebook:", user);
      navigate("/", { replace: true });

      // You can redirect or perform further actions with the user.
    } catch (error) {
      console.error("Error signing in with Facebook:", error);
    }
  };

  const onSubmit = async (formData) => {
    try {
      const auth = getAuth();
      const user = await signInWithEmailAndPassword(
        auth,
        formData?.email,
        formData?.password
      );
      console.log("user", user);
      navigate("/", { replace: true });
      // The user is signed up.
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <FormProvider {...methods}>
      <form noValidate onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="container">
          <Grid container justifyContent={"space-between"}>
            <Grid
              container
              lg={5.5}
              flexDirection={"column"}
              gap={theme.spacing(10)}
              justifyContent={"space-evenly"}
            >
              <Grid item>
                <Grid
                  container
                  mt={theme.spacing(4)}
                  justifyContent={"center"}
                  gap={theme.spacing(5)}
                >
                  <Logo />
                  <Typography
                    fontWeight={600}
                    fontFamily={"Poppins"}
                    fontSize={theme.spacing(9)}
                  >
                    TripWiz
                  </Typography>
                </Grid>
              </Grid>
              <Grid item alignSelf={"center"}>
                <Typography
                  fontFamily={"Recursive"}
                  fontSize={"26px"}
                  fontWeight={400}
                  color={theme.palette.grey[100]}
                  textAlign={"center"}
                >
                  {"Welcome back to the experience of ease of mind"}
                </Typography>
              </Grid>
              <Grid container gap={theme.spacing(6)}>
                <Grid container justifyContent={"center"} lg={12}>
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: "Please enter email address",
                      pattern: {
                        value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-z]{2,7}$/,
                        message: "Please enter a valid email address",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        id="email"
                        name="email"
                        sx={{
                          width: "90%",
                        }}
                        placeholder="Email"
                        type="email"
                        field={field}
                        value={field.value}
                        inputRef={field.ref}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        error={errors?.email?.message}
                        helperText={errors?.email?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid container justifyContent={"center"} lg={12}>
                  <Controller
                    name="password"
                    control={control}
                    rules={{
                      required: "Please enter password",
                      minLength: {
                        value: 8,
                        message: "Password Should be Greater then 8 characters",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        id="password"
                        name="password"
                        sx={{
                          width: "90%",
                          borderRadius: "20px",
                        }}
                        type="password"
                        autoComplete="current-password"
                        placeholder="Password"
                        field={field}
                        value={field.value}
                        inputRef={field.ref}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        error={errors?.password?.message}
                        helperText={errors?.password?.message}
                      />
                    )}
                  />
                </Grid>
              </Grid>
              <Grid container justifyContent={"center"}>
                <ButtonComponent
                  id={"login"}
                  label={"Login"}
                  variant={"primary"}
                  sx={{ width: "90%", padding: "20px" }}
                  labelFontSize={"24px"}
                  buttonType="submit"
                />
              </Grid>
              <Grid container gap={theme.spacing(6)}>
                <Grid container item justifyContent={"center"}>
                  <Button
                    id="googleSigning"
                    sx={{
                      width: "90%",
                      background: theme.palette.primary.main,
                      borderRadius: "15px",
                      boxShadow: "4px 4px 10px 5px rgba(0, 0, 0, 0.07)",
                      "&:hover": {
                        background: theme.palette.primary.main,
                      },
                      p: `${theme.spacing(3)} 0px`,
                    }}
                    onClick={handleSignInWithGoogle}
                  >
                    <GoogleIcon />
                    <Typography
                      fontFamily={"Poppins"}
                      fontSize={theme.spacing(4)}
                      fontWeight={600}
                      marginLeft={theme.spacing(10)}
                      color={theme.palette.secondary.main}
                    >
                      {"Continue with Google"}
                    </Typography>
                  </Button>
                </Grid>
                <Grid container item justifyContent={"center"}>
                  <Button
                    id="facebookSigning"
                    sx={{
                      width: "90%",
                      background: theme.palette.primary.main,
                      borderRadius: "15px",
                      boxShadow: "4px 4px 10px 5px rgba(0, 0, 0, 0.07)",
                      "&:hover": {
                        background: theme.palette.primary.main,
                      },
                      p: `${theme.spacing(3)} 0px`,
                    }}
                    onClick={handleSignInWithFacebook}
                  >
                    <FacebookIcon />
                    <Typography
                      fontFamily={"Poppins"}
                      fontSize={theme.spacing(4)}
                      fontWeight={600}
                      marginLeft={theme.spacing(10)}
                      color={theme.palette.secondary.main}
                    >
                      {"Continue with Facebook"}
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent={"center"}
                gap={theme.spacing(2)}
                flexDirection={"column"}
              >
                <Grid
                  item
                  sx={{
                    color: `${theme.palette.grey[100]}`,
                    fontSize: "18px",
                    fontFamily: "Recursive",
                  }}
                >
                  {"Don’t have an account ?"}
                </Grid>
                <Grid item>
                  <ButtonComponent
                    variant="link"
                    label={"Sign Up"}
                    onClick={handleSignupClick}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid container lg={5.5}>
              <img src={LoginImage} alt="" srcset="" width={"100%"} />
            </Grid>
          </Grid>
        </div>
      </form>
    </FormProvider>
  );
};

export default Login;
