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


const ResetPinPage = () => {
    const history = useHistory();
    const handleResetPin = () => {
        history.push('/login');
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
                        <Image src={payteckLogo} style={style.resetPinPaytackLogo} />
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <p style={style.resetPin}>We've sent a verification code on +45976786768,</p>
                        </div>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',
                                font:'normal normal normal 16px/20px ProximaNova'}}>
                        <p> Use that code to reset your PIN</p>
                        </div>
                        <TextField
                            id="standard-basic"
                            label="Enter Varification Code"
                            style={style.resetInput}
                        />
                         <TextField
                            id="standard-basic"
                            label="Enter 4 Digit PIN"
                            style={style.resetInput}
                        />
                         <TextField
                            id="standard-basic"
                            label="Conform PIN"
                            style={style.resetInput}
                        />
                        

                        <div>
                            <Button style={style.sendOtpButton} onClick={handleResetPin}>Reset PIN</Button>
                           
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
        </Container>
    );
};
export default ResetPinPage;
