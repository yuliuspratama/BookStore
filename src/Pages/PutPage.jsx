import { Button, FormControl, FormLabel, Input, VStack, useToast } from '@chakra-ui/react';
import React from 'react'
import { booksPut } from '../fetcher';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

function PutPage() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const toast = useToast();
    const {id} = useParams();

    const onSubmit = async (data) => {
        console.log(data);
        // registerPost(data)
        console.log(id);
        try{
    
          const res = await booksPut(id,data);
        //   console.log(res);
          toast({
            title : "Register Berhasil",
            description: "Berhasil Registrasi",
            status : "success",
            duration : 1000,
            isClosable : true,
          })
        //   delay(1500);
          // navigate("/")
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
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input name="title" {...register("title", { required: "title harus terisi" })} />
            </FormControl>
            <FormControl>
              <FormLabel>Author</FormLabel>
              <Input name="author" {...register("author", { required: "author harus terisi" })} />
            </FormControl>
            <FormControl>
              <FormLabel>Publisher</FormLabel>
              <Input name="publisher" {...register("publisher", { required: "publisher harus terisi" })} />
            </FormControl>
            <FormControl>
              <FormLabel>year</FormLabel>
              <Input name="year" type="number" {...register("year", {valueAsNumber: true, required: "year harus terisi" } )} />
            </FormControl>
            <FormControl>
              <FormLabel>Pages</FormLabel>
              <Input name="pages" type="number" {...register("pages", {valueAsNumber: true, required: "pages harus terisi" })} />
            </FormControl>
            <FormControl>
              <FormLabel>Image</FormLabel>
              <Input name="image" type="file" accept="image" {...register("image", { required: "Nama harus terisi" })} />
            </FormControl>
            <Button type="submit" >Change</Button>
          </VStack>
        </form>
      </div>
    )
  }

export default PutPage