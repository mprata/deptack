import React from 'react';
import Grid from '@material-ui/core/Grid';
import { DataGrid, ColDef, ValueGetterParams } from '@material-ui/data-grid';
import AreaChartWrapper from '../../common/chart/area';
import BarChartWrapper from '../../common/chart/bar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import { GridData } from '../../common/util';
import './dashboard.css';

const columns: ColDef[] = [
    {
        field: 'no', headerName: 'NO', width: 130, headerClassName: 'grid-header',
        cellClassName: 'grid-cell'
    },
    {
        field: 'name', headerName: 'NAME', width: 150, headerClassName: 'grid-header',
        cellClassName: 'grid-cell'
    },
    {
        field: 'orderType', headerName: 'ORDER TYPE', width: 150, headerClassName: 'grid-header',
        cellClassName: 'order-type'
    },
    {
        field: 'orderTime',
        headerName: 'ORDER TIME',
        width: 150,
        headerClassName: 'grid-header',
        cellClassName: 'grid-cell'
    },
    {
        field: 'items',
        headerName: 'ITEMS',
        width: 300,
        headerClassName: 'grid-header',
        cellClassName: 'grid-cell'
    },
    {
        field: 'comments',
        headerName: 'COMMENTS',
        width: 300,
        headerClassName: 'grid-header',
        cellClassName: 'grid-cell'
    },
    {
        field: 'actions',
        headerName: 'ACTIONS',
        width: 130,
        headerClassName: 'grid-header',
        renderCell: (params: any) => (
            <div className='grid-actions'>
                <button className='approve-btn'>Accept</button>
                <button className='reject-btn'>Reject</button>
            </div>
        ),
    }
];

const rows = GridData;

