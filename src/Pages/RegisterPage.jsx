import { Button, FormControl, FormErrorMessage, FormLabel, Stack, VStack, useToast } from '@chakra-ui/react'

import React from 'react'
import { useForm } from "react-hook-form";
import { registerPost } from '../fetcher';
import { Navigate, useNavigate } from 'react-router-dom';
import { delay } from 'framer-motion';
import { PATH } from '../constrats/path';


function RegisterPage() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const toast = useToast();
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    // registerPost(data)
    console.log(data.passwordConfirmation);
    try{

      const res = await registerPost(data);

      toast({
        title : "Register Berhasil",
        description: "Berhasil Registrasi",
        status : "success",
        duration : 1000,
        isClosable : true,
      })
      delay(1500);
      navigate(PATH.login)
    } catch(e) {
      toast({
        title : e.message,
        description: "Coba Lagi",
        status : "error",
        duration : 1000,
        isClosable : true,
      })
    }
  }

  


  

  return (
    <>
    <VStack >
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name?.message}>
        <FormLabel>Name</FormLabel>
        <input  type='name' placeholder='Masukkan nama'   {...register("name", { required: "Nama harus terisi" })}/>
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.email?.message}>
        <FormLabel>Email</FormLabel>
        <input type='email' placeholder='Masukkan email' {...register("email", { required: "Email harus terisi" })}/>
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.password?.message}>
        <FormLabel>Password</FormLabel>
        <input type='password' placeholder='Masukkan password' {...register("password", { required: "Password harus terisi" })}/>
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.passwordConfirmation?.message}>
        <FormLabel>Password Confirmation</FormLabel>
        <input type='password' placeholder='Masukkan password lagi' {...register("passwordConfirmation", { required: "Password Confirmation harus terisi" })}/>
        <FormErrorMessage>{errors.passwordConfirmation?.message}</FormErrorMessage>
      </FormControl>
      <Button type='submit'> Submit</Button>
    </form>
    </VStack>
  </>
  )
}

export default RegisterPage