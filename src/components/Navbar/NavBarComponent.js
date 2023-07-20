import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Button, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './style.css';

const useStyles = makeStyles({
    button: {
        fontSize: "24px",
        color: "pink"
    },
    link: {
        fontSize: "24px",
        color: "white",
        textDecoration: "none",
        "&.active": {
            color: "pink",
        }   
    },
});

const NavBarComponent = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    return (
        <>
        <div className="nav-bar--desktop">
            <div>
                <NavLink exact to="/">Start</NavLink>        
                <NavLink exact to="/brollops-dagen">Bröllopsdagen</NavLink>
                <NavLink exact to="/kontakt">Kontakt</NavLink>
                <NavLink exact to="/onskelista">Önskelista</NavLink>
            </div>
            <NavLink exact to="/form">OSA</NavLink>          
        </div>
        <div className="nav-bar--mobile">
            <Button aria-haspopup="true" onClick={handleClick} className={classes.button}>
                Meny
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={classes.menu}
                PaperProps={{
                    style: {
                        marginTop: "32px",
                        marginLeft: "-16px",
                        background: "rgba(0, 0, 0, 0.5)",
                        boxShadow: "none",
                      
                    }
                  }}
            >
                <MenuItem onClick={handleClose}><NavLink className={classes.link} exact to="/">Start</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink className={classes.link} exact to="/brollops-dagen">Bröllopsdagen</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink className={classes.link} exact to="/kontakt">Kontakt</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink className={classes.link} exact to="/onskelista">Önskelista</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink className={classes.link} exact to="/form">OSA</NavLink> </MenuItem>
            </Menu>
        </div>
        </>
    );
};







export default NavBarComponent;