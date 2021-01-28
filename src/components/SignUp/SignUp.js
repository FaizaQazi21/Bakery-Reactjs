import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '500px',
      },
    },
  }));

function SignUp() {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div style={{ width: '500px', paddingLeft: '400px', paddingTop: '30px'}}>
                <TextField required id="standard-required" label="Name" />
                <TextField required id="standard-required" label="Email Address" />
                <TextField required id="standard-password-input" label="Password" type="password" autoComplete="current-password"/>
                <TextField required id="standard-password-input" label="Confirm Password" type="password" autoComplete="current-password"/>
                <Button variant="outlined" style={{ marginTop: '15px'}}>Sign Up</Button>
            </div>    
    </form>
    )
}

export default SignUp
