import React from 'react';
import LoginForm from './LoginForm';
import { useHistory } from 'react-router-dom';
import { Button, Container, Box, Flex, Image } from '@chakra-ui/react';

function LoginPage() {
  const history = useHistory();

  return (
    <Box className='login-page' w={'100%'} gap={'8rem'}>
      <Flex justifyContent={'center'} color={'brand.200'} height={'200'}>
      <Image src='/images/est2023.png' />
      </Flex>
  
      <LoginForm />
     
    </Box>
  );
}

export default LoginPage;

