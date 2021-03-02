import React, { Fragment } from "react";
import { useHistory } from 'react-router-dom';
import {
    Segment,
    Grid,
    Image,
    Checkbox,
    Button,
    Divider,
    Container
} from "semantic-ui-react";
import forgetPin from "../../../assets/forgetpin.png";
import payteckLogo from "../../../assets/logo.png";
import TextField from "@material-ui/core/TextField";
import imgPlaceholder from "../../../assets/img_placeholder.svg";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { style } from './style';


const EnterMobileNumberPage = () => {
    const history = useHistory();
    const handleOtp = () => {
        history.push('/resetpin');
    }
    return (
        <Container>
            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <div>
                            <Image style={style.setPin} src={forgetPin} fluid></Image>
                           
                        </div>

                        
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={payteckLogo} style={style.bankDetailPaytackLogo} />
                        <p style={style.forgotPin}>Forgot PIN? Don't worry, we will help you recover your account</p>
                        <TextField
                            id="standard-basic"
                            label="Registered Mobile Number"
                            style={style.mobileNumber}
                        />
                        

                        <div>
                            <Button style={style.sendOtpButton} onClick={handleOtp}>Send OTP</Button>
                            <Button style={style.cancelButton} onClick={handleOtp}>Cancel</Button>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
        </Container>
    );
};
export default EnterMobileNumberPage;
