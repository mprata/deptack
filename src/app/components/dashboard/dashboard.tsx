import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { DataGrid, ColDef, ValueGetterParams } from '@material-ui/data-grid';
import AreaChartWrapper from '../../common/chart/area';
import BarChartWrapper from '../../common/chart/bar';
import './dashboard.css';

const columns: ColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params: ValueGetterParams) =>
            `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

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
                            <Paper className='dashboard-paper paper'>
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
                            </Paper>
                        </Grid>
                        <Grid key='revenue' item xs={4}>
                            <Paper className='dashboard-paper paper'>
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
                            </Paper>
                        </Grid>
                        <Grid key='orders' item xs={4}>
                            <Paper className='dashboard-paper paper'>
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
                            </Paper>
                        </Grid>
                        <Grid key='edit-profile' item xs={4}>
                            <Paper className='dashboard-paper1 paper'>
                                Edit Profile
                            </Paper>
                        </Grid>
                        <Grid key='cust-insights' item xs={8}>
                            <Paper className='dashboard-paper2 paper'>
                                <BarChartWrapper />
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3} className='campaign'>
                    <Grid key='campaign' item>
                        <Paper className='dashboard-paper3 paper'>
                            Campaign
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item xs={12} className='dash-grid'>
                    <Grid key='dash-grid' item xs={12}>
                        <div style={{ height: 501, width: '100%' }}>
                            <DataGrid rows={rows} columns={columns} pageSize={7} />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}