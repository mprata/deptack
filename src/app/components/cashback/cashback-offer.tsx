import React from 'react';
import Grid from '@material-ui/core/Grid';
import { OfferForm } from './offer-form';
import { OfferPreview } from './offer-preview';

import './cashback.css';

export interface CashbackOfferProps {
    children?: any;
}

export interface CashbackOfferState {
    imgSrc: any
}

export default class CashbackOffer extends React.Component<CashbackOfferProps, CashbackOfferState> {

    constructor(props: any) {
        super(props)
        this.state = {
            imgSrc: ''
        };
    }

    updateImgSrc = (src: any) => {
        this.setState({
            imgSrc: src
        });
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
                    justify="center"
                    alignItems="flex-start"
                    xs={9}
                    spacing={5}
                >
                    <Grid key='create-offer' item xs={6}>
                        <div className='create-offer'>
                            <OfferForm onImgUpload={this.updateImgSrc}/>
                        </div>
                    </Grid>
                    <Grid key='offer-preview' item xs={4}>
                        <div className='offer-preview'>
                            <OfferPreview imgSrc={this.state.imgSrc}/>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}