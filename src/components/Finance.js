import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Paper, Typography, Breadcrumbs, Link} from '@material-ui/core'
const useStyles = makeStyles((theme)=>({
    root:{
      display: 'grid',
    },
    container:{
        display: 'flex',
        paper:{
            elevation: 15,
            marginTop: 10,
            paddingLeft: 10,
            width: 350,
    
        }
    }
    
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
                <div style={{textAlign: 'left', marginTop: 100,}}>
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
                <div className={classes.container}>
                    <Paper className={classes.paper}>
                        <div>
                            <Typography variant='span'>SALES</Typography>
                            <Typography variant='h5'>$510,000.00</Typography>
                            <Typography variant='span'> vs $252,996.00 last year</Typography>
                        </div>
                        {/* <div>
                            <Typography style={{position: 'relative'}}>PROFIT</Typography>
                            <Typography>$510,000.00</Typography>
                        </div> */}
                    </Paper>
                </div>
                </div>
        </div>

    )
}