import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Breadcrumbs, Link} from '@material-ui/core'
const useStyles = makeStyles((theme)=>({
    root:{
      display: 'grid',
    },
  }))

export default function FinanceData() {
    const classes = useStyles();
    function handleClick(event){
        event.preventDefault();
        console.info('You clicked a breadcrumb.')
    }
    return(
        <div className={classes.root}>
            <div>
                <div>
                    <div><Typography variant="h4"> Finance </Typography></div>
                    <Breadcrumbs aria-label="breadcrumb">
                    <Link 
                    color="textPrimary"
                    href='/dashboard'
                    onClick={handleClick}
                    aria-current="page"
                    > 
                    Dashboard 
                    </Link>
                    <Typography> Finance </Typography>
                    </Breadcrumbs>
                </div>
                <div className={classes.root}>

                </div>
            </div>
        </div>
    )
}