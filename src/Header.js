import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home'
import FlagIcon from '@mui/icons-material/Flag'
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import { Avatar } from '@material-ui/core'
import { IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ForumIcon from '@mui/icons-material/Forum'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useStateValue } from './StateProvider'


function Header() {
    const [{ user }, dispatch ] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4bopiCB8aLHxtAmhoZKcUIv0YqjNVOrMMOXzDAEcuKwXDrTpElQbFYnENaTwpxq8IivY&usqp=CAU" alt=""/>
            <div className="header__input">
                <SearchIcon />
                <input type="text" placeholder="Search Peach!!!"/>
            </div>
            </div>
            <div className="header__center">
                <div className="header__option header__option__active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>
                
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src = {user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                <div className="icon">
                    <IconButton >
                        <AddIcon />
                    </IconButton>
                </div>
                <div className="icon">
                    <IconButton >
                        <ForumIcon />
                    </IconButton>
                </div>
                <div className="icon">
                    <IconButton >
                        <NotificationsActiveIcon />
                    </IconButton>
                </div>
                <div className="icon">
                    <IconButton >
                        <ExpandMoreIcon />
                    </IconButton>
                </div>
                
            </div>
        </div>
    )
}

export default Header
