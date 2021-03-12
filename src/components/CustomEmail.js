import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles({
   link: {
       textDecoration: 'underline',
   },
   icon: {
    //    marginTop: '10px',
       width: '0.6em',
       alignContent: 'center',
       alignItems: 'center',
       alignSelf: 'center',
    //    paddingTop: 5,
       paddingLeft: 10,
   },
});

const CustomEmailField = ({ record = {}, source }) => {
   const classes = useStyles();
   return (
       <a href={"mailto:" + record[source]} className={classes.link}>
           {record[source]}
           <MailOutlineIcon className={classes.icon} />
       </a>
   );
}

export default CustomEmailField;