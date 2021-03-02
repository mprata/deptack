import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { Switch, Route } from 'react-router-dom';
import TabContainer from './components/tabs/tab-container';
import Login from './components/login/login';
import authenticate from './authenticate';
import Signup from './components/signup/Signup';
import BankDetails from './components/signup/bankDetailPage';
import EnterPin from './components/signup/enterPinPage';
import ForgotPassword from './components/signup/enterMobileNumberPage';
import ResetPin from './components/signup/resetPinPage';
import './App.css';

function App() {
  const { token, setAuthToken } = authenticate();
  return (
    <Provider store={store}>
      
        <Switch>
          <Route exact path='/' render={() => <Login setToken={setAuthToken} />} />
          <Route path='/login' render={() => <Login setToken={setAuthToken} />} />
          <Route path='/signup' component={Signup} />
          <Route path='/bankdetails' component={BankDetails} />
          <Route path='/enterpin' component={EnterPin} />
          <Route path='/forgotpassword' component={ForgotPassword} />
          <Route path='/resetpin' component={ResetPin} />
          <Route path='/home' component={TabContainer} />
        </Switch>

    </Provider>
  )
  // if (!token) {
  //   return (
  //     <Provider store={store}>
  //       <div className="App">
  //         <Switch>
  //           <Route exact path='/' render={() => <Login setToken={setAuthToken} />} />
  //           <Route path='/login' render={() => <Login setToken={setAuthToken} />} />
  //           <Route path='/signup' component={Signup} />
  //           <Route path='/bankdetails' component={BankDetails} />
  //           <Route path='/enterpin' component={EnterPin} />
  //           <Route path='/forgotpassword' component={ForgotPassword} />
  //           <Route path='/resetpin' component={ResetPin} />

  //         </Switch>
  //       </div>

  //     </Provider>
  //   )
  // }
  // return (
  //   <Provider store={store}>
  //     <div className="App">
  //       <TabContainer />
  //     </div>
  //   </Provider>
  // );
}

export default App;
