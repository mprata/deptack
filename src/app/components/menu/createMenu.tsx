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
        history.push('/home/menu-additem');
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
                            <p style={{font:'normal normal bold 16px/19px ProximaNova'}}>Burger King</p>
                            <p style={{font:'normal normal normal 13px/15px ProximaNova',
                            marginTop:'-10px',color: '#CFCFCF',marginRight:'30px'}}>Sweden</p>

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
                <p style={{color:'#424B54',font:'normal normal normal 16px/24px ProximaNova'}}>
                    Your offers are invisible to your customers</p>
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