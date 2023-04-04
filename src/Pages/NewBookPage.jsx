import { Button, FormControl, FormLabel, Input, VStack, useToast } from '@chakra-ui/react';
import React from 'react'
import { booksPost } from '../fetcher';

function NewBookPage() {
  const toast = useToast();
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target)
    console.log(event.target.title.value)
    await booksPost(formData)
    toast({
      title : "Buku bertambah",
      description: "Buku berhasil di tambahakan",
      status : "success",
      duration : 1000,
      isClosable : true,
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <VStack>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input name="title" required />
          </FormControl>
          <FormControl>
            <FormLabel>Author</FormLabel>
            <Input name="author" required />
          </FormControl>
          <FormControl>
            <FormLabel>Publisher</FormLabel>
            <Input name="publisher" required />
          </FormControl>
          <FormControl>
            <FormLabel>year</FormLabel>
            <Input name="year" type="number" required />
          </FormControl>
          <FormControl>
            <FormLabel>Pages</FormLabel>
            <Input name="pages" type="number" required />
          </FormControl>
          <FormControl>
            <FormLabel>Image</FormLabel>
            <Input name="image" type="file" accept="image" required />
          </FormControl>
          <Button type="submit">Create</Button>
        </VStack>
      </form>
    </div>
  )
}

export default NewBookPage