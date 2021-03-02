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
import setPin from "../../../assets/setpinart.png";
import payteckLogo from "../../../assets/logo.png";
import TextField from "@material-ui/core/TextField";
import imgPlaceholder from "../../../assets/img_placeholder.svg";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { style } from './style';


const EnterPinPage = () => {
    const history = useHistory();
    const handleSetPin = () => {
        history.push('/login');
    }
    return (
        <Container>
            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <div>
                            <Image style={style.setPin} src={setPin} fluid></Image>
                        </div>


                    </Grid.Column>
                    <Grid.Column>
                        <Image src={payteckLogo} style={style.bankDetailPaytackLogo} />
                        <p style={style.allMostDone}>All done! Secure your account with a PIN</p>
                        <TextField
                            id="standard-basic"
                            label="Enter 4 digit PIN"
                            style={style.mobileNumber}
                        />
                        <TextField
                            id="standard-basic"
                            label="Conform PIN"
                            style={style.mobileNumber}
                        />

                        <div>
                            <Button style={style.sendOtpButton} onClick={handleSetPin}>Set PIN</Button>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};
export default EnterPinPage;
