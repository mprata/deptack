import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import { withRouter, RouteComponentProps } from "react-router";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Dashboard from '../dashboard/dashboard';
import { Cashback } from '../cashback/cashback';
import CashbackOffer from '../cashback/cashback-offer';
import Menu from '../menu/menu';
import Customers from '../customers/customers';
import Promotion from '../promotion/promotion';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddMenuItem from '../menu/addMenuItem'
import './tab-container.css';

export interface TabContainerProps {
    children?: any;
}

export interface TabContainerState {
    tabSelectedIndex: number;
}

class TabContainer extends React.Component<TabContainerProps & RouteComponentProps<{}>, TabContainerState> {

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

    handleCallToRouter = (event: any, value: any) => {
        this.props.history.push(value);
    }

    render() {
        let currentPath = this.props.history.location.pathname.split('-')[0];
        return (
            <ThemeProvider theme={this.theme}>
                <div className='tab-container'>
                    <AppBar position="static" className='app-bar'>
                        <div className='logo'></div>
                        <Tabs
                            className='app-tabs'
                            aria-label="paytack tabs"
                            indicatorColor="secondary"
                            textColor="secondary"
                            value={currentPath}
                            onChange={this.handleCallToRouter}
                        >
                            <Tab label="Dashboard" value='/home/dashboard'/>
                            <Tab label="Cashback" value='/home/cashback'/>
                            <Tab label="Menu" value='/home/menu'/>
                            <Tab label="Customers" value='/home/customers'/>
                            <Tab label="Promotion" value='/home/promotion'/>
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
                    <Switch>
                        <Route exact path='/'>
                            <Redirect to='/home/dashboard' />
                        </Route>
                        <Route path='/home/dashboard' component={Dashboard} />
                        <Route path='/home/cashback' component={Cashback} />
                        <Route path='/home/menu' component={Menu} />
                        <Route path='/home/customers' component={Customers} />
                        <Route path='/home/promotion' component={Promotion} />
                        <Route path='/home/cashback-offer' component={CashbackOffer} />
                        <Route path='/home/menu-additem' component={AddMenuItem} />
                    </Switch>
                    <div className='footer'>
                        <div className='footer-text'>
                            <span className='footer-text1'>© 2020 &nbsp;</span>
                            <span className='footer-text2'>Paytack.&nbsp;</span>
                            <span className='footer-text1'>All Rights Reserved</span>
                        </div>
                        <div className='footer-text-right'>
                            <span className='footer-right'>TERMS OF USE</span>
                            <span className='footer-right'>PRIVACY POLICY</span>
                            <span className='footer-right'>REPORT</span>
                            <span className='footer-right'>ABOUT</span>
                            <span className='footer-right'>BLOG</span>
                            <span className='footer-right'>CONTACT</span>
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        )
    }
}

export default withRouter(TabContainer);