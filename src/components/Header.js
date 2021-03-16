import React,{useState} from 'react';
import clsx from 'clsx';
import {useHistory, NavLink} from 'react-router-dom';
import {useToasts} from 'react-toast-notifications';
import {makeStyles, useTheme} from '@material-ui/core/styles'
import {
    Drawer,
    AppBar,
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
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
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
const drawerWidth= 240;
const useStyles = makeStyles((theme)=>({
    root: {
        display: 'flex',
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
    account:{
        marginLeft: theme.spacing(200),
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
                        <Typography variant="h6" noWrap>
                            Admin Panel
                        </Typography>
                        <AccountCircleIcon className={classes.account}/>
                    </Toolbar>
                </AppBar>
                <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                paper: classes.drawerPaper,
                }}
                >
                    <Typography variant="h6" style={{textAlign: 'center'}} noWrap>
                            Dashboard
                    </Typography>
                <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
                </div>
                <Divider/>
                <List>
                    {[ 'Home','Customers', 'Store', 'Transaction'].map((text, index) => (
                    <ListItem button key={text}>
                    <ListItemIcon>{index === 0 ? <HomeIcon/> : index===1 ? <PeopleIcon /> : index===2 ? <StorefrontIcon/>: <AccountBalanceIcon/>}</ListItemIcon>
                    {/* <ListItemIcon><StorefrontIcon/></ListItemIcon> */}
                    <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
                <List>
                    {['Products', 'Orders', 'Settings'].map((text, index) => (
                        <ListItem button key={text}>
                        <ListItemIcon>{index === 0 ? <LocalOfferIcon /> : index ===1 ? <AssignmentIcon/>: <SettingsIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                </Drawer>
                <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
              facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
              donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
              adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
              Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
              imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
              arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
              donec massa sapien faucibus et molestie ac.
            </Typography>
            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
              facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
              tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
              consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
              vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
              hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
              tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
              nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
              accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
          </main>
          </div>
    )
}
export default Header;
 {/* const logOutButton = ()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        history.push('auth/login')
        addToast('You are successfully logged out...', {
			appearance: 'info',
			autoDismiss: true
		})
    } */}
    
            {/* <header>
                <MDBNavbar style={{ backgroundColor: 'black'}} dark expand="md" scrolling>
                    <MDBNavbarBrand>
                        <strong className='white-text'>Admin Panel</strong>
                    </MDBNavbarBrand>
                    <MDBCollapse navbar>
                        <MDBNavbarNav left>
                            <NavLink to='/dashboard' activeClassName='active' style={{color:'white'}}>
                                Dashboard
                            </NavLink>
                            &nbsp;&nbsp;
							<NavLink to="/category" activeClassName="active" style={{ color: 'white' }}>
								Category
							</NavLink>
							&nbsp;&nbsp;
							<NavLink to="/brand" activeClassName="active" style={{ color: 'white' }}>
								Brand
							</NavLink>
							&nbsp;&nbsp;
							<NavLink to="/product" activeClassName="seleactivected" style={{ color: 'white' }}>
								Product
							</NavLink>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
							<MDBNavItem>
								<strong onClick={logOutButton} style={{ color: 'white', cursor: 'pointer' }}>
									Logout
								</strong>
							</MDBNavItem>
						</MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </header> */}