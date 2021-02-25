import React from 'react';
import Grid from '@material-ui/core/Grid';

import './cashback.css';

export default class CashbackOffer extends React.Component {

    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <div className='cashback-title'>create new cashback offer</div>
                <div className='cashback-subtitle'>Attract customers with discounts</div>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                    xs={9}
                >
                    <Grid key='create-offer' item xs={6}>
                        <div className='create-offer'>

                        </div>
                    </Grid>
                    <Grid key='offer-preview' item xs={5}>
                        <div className='offer-preview'>

                        </div>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}