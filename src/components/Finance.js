import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Paper,Divider,CardHeader, CardContent, Typography, Breadcrumbs, Link} from '@material-ui/core'
import {LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line} from 'recharts'
import TimelineIcon from '@material-ui/icons/Timeline';

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

  const data = [
    {
      "name": "JAN",
      "New Customer": 31,
      "Up/Cross-Selling": 11,
    //   "amt": 2400
    },
    {
      "name": "FEB",
      "New Customer": 40,
      "Up/Cross-Selling": 32,
    //   "amt": 2210
    },
    {
      "name": "MAR",
      "New Customer": 28,
      "Up/Cross-Selling": 45,
      //"amt": 2290
    },
    {
      "name": "APR",
      "New Customer": 51,
      "Up/Cross-Selling": 32,
      //"amt": 2000
    },
    {
      "name": "MAY",
      "New Customer": 42,
      "Up/Cross-Selling": 34,
    //   "amt": 2181
    },
    {
      "name": "JUN",
      "New Customer": 109,
      "Up/Cross-Selling": 52,
    //   "amt": 2500
    },
    {
      "name": "JUL",
      "New Customer": 100,
      "Up/Cross-Selling": 41,
    //   "amt": 2100
    },
    {
        "name": "AUG",
        "New Customer": 120,
        "Up/Cross-Selling": 80,
        // "amt": 2100
    },
    {
        "name": "SEP",
        "New Customer": 80,
        "Up/Cross-Selling": 96,
        // "amt": 2100
    },
    {
        "name": "OCT",
        "New Customer": 42,
        "Up/Cross-Selling": 140,
        // "amt": 2100
    },
    {
        "name": "NOV",
        "New Customer": 90,
        "Up/Cross-Selling": 30,
        // "amt": 2100
    },
    {
        "name": "DEC",
        "New Customer": 140,
        "Up/Cross-Selling": 100,
        // "amt": 2100
    }
  ]
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
                        <div style={{marginLeft:10, marginTop:10, marginRight:10}}>
                            <Typography variant='span'>SALES</Typography>
                            <Typography variant='h5'>$510,000.00 <TimelineIcon style={{width: 50}}/> </Typography>
                            <Typography variant='span'> vs $252,996.00 last year</Typography>
                        </div>
                    </Paper>
                    {/* <Paper>
                        <div>                                                                                              
                            <TimelineIcon style={{width: 50}}/>
                        </div>
                    </Paper> */}
                    <Divider orientation="vertical" flexItem />
                    <Paper className={classes.paper}>
                    <div style={{marginLeft:10, marginTop:10, marginRight:10}}>
                            <Typography variant='span'>PROFIT</Typography>
                            <Typography variant='h5'>$510,000.00 <TimelineIcon style={{width: 50}}/></Typography>  
                            <Typography variant='span'> vs $252,996.00 last year</Typography>
                    </div>
                    </Paper>
                    <Divider orientation="vertical" flexItem />
                    <Paper className={classes.paper}>
                    <div style={{marginLeft:10, marginTop:10, marginRight:10}}>
                            <Typography variant='span'>COST</Typography>
                            <Typography variant='h5'>$510,000.00 <TimelineIcon style={{width: 50}}/> </Typography>
                            <Typography variant='span'> vs $252,996.00 last year</Typography>
                    </div>
                    </Paper>
                </div>
                <br/>
                <Paper className={classes.paper}>
                    <CardHeader 
                        title={
                            <Typography variant='span'>Sales Revenue</Typography>
                        }
                    />
                    <CardContent>
                    <LineChart width={730} height={250} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="1 1" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="New Customer" stroke="blue" />
                        <Line type="monotone" dataKey="Up/Cross-Selling" stroke="purple" />
                    </LineChart>
                    </CardContent>
                </Paper>
                </div>
        </div>

    )
}