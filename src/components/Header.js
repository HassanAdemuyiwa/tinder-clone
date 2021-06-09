import React from 'react';
import '../styles/Header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';


const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon"  />
            </IconButton>
           <img className="header__logo" src="https://img.pngio.com/this-post-is-a-part-of-tinder-logo-transparent-background-hd-tinder-logo-png-840_771.png" alt="logo"/>

            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>

        </div>
    )
}

export default Header
