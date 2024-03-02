import {
  Backdrop,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { GoogleIcon, Logo } from "../../utils/images";
import SignUpImage from "../../utils/images/SignupImage.png";
import {
  GoogleAuthProvider,
  getAuth,
  getRedirectResult,
  signInWithRedirect,
} from "firebase/auth";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { InfinitySpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { Snackbar } from "../../components";
import ButtonComponent from "../../components/Button/Button";
import { signupUser, googleLogin, ping } from "../../services";
import { useDispatch } from "react-redux";
import { setUID, setUser } from "../../store/slices";

const Signup = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const methods = useForm({
    mode: "onBlur",
  });
  const {
    control,
    formState: { errors },
  } = methods;
  const theme = useTheme();
  const dispatch = useDispatch();
  const handleSignInWithGoogle = () => {
    const auth = getAuth(); // Get the Firebase Auth instance
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const handleRedirectCallback = async () => {
    const auth = getAuth();

    try {
      setIsSubmitting(true);
      const result = await getRedirectResult(auth);
      if (!result) {
        setIsSubmitting(false);
      }
      const user = result?.user;

      // Check if the user is signed in
      if (user) {
        // Store the UID in Firestore Realtime Database
        setIsSubmitting(true);
        // Dispatch actions to update Redux store or perform other actions
        dispatch(setUID(user.uid));
        dispatch(
          setUser({
            displayName: user.displayName,
            username: user.email,
            uid: user.uid,
          })
        );
        await googleLogin({
          displayName: user.displayName,
          username: user.email,
          uid: user.uid,
        });
        console.log("User logged in:", user);
        setIsSubmitting(false);
        navigate("/", { replace: true });
      }
    } catch (error) {
      setIsSubmitting(false);
      // Handle errors here.
      console.error(error);
    }
  };

  useEffect(() => {
    handleRedirectCallback();
    ping();
  }, []);

  const onSubmit = async (formData) => {
    try {
      setIsSubmitting(true);
      const user = await signupUser({
        username: formData?.email,
        password: formData?.password,
        displayName: formData?.firstName.concat(" ", formData?.lastName),
      });
      console.log(user);
      setIsSubmitting(false);
      navigate("/login", { replace: true });

      // The user is signed up.
    } catch (error) {
      setIsSubmitting(false);
      setMessage("Error while signing up. Please try again later.");
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <FormProvider {...methods}>
      <form noValidate onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="container">
          <Box m={{ sm: "auto", md: "53px" }}>
            <Grid
              container
              justifyContent={"space-between"}
              flexDirection={{ sm: "column-reverse", md: "row" }}
              gap={{ sm: "20px", md: "0px" }}
            >
              <Grid container lg={3.5} m={`auto`}>
                <img
                  src={SignUpImage}
                  alt=""
                  srcset=""
                  width={"100%"}
                  height={"90%"}
                />
              </Grid>
              <Grid
                container
                lg={4}
                flexDirection={"column"}
                gap={theme.spacing(10)}
                justifyContent={"space-evenly"}
                m={`auto`}
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
                  >
                    {"Welcome to the journey without worry"}
                  </Typography>
                </Grid>
                <Grid container gap={theme.spacing(6)}>
                  <Grid
                    container
                    columnSpacing={theme.spacing(5)}
                    rowSpacing={{ sm: theme.spacing(6), md: "0px" }}
                  >
                    <Grid item sm={12} md={6}>
                      <Controller
                        name="firstName"
                        control={control}
                        rules={{
                          required: "Please enter First Name",
                        }}
                        render={({ field }) => (
                          <TextField
                            id="firstName"
                            name="firstName"
                            sx={{
                              width: "100%",
                            }}
                            placeholder="First Name"
                            type="text"
                            field={field}
                            value={field.value}
                            inputRef={field.ref}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            error={errors?.firstName?.message}
                            helperText={errors?.firstName?.message}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item sm={12} md={6}>
                      <Controller
                        name="lastName"
                        control={control}
                        rules={{
                          required: "Please enter Last Name",
                        }}
                        render={({ field }) => (
                          <TextField
                            id="lastName"
                            name="lastName"
                            sx={{
                              width: "100%",
                            }}
                            placeholder="Last Name"
                            type="text"
                            field={field}
                            value={field.value}
                            inputRef={field.ref}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            error={errors?.lastName?.message}
                            helperText={errors?.lastName?.message}
                          />
                        )}
                      />
                    </Grid>
                  </Grid>
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
                            width: "100%",
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
                          message:
                            "Password Should be Greater then 8 characters",
                        },
                        maxLength: {
                          value: 40,
                          message:
                            "Password Should be Lesser then 40 characters",
                        },
                        pattern: {
                          value:
                            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                          message:
                            "Password should consist of atleast one uppercase letter, one lowercase letter, one digit and one special character",
                        },
                      }}
                      render={({ field }) => (
                        <TextField
                          id="password"
                          name="password"
                          sx={{
                            width: "100%",
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
                  <Grid container justifyContent={"center"} lg={12}>
                    <Controller
                      name="confirmPassword"
                      control={control}
                      rules={{
                        required: "Please enter confirm password",
                        validate: async (val, formValues) => {
                          if (val !== formValues?.password) {
                            return "Password and Confirm Password do not match";
                          }

                          return true;
                        },
                      }}
                      render={({ field }) => (
                        <TextField
                          id="confirmPassword"
                          name="confirmPassword"
                          sx={{
                            width: "100%",
                          }}
                          type="password"
                          autoComplete=""
                          placeholder="Confirm Password"
                          field={field}
                          value={field.value}
                          inputRef={field.ref}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          error={errors?.confirmPassword?.message}
                          helperText={errors?.confirmPassword?.message}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
                <Grid container justifyContent={"center"}>
                  <ButtonComponent
                    id={"signup"}
                    label={"Signup"}
                    variant={"primary"}
                    sx={{ width: "90%" }}
                    labelFontSize={"24px"}
                    buttonType="submit"
                  />
                </Grid>
                <Grid container justifyContent={"center"}>
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
              </Grid>
            </Grid>
            <Snackbar open={open} handleClose={handleClose} message={message} />
            <Backdrop open={isSubmitting}>
              <InfinitySpin width="200" color={theme.palette.secondary.main} />
            </Backdrop>
          </Box>
        </div>
      </form>
    </FormProvider>
  );
};

export default Signup;
