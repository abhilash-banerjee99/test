import React,{useState} from 'react';
import clsx from 'clsx';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
// import {useToasts} from 'react-toast-notifications';
import {makeStyles, useTheme} from '@material-ui/core/styles'
import {
    Drawer,
    AppBar,
    Avatar,
    Toolbar,
    List,
    Typography,
    Divider,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText,
    CssBaseline
} from '@material-ui/core';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SettingsIcon from '@material-ui/icons/Settings';

import DataTable from '../components/Users'
import FinanceData from '../components/Finance'

import Abhi from '../assets/abhi.jpg';
import NotificationsIcon from '@material-ui/icons/Notifications';

const drawerWidth= 180;
const useStyles = makeStyles((theme)=>({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },
    appBar:{
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift:{
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
    },
    admin:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginLeft: '80%',
      
      avatar:{
        display: 'flex',
        justifyContent: 'center',
        '&>*':{
          margin: theme.spacing(1),
        },
        large:{
          width: theme.spacing(7),
          height: theme.spacing(7)
        }
      },
    },
    menuButton: {
        marginRight: theme.spacing(2),
      },
      hide: {
        display: 'none',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      link: {
        textDecoration: 'none',
        color: theme.palette.text.primary
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}))

const Header = () => {
    // const history = useHistory()
    // const addToast = useToasts()
    const classes = useStyles();

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
        const handleDrawerOpen = () => {
          setOpen(true);
        };
        const handleDrawerClose = () => {
          setOpen(false);
        };
        return(
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <div className={classes.admin}>
                          <NotificationsIcon style={{width: 50}}/>
                          <Avatar className={classes.avatar} alt="Admin" src={Abhi}/>
                        </div>
                        {/* <Typography variant="h6" noWrap>
                            Admin Panel
                        </Typography> */}
                        {/* <AccountCircleIcon className={classes.account}/> */}
                    </Toolbar>
                </AppBar>
                <Router>
                <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                paper: classes.drawerPaper,
                }}
                >
                <div style={{display: 'flex', justifyContent: 'center', size: '50px'}}>
                    <Avatar style={{textAlign: 'center'}} alt="Admin" src={Abhi}/>
                </div>
                <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
                </div>
                <Divider/>
                <List>
                  {/* <Typography style={{family: 'Gerogia', size: '30px', textAlign: 'left'}}>
                        GENERAL
                  </Typography> */}
                  <Link to="/" className={classes.link}>
                    <ListItem button>
                    <ListItemIcon>
                      <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Home"}/>
                    </ListItem>
                  </Link>
                  <Link to="/transaction" className={classes.link}>
                    <ListItem button>
                    <ListItemIcon>
                      <AccountBalanceIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Finance"}/>
                    </ListItem>
                  </Link>
                  {/* <Typography style={{textSize: '25px', textAlign: 'left'}}>
                    MANAGEMENT
                  </Typography> */}
                  <Link to="/customer" className={classes.link}>
                    <ListItem button>
                    <ListItemIcon>
                      <PeopleIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Customer"}/>
                    </ListItem>
                  </Link>
                  <Link to="/store" className={classes.link}>
                    <ListItem button>
                    <ListItemIcon>
                      <StorefrontIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Store"}/>
                    </ListItem>
                  </Link>
                  
                  <Link to="/products" className={classes.link}>
                    <ListItem button>
                    <ListItemIcon>
                      <LocalOfferIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Products"}/>
                    </ListItem>
                  </Link>
                  <Link to="/orders" className={classes.link}>
                    <ListItem button>
                    <ListItemIcon>
                      <AssignmentIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Orders"}/>
                    </ListItem>
                  </Link>

                    {/* {[ 'Home','Customers', 'Store', 'Transaction'].map((text, index) => (
                    <Link to="/" className={classes.link}>
                      <ListItem button key={text}>
                        <ListItemIcon>
                          {index === 0 ? <HomeIcon/> 
                          : index===1 ? <PeopleIcon/>
                          : index===2 ? <StorefrontIcon/> 
                          : <AccountBalanceIcon/>}
                        </ListItemIcon>
                      <ListItemText primary={text} />
                      </ListItem>
                    </Link>
                    ))} */}
                </List>
                {/* <List>
                    {['Products', 'Orders', 'Settings'].map((text, index) => (
                      <Link to="/" className={classes.link}>
                        <ListItem button key={text}>
                          <ListItemIcon>
                            {index === 0 ? <LocalOfferIcon /> 
                            : index ===1 ? <AssignmentIcon/>
                            : <SettingsIcon />}
                          </ListItemIcon>
                          <ListItemText primary={text} />
                        </ListItem>
                      </Link>
                    ))}
                </List> */}
                </Drawer>
                  <Switch>
                    <Route exact path="/customer">
                      <DataTable/>
                    </Route>
                    <Route exact path="/transaction">
                      <FinanceData/>
                    </Route>
                  </Switch>
                </Router>
              </div>
    );
}
export default Header;