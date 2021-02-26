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
                <div>
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
                            <Tab label="Dashboard" value='/dashboard'/>
                            <Tab label="Cashback" value='/cashback'/>
                            <Tab label="Menu" value='/menu'/>
                            <Tab label="Customers" value='/customers'/>
                            <Tab label="Promotion" value='/promotion'/>
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
                            <Redirect to='/dashboard' />
                        </Route>
                        <Route path='/dashboard' component={Dashboard} />
                        <Route path='/cashback' component={Cashback} />
                        <Route path='/menu' component={Menu} />
                        <Route path='/customers' component={Customers} />
                        <Route path='/promotion' component={Promotion} />
                        <Route path='/cashback-offer' component={CashbackOffer} />
                        <Route path='/menu-additem' component={AddMenuItem} />
                    </Switch>
                </div>
            </ThemeProvider>
        )
    }
}

export default withRouter(TabContainer);