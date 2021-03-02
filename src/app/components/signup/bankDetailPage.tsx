import React, { Fragment } from "react";
import { useHistory } from 'react-router-dom';
import {
  Segment,
  Grid,
  Image,
  Checkbox,
  Button,
  Form,
  Container
} from "semantic-ui-react";
import bankDetailPageImg from "../../../assets/bankDetailPage.jpg";
import payteckLogo from "../../../assets/logo.png";
import TextField from "@material-ui/core/TextField";
import imgPlaceholder from "../../../assets/img_placeholder.svg";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { style } from './style';


const BankDetailPage = () => {
  const history = useHistory();
  const handleVerify = () => {
    history.push('/enterpin');
  }
  return (
    <Container>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
              <div style={style.rightDiv}>
            <Image src={bankDetailPageImg} fluid></Image>
            <p style={style.text} className='img-text'>The loyalty solution that embraces your customers</p>
            </div>
          </Grid.Column>
          <Grid.Column>
            <Image src={payteckLogo} style={style.bankDetailPaytackLogo} />
            <p style={style.allMostDone}>Almost done. Validate your bank details</p>
            <TextField
                    id="standard-basic"
                    label="Business Owner Name"
                    style={style.businessAddress}
                  />
  <TextField
                    id="standard-basic"
                    label="Name on the bank"
                    style={style.businessAddress}
                  />
                    <TextField
                    id="standard-basic"
                    label="IBAN Number"
                    style={style.businessAddress}
                  />
                   <div>
            <Button style={style.verifyButton} onClick={handleVerify}>Verify</Button>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};
export default BankDetailPage;
