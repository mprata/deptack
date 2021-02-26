import React, { useRef } from 'react';

import './cashback.css';

export const OfferPreview = (props: any) => {

    return (
        <div className='offer-form'>
            <span className='form-header'>offer preview</span>
            <div className='img-preview-container'>
                <img className='img-upload' src={props.imgSrc} />
            </div>
        </div>

    )
}