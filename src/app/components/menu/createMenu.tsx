import React from 'react'
import { style } from './style'
import imgPlaceholder from "../../../assets/img_placeholder.svg"
import createMenuImg from '../../../assets/createMenu.png'
import {
    Grid,
    Image,
    Container,
    Button,

} from "semantic-ui-react";
const CreateMenu = () => {
    return (
        <Grid style={style.createMenuDiv}>
            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Image
                            src={imgPlaceholder}
                            style={{ float: 'right', marginTop: '20px' }}
                            circular
                        />
                    </Grid.Column>
                    <Grid.Column  >
                        <div style={{ float: 'left', marginTop: "35px" }}>
                            <p >Burger King<br />Sweden</p>

                        </div>

                    </Grid.Column>
                </Grid.Row>
                <Grid.Row style={style.createMenuImg}>
                    <Image
                        src={createMenuImg}

                    />

                </Grid.Row>
                <Grid.Row style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop:'20px'}}>
                <p>Your offers are invisible to your customers</p>
                </Grid.Row>
                <Grid.Row style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                   
                    <Button style={style.createMenuButton}>Create Menu</Button>
                </Grid.Row>

            </Grid>



        </Grid>

    )
}
export default CreateMenu