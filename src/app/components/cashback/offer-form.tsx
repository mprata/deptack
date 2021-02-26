import React, { useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import './cashback.css';

const offers = [
    {
        value: 'percent',
        label: '%',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'INR',
        label: '₹',
    }
];

export const OfferForm = (props: any) => {
    const [offer, setOffer] = React.useState('percent');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOffer(event.target.value);
    };
    const [startDate, setStartDate] = React.useState<Date | null>(
        new Date(),
    );
    const handleDateChange = (date: Date | null) => {
        setStartDate(date);
    };
    const [endDate, setEndDate] = React.useState<Date | null>(
        new Date(),
    );
    const handleEndDateChange = (date: Date | null) => {
        setEndDate(date);
    };
    const [imgSrc, setImgSrc] = React.useState<any>('');
    const _onChange = (event: any) => {
        setImgSrc(URL.createObjectURL(event.target.files[0]));
        props.onImgUpload(URL.createObjectURL(event.target.files[0]));
    };
    const [checkBoxState, setCheckBoxState] = React.useState({
        all: true,
        drinks: false,
        snacks: false,
        maincourse: false
    });
    const { all, drinks, snacks, maincourse } = checkBoxState;
    const handleDeals = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckBoxState({ ...checkBoxState, [event.target.name]: event.target.checked });
    };
    return (
        <div className='offer-form'>
            <span className='form-header'>create offer</span>
            <form>
                <div className='form-container'>
                    <div className='inner-container'>
                        <TextField id="cashback-offered" label="Cashback Offered" className='primary-field' />
                        <TextField
                            id="standard-select-offer"
                            select
                            value={offer}
                            onChange={handleChange}
                            className='secondary-field'
                        >
                            {offers.map((option: any) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div className='inner-container'>
                        <TextField id="min-purchase" label="Min. purchase required (Kr.)" className='full-field' />
                    </div>
                    <div className='inner-container'>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                className='half-field'
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Start Date"
                                value={startDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'start date',
                                }}
                            />
                            <KeyboardDatePicker
                                className='half-field secondary-field'
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="End Date"
                                value={endDate}
                                onChange={handleEndDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'end date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div className='inner-container img-container'>
                        <div className='img-ctrl-container'>
                            <input
                                type="file"
                                name="user[image]"
                                multiple={true}
                                onChange={_onChange}
                                className='img-ctrl' />
                            <div className='img-text'>Upload background image</div>
                        </div>
                        <div className='img-preview' >
                            <img className='img-upload' src={imgSrc} />
                        </div>
                    </div>

                    <div className='inner-container'>
                        <FormControl component="fieldset" className='checkbox-container'>
                            <FormLabel component="legend" className='deals-label'>Deal applies on</FormLabel>
                            <FormGroup row>
                                <FormControlLabel
                                    control={<Checkbox checked={all} onChange={handleDeals} name="all" />}
                                    label="All Categories"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={drinks} onChange={handleDeals} name="drinks" />}
                                    label="Drinks"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={snacks} onChange={handleDeals} name="snacks" />}
                                    label="Snacks"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={maincourse} onChange={handleDeals} name="main" />}
                                    label="Main Courses"
                                />
                            </FormGroup>
                        </FormControl>
                    </div>
                    <div className='button-container'>
                        <div className='button-text'>Menu items included:</div>
                        <div className='button-inner'>
                            <div className='button-text half-field'>25</div>
                            <Button variant="contained" className='half-field exclude-button'>
                                Exclude items
                            </Button>
                        </div>
                    </div>

                    <div className='inner-container'>
                        <div className='button-inner'>
                            <button className='publish-button'>Publish</button>
                        </div>
                    </div>

                </div>
            </form>
        </div>

    )
}