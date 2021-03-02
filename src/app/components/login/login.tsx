import React, { CSSProperties } from "react";
import { useHistory, Link } from 'react-router-dom';
import { Segment, Grid, Image, Checkbox, Button, Container } from "semantic-ui-react";
import loginpage from '../../../assets/loginpage.png';
import payteckLogo from "../../../assets/logo.png";
import TextField from "@material-ui/core/TextField";
import { style } from './style';
import PropTypes from 'prop-types';

import './login.css';

interface LoginProps {
  setToken: any
}

const Login = (props: React.PropsWithChildren<LoginProps>) => {
  const handleSubmit = () => {
    history.push('/home/dashboard');
  }
  const history = useHistory();
  const handleSignup = () => {
    history.push('/signup');
  }
  return (
    <Container >
      <Grid >
        <Grid.Row columns={2}>
          <Grid.Column >
            <div style={style.rightDiv}>
              <Image src={loginpage} style={style.img} />
              <p style={style.text} className='img-text'>The all-in-one smart solution to loyalty</p>
            </div>
          </Grid.Column>
          <Grid.Column >
            <Image src={payteckLogo} style={style.payteckLogoPng} />
            <p style={style.welcome}>Welcome back! Login to your account</p>

            <TextField
              id="standard-basic"
              label="Username"
              style={style.inputBox}
            />

            <TextField
              id="standard-basic"
              label="PIN"
              style={style.inputBox}
            />
            <Grid>
              <Grid.Row columns={2} style={style.checkBoxStyle}>
                <Grid.Column>
                  <Checkbox label="Remember me" />
                </Grid.Column>
                <Grid.Column>
                  <p><Link to='/forgotpassword'>Forgot PIN?</Link></p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Button style={style.signinButton} onClick={handleSubmit}>Sign in</Button>
                </Grid.Column>
                <Grid.Column>
                  <Button style={style.signupButton} onClick={handleSignup}>Sign up for free</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};
export default Login;

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}