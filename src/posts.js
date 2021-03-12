import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import CustomEmailField from '../src/components/CustomEmail';

export const UserList = props => (
   <List {...props}>
       <Datagrid rowClick="edit">
           <TextField source="id" />
           <TextField source="name" />
           <TextField source="username" />
           <CustomEmailField source="email" />
           {/* <EmailField source="email" /> */}
           <TextField source="address.street" />
           <TextField source="phone" />
           <TextField source="website" />
           <TextField source="company.name" />
       </Datagrid>
   </List>
);