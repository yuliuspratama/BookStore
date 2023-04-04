import * as React from 'react'
import { useState , useEffect} from "react";
import { Card, Image, Stack, CardBody, Heading, CardFooter, Button, Text, layout, Flex, Link, Box,Spacer, IconButton, Container } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {PATH} from '../constrats/path'


function Layout ({children}){
  const [showMenu, setShowMenu] = useState(false);
  const[isLogin,setIsLogin] = useState(false);

  useEffect(()=> {
    const token = window.localStorage.getItem("token");

    if(token){
      setIsLogin(true);
    }else {
      setIsLogin(false)
    }
  },[window.localStorage.getItem("token")])

  return (
        <>
<Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="blue.100"
      color="black"
    >
      <Box as="a" href={PATH.home} fontSize="2xl" fontWeight="bold">
        Jualan Buku
      </Box>
      <Spacer />
      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          icon={showMenu ? <CloseIcon /> : <HamburgerIcon />}
          onClick={() => setShowMenu(!showMenu)}
          variant="ghost"
          size="md"
          aria-label="Menu"
        />
      </Box>
      
      <Box
        display={{
          base: showMenu ? "block" : "none",
          md: "flex",
        }}
        width={{
          base: "full",
          md: "auto",
        }}
        alignItems="center"
        flexGrow={1}
      >
        <Button as="a" variant="ghost" mr={4} href={PATH.home}>
          Home
        </Button>
        {isLogin && (
          <>
        <Button as="a" variant="ghost" mr={4} href={PATH.newBook}>
        Buku Baru</Button>
          </>
        )}
        {
          !isLogin ? (
            <>
            <Button as="a" variant="ghost" mr={4} href={PATH.login}>
            Login</Button>
            <Button as="a" variant="ghost" mr={4} href={PATH.register}>
            Register
          </Button>
            </>
          ) : (
            <Button as="a" colorScheme='red' mr={4} onClick={() =>
            {
              window.localStorage.removeItem("token");
            setIsLogin(false);
          }
            }>
            Logout
          </Button>
          )
        }
      </Box>

    </Flex>
    <Container  maxW="container.xl" color="black" p={2} mt={4}>
    {children}
    </Container>
        
        </>
    )
}

export default Layout