import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const classes = useStyles();

  return (
        <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<AccountCircleOutlinedIcon />}
        onClick={() => loginWithRedirect()} 
        >Login</Button> 
  )
};

export default LoginButton;