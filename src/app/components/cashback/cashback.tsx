import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';

import './cashback.css';
export const Cashback = () => {
    const history = useHistory();
    const handleCreate = () => {
        history.push('/home/cashback-offer');
    }
    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <div className='cashback-title'>CASHBACK</div>
            <div className='cashback-subtitle'>Your deals & customer requests</div>
            <div className='offer-container'>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <div className='cashback-logo' />
                    <div className='offer-text'>Attract customers with discounts</div>
                    <button className='create-button' onClick={handleCreate}>Create Offer</button>
                </Grid>
            </div>
        </Grid>
    )
}