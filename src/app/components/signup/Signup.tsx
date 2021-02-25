import React, { Fragment } from "react";
import { useHistory, Link } from 'react-router-dom';
import {
  Segment,
  Grid,
  Image,
  Checkbox,
  Button,
  Form,
  Container
} from "semantic-ui-react";
import signupImg from "../../../assets/signup.png";
import payteckLogo from "../../../assets/logo.png";
import TextField from "@material-ui/core/TextField";
import imgPlaceholder from "../../../assets/img_placeholder.svg";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { style } from './style';


const Signup = () => {
  const history = useHistory();
  const handleNext = () => {
    history.push('/bankdetails');
  }
  return (
    <Container>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
              <div style={style.rightDiv}>
            <Image src={signupImg} fluid></Image>
            <p style={style.text}>Surprise your customers with personalised rewards</p>
            </div>
          </Grid.Column>
          <Grid.Column>
            <Image src={payteckLogo} style={style.payteckLogoPng} />
            <p style={style.welcome}>Let's set up your business details</p>
            <Grid style={style.imgGrid}>
              <Grid.Row columns={2}>
                <Grid.Column width={5}>
                  <Image
                    src={imgPlaceholder}
                    style={{ marginLeft: "30px" }}
                    circular
                  />
                  <p style={style.businessLogo}>Business Logo</p>
                </Grid.Column>
                <Grid.Column width={10}>
                  <form>
                    <TextField
                      id="standard-basic"
                      label="Business name"
                      style={style.inputBox}
                    />
                    <br />
                    <Checkbox label="Add a menu" style={style.checkBoxStyle} />
                  </form>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <TextField
                    id="standard-basic"
                    label="Registration num/CVR"
                    style={style.RegistrationBox}
                  />
                </Grid.Column>
                <Grid.Column>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">Business type</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      style={style.inputWidth}
                    ></Select>
                  </FormControl>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <TextField
                    id="standard-basic"
                    label="Business address"
                    style={style.businessAddress}
                  />
                   <Grid>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <TextField
                    id="standard-basic"
                    label="Business email"
                    style={style.RegistrationBox}
                  />
                </Grid.Column>
                <Grid.Column>
                <TextField
                    id="standard-basic"
                    label="Business phone"
                    style={style.inputWidth}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid><div>
            <Checkbox label="I agree to payteck terms of trade" style={style.termsTrade} />
            </div>
            <div>
            <Button style={style.signinButton} onClick={handleNext}>Next</Button>
            </div><div>
            <p style={style.signInText}>Already have an account? <Link to='/login'>Sign in.</Link> </p>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};
export default Signup;
