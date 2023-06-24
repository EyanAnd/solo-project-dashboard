import React from 'react';
import LogOutButton from '../../Shared/LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Heading, Text } from '@chakra-ui/react'



function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  // initalize use selector to check if form exist and conditionally render the status of the application
  
  const doesFormExist = useSelector(store => store.existanceReducer)
  // init useHistory
  const history = useHistory();

  


  // function to give applicationa a rendering status
  return (
    <div className="container">
      <Heading>Welcome, {user.username}!</Heading>
      {doesFormExist ? <Text>Application Status: Started</Text> : <Text>Application Status Not Started</Text>}
      {doesFormExist ? <Button onClick={() => history.push('/application')} >Continue Application</Button> :
      <Button colorScheme='brand' variant='outline' onClick={() => history.push('/application')}>Start Application</Button>}
      <LogOutButton colorScheme='brand' />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