export default class Dashboard extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Grid container className='dashboard-grid' spacing={3}>
                <Grid item xs={9}>
                    <Grid container justify="flex-start" spacing={3}>
                        <Grid key='new-customers' item xs={4}>
                            <div className='dashboard-paper paper'>
                                <div className='paper-header1'>
                                    <span className='header-span1'>124</span>
                                    <span className='header-span2' style={{ color: '#F46363' }}> + 86%</span>
                                </div>
                                <div className='paper-header2'>
                                    New Customers Today
                                </div>
                                <div className='dashboard-chart'>
                                    <AreaChartWrapper
                                        type='new-customers'
                                        height={180}
                                        width={443}
                                        stroke={'#F7617D'}
                                        fill={'#FDCBD4'}
                                        strokDash={'5 5'}
                                        inverted={false}
                                    >
                                    </AreaChartWrapper>
                                </div>

                            </div>
                        </Grid>
                        <Grid key='revenue' item xs={4}>
                            <div className='dashboard-paper paper'>
                                <div className='paper-header1'>
                                    <span className='header-span1'>200 Kr.</span>
                                    <span className='header-span2' style={{ color: '#22CE8B' }}>+ 145%</span>
                                </div>
                                <div className='paper-header2'>
                                    Revenue Today
                                </div>
                                <div className='dashboard-chart'>
                                    <AreaChartWrapper
                                        type='revenue'
                                        height={180}
                                        width={443}
                                        stroke={'#2BC5B4'}
                                        fill={'#2CD889'}
                                        strokDash={'0 0'}
                                        inverted={true}
                                    >
                                    </AreaChartWrapper>
                                </div>

                            </div>
                        </Grid>
                        <Grid key='orders' item xs={4}>
                            <div className='dashboard-paper paper'>
                                <div className='paper-header1'>
                                    <span className='header-span1'>58</span>
                                    <span className='header-span2' style={{ color: '#F79256' }}>+ 112%</span>
                                </div>
                                <div className='paper-header2'>
                                    orders today
                                </div>
                                <div className='dashboard-chart'>
                                    <AreaChartWrapper
                                        type='orders'
                                        height={180}
                                        width={443}
                                        stroke={'#FECD54'}
                                        fill={'#F79256'}
                                        strokDash={'5 5'}
                                        inverted={false}
                                    >
                                    </AreaChartWrapper>
                                </div>

                            </div>
                        </Grid>
                        <Grid key='edit-profile' item xs={4}>
                            <div className='dashboard-paper1 paper'>
                                <div className='profile-section'>
                                    <AccountCircleIcon className='prof-icon' />
                                    <span className='prof-name'>Burger King</span>
                                    <span className='prof-email'>info@burgerking.com</span>
                                    <span className='prof-phone'>+91 987 654 4524</span>
                                    <Button variant="contained" className='edit-button'>
                                        EDIT PROFILE
                                    </Button>
                                    <div className='prof-text1 prof-gap'>
                                        <div className='prof-span1'>
                                            <span>Total Revenue:&nbsp;</span>
                                            <span className='val-span'>2999 Kr.</span>
                                        </div>
                                        <div className='prof-span2'>
                                            <span>Total Orders:&nbsp;</span>
                                            <span className='val-span'>478</span>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='prof-text1'>
                                        <div className='prof-span1'>
                                            <span>Total Customers:&nbsp;</span>
                                            <span className='val-span'>180 Kr.</span>
                                        </div>
                                        <div className='prof-span2'>
                                            <span>Total Campaigns:&nbsp;</span>
                                            <span className='val-span'>3</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid key='cust-insights' item xs={8}>
                            <div className='dashboard-paper2 paper'>
                                <div className='cust-insights-header'>
                                    <span className='insights-header'>CUSTOMER INSIGHTS</span>
                                    <div>
                                        <button className='cust-insight-button button-selected'>Today</button>
                                        <button className='cust-insight-button'>Last Week</button>
                                        <button className='cust-insight-button'>Last Month</button>
                                        <button className='cust-insight-button'>Custom</button>
                                    </div>
                                </div>
                                <div className='bar-container'>
                                    <BarChartWrapper />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3} className='campaign'>
                    <Grid key='campaign' item>
                        <div className='dashboard-paper3 paper'>
                            <div className='cust-campaign-header'>
                                <span className='campaign-header'>ongoing campaigns</span>
                            </div>
                            <div className='campaign-bg-container'>
                                <div className='bg-campaign'>

                                </div>
                                <div className='campaign-buttons'>
                                    <span className='campaign-edit'></span>
                                    <span className='campaign-delete'></span>
                                </div>
                            </div>
                            <div className='campaign-bg-container'>
                                <div className='campaign-text'>
                                    <span className='cam-text' style={{ color: '#2BC5B4' }}>600Kr.</span>
                                    <span className='cam-text' style={{ color: '#F7617D' }}>126</span>
                                </div>
                            </div>
                            <div className='campaign-bg-container'>
                                <div className='campaign-text1'>
                                    <span className='cam-text1'>revenue generated</span>
                                    <span className='cam-text1'>customers</span>
                                </div>
                            </div>
                            <div className='campaign-bg-container' style={{ marginTop: '40px' }}>
                                <div className='bg-campaign'>

                                </div>
                                <div className='campaign-buttons'>
                                    <span className='campaign-edit'></span>
                                    <span className='campaign-delete'></span>
                                </div>
                            </div>
                            <div className='campaign-bg-container'>
                                <div className='campaign-text'>
                                    <span className='cam-text' style={{ color: '#2BC5B4' }}>600Kr.</span>
                                    <span className='cam-text' style={{ color: '#F7617D' }}>126</span>
                                </div>
                            </div>
                            <div className='campaign-bg-container'>
                                <div className='campaign-text1'>
                                    <span className='cam-text1'>revenue generated</span>
                                    <span className='cam-text1'>customers</span>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid item xs={12} className='dash-grid'>
                    <Grid container justify="flex-start" spacing={3}>
                        <Grid key='dash-grid' item xs={12}>
                            <div style={{ height: 501, width: '100%' }}>
                                <div className='cust-grid-header'>
                                    <span className='insights-header'>CUSTOMER INSIGHTS</span>
                                    <div>
                                        <button className='cust-insight-button button-selected'>Today</button>
                                        <button className='cust-insight-button'>Last Week</button>
                                        <button className='cust-insight-button'>Last Month</button>
                                        <button className='cust-insight-button'>Custom</button>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', height: '100%' }}>
                                    <div style={{ flexGrow: 1 }}>
                                        <DataGrid
                                            rows={rows}
                                            columns={columns}
                                            hideFooterPagination={true}
                                            hideFooterSelectedRowCount={true} />
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}