import React from 'react'
import { style } from './style'
import imgPlaceholder from "../../../assets/img_placeholder.svg"
import createMenuImg from '../../../assets/createMenu.png'
import { useHistory } from 'react-router-dom'
import {
    Grid,
    Image,
    Container,
    Button,

} from "semantic-ui-react";
const CreateMenu = () => {
    const history = useHistory();
    const handleCreate = () => {
        history.push('/menu-additem');
    }
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
                   
                    <Button style={style.createMenuButton} onClick={handleCreate}>Create Menu</Button>
                </Grid.Row>

            </Grid>



        </Grid>

    )
}
export default CreateMenu