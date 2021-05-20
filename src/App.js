import React from 'react';
import { Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { history } from './history';
import HomeComponent from './components/Home';
import FormComponent from './components/Form';
import AdminComponent from './components/Admin';
import AccommodationComponent from './components/Accommodation';
import GiftsComponent from './components/Gifts';
import DayBeforeComponent from './components/DayBefore';
import WeddingDayComponent from './components/WeddingDay';
import ContactComponent from './components/Contact';
import CovidComponent from './components/Covid';

const theme = {
    overrides: {
        MuiFormLabel: {
            root: {
                color: 'grey',
                '&.Mui-focused': {
                    color: 'grey'
                }
            },
        },
        MuiInput: {
            underline: {
                '&:after': {
                    borderBottomColor: 'grey',
                },
            },
        },
        MuiInputLabel: {
            root: {
                color: 'grey',
            },
        },
        MuiRadio: {
            root: {
                color: 'grey',
            },
            colorSecondary: {
                '&$checked': {
                    color: 'grey',
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
                <div className="nav-bar">
                    <div className="nav-bar--inner">
                        <NavLink exact to="/">Start</NavLink>
                        <NavLink exact to="/covid">Covid</NavLink>
                        <NavLink exact to="/form">Anmälan</NavLink>
                        <NavLink exact to="/boende">Boende</NavLink>
                        <NavLink exact to="/dagen-innan">Dagen innan</NavLink>
                        <NavLink exact to="/brollops-dagen">Bröllopsdagen</NavLink>
                        <NavLink exact to="/kontakt">Kontakt</NavLink>
                        <NavLink exact to="/onskelista">Önskelista</NavLink>
                    </div>
                </div>
              <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route path="/form" component={FormComponent} />
                <Route path="/admin" component={AdminComponent} />
                <Route path="/boende" component={AccommodationComponent} />
                <Route path="/onskelista" component={GiftsComponent} />
                <Route path="/dagen-innan" component={DayBeforeComponent} />
                <Route path="/brollops-dagen" component={WeddingDayComponent} />
                <Route path="/kontakt" component={ContactComponent} />
                <Route path="/covid" component={CovidComponent} />
                <Redirect from="*" to="/" />
              </Switch>
            </Router>
          </MuiThemeProvider>
      );
};

export default App;
