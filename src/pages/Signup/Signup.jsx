import { Button, Grid, TextField, Typography, useTheme } from "@mui/material";
import React from "react";
import { FacebookIcon, GoogleIcon, Logo } from "../../utils/images";
import SignUpImage from "../../utils/images/SignupImage.png";
// import { Button } from "../../components";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/Button/Button";

const Signup = () => {
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
    console.log(auth);
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
      await createUserWithEmailAndPassword(
        auth,
        formData?.email,
        formData?.password
      );
      navigate("/", { replace: true });
      // The user is signed up.
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <FormProvider {...methods}>
      <form noValidate onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="container">
          <Grid container justifyContent={"space-between"}>
            <Grid container lg={5.5}>
              <img src={SignUpImage} alt="" srcset="" width={"100%"} />
            </Grid>
            <Grid
              container
              lg={5.5}
              flexDirection={"column"}
              gap={theme.spacing(10)}
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
                <Grid container columnSpacing={theme.spacing(5)}>
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
                        message: "Password Should be Greater then 8 characters",
                      },
                      maxLength: {
                        value: 40,
                        message: "Password Should be Lesser then 40 characters",
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
              <Grid container justifyContent={"center"}>
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
          </Grid>
        </div>
      </form>
    </FormProvider>
  );
};

export default Signup;
