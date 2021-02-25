import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Dashboard from '../dashboard/dashboard';
import { TabPanel } from './tab-panel';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './tab-container.css';

export interface TabContainerProps {
    children?: any;
}

export interface TabContainerState {
    tabSelectedIndex: number;
}

export default class TabContainer extends React.Component<TabContainerProps, TabContainerState> {
    constructor(props: any) {
        super(props);
        this.state = ({
            tabSelectedIndex: 0
        });
    }

    theme = createMuiTheme({
        palette: {
            primary: {
                main: '#FFFFFF',
            },
            secondary: {
                main: '#2BC5B4',
            },
        },
        overrides: {
            MuiTab: {
                root: {
                    minHeight: 80
                }
            }
        }
    });

    a11yProps(index: any) {
        return {
            id: `paytach-tab-${index}`,
            'aria-controls': `paytach-tabpanel-${index}`,
        };
    }

    handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        this.setState({
            tabSelectedIndex: newValue
        })
    };

    render() {
        return (
            <ThemeProvider theme={this.theme}>
                <div>
                    <AppBar position="static" className='app-bar'>
                        <div className='logo'></div>
                        <Tabs
                            className='app-tabs'
                            value={this.state.tabSelectedIndex}
                            onChange={this.handleChange}
                            aria-label="paytack tabs"
                            indicatorColor="secondary"
                            textColor="secondary"
                        >
                            <Tab label="Dashboard" {...this.a11yProps(0)} />
                            <Tab label="Cashback" {...this.a11yProps(1)} />
                            <Tab label="Menu" {...this.a11yProps(2)} />
                            <Tab label="Customers" {...this.a11yProps(3)} />
                            <Tab label="Promotion" {...this.a11yProps(4)} />
                        </Tabs>
                        <div className='header-right'>
                            <Paper variant="outlined" className='notify'>
                                <NotificationsNoneIcon className='alert' />
                            </Paper>
                            <Paper className='user' elevation={0}>
                                <AccountCircleIcon className='alert' />
                            </Paper>
                        </div>
                    </AppBar>
                    <TabPanel value={this.state.tabSelectedIndex} index={0}>
                        <Dashboard />
                    </TabPanel>
                    <TabPanel value={this.state.tabSelectedIndex} index={1}>
                        Cashback
                    </TabPanel>
                    <TabPanel value={this.state.tabSelectedIndex} index={2}>
                        Menu
                    </TabPanel>
                    <TabPanel value={this.state.tabSelectedIndex} index={3}>
                        Customers
                    </TabPanel>
                    <TabPanel value={this.state.tabSelectedIndex} index={4}>
                        Promotion
                    </TabPanel>
                </div>
            </ThemeProvider>
        )
    }
}