import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { history } from './history';
import HomeComponent from './components/Home';
import FormComponent from './components/Form';
import AdminComponent from './components/Admin';
import GiftsComponent from './components/Gifts';
import WeddingPlannerComponent from './components/WeddingPlanner';
import WeddingDayComponent from './components/WeddingDay';
import MingelComponent from './components/Mingel';
import NavbarComponent from './components/Navbar';
import ContactComponent from './components/Contact';

const theme = {
    overrides: {
        MuiFormControlLabel: {
            label: {
                color: 'white',
                '&.Mui-focused': {
                    color: 'white'
                }
            },
        },
        MuiFormLabel: {
            root: {
                color: 'white',
                '&.Mui-focused': {
                    color: 'white'
                }
            },
        },
        MuiInput: {
            underline: {
                borderBottomColor: '#616bdd',
                '&:after': {
                    borderBottomColor: '#616bdd',
                    '&:hover' : {
                        borderBottomColor: '#616bdd',
                    },
                },
                '&:before': {
                    borderBottomColor: '#616bdd',
                },
                '&:hover' : {
                    borderBottomColor: '#616bdd',
                    '&:before': {
                        borderBottomColor: '#616bdd !important',
                    },
                },
            },
        },
        MuiInputBase: {
            root: {
                color: 'white',
            },
        },
        MuiInputLabel: {
            root: {
                color: 'white',
            },
        },
        MuiRadio: {
            root: {
                color: 'white',
            },
            colorSecondary: {
                '&$checked': {
                    color: 'white',
                },
            },
        },
    },
};

const App = () => {
    const muiTheme = createMuiTheme(theme);
      return (
          <MuiThemeProvider theme={muiTheme}>
            <Router history={history}>
                <div className="layer"></div>
                <NavbarComponent />
                <Switch>
                    <Route exact path="/" component={HomeComponent} />
                    <Route path="/form" component={FormComponent} />
                    <Route path="/admin" component={AdminComponent} />
                    <Route path="/onskelista" component={GiftsComponent} />
                    <Route path="/planering" component={WeddingPlannerComponent} />
                    <Route path="/mingel" component={MingelComponent} />
                    <Route path="/brollops-dagen" component={WeddingDayComponent} />
                    <Route path="/kontakt" component={ContactComponent} />
                    <Redirect from="*" to="/" />
                </Switch>
            </Router>
          </MuiThemeProvider>
      );
};

export default App;
