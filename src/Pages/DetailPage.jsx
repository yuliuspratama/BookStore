import { Box, Button, Flex, Heading, Image, Skeleton, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { API_URL, PATH } from '../constrats/path'
import { useParams } from 'react-router-dom';
import { booksDelete, booksGetById } from '../fetcher';

function DetailPage() {
  const [books ,setbooks] = useState(null);
  const [isLoading,setLoading] = useState(true)
  const {id} = useParams();
  const toast = useToast();
  console.log(id)

  useEffect(()=> {
    const getBook= async() => {
      try {
        const resp = await booksGetById(id)
        setbooks(resp.book)
        setLoading(false)
      } catch (e){}
    }
    getBook()
  },[id])

  const onDelete = async () => {
    try{
      await booksDelete(id);
      toast({
        title : "Berhasil Terhapus",
        description: "Yahh Hilang",
        status : "success",
        duration : 1000,
        isClosable : true,
      })
    } catch(e){
      toast({
        title : "Gagal Terhapus",
        description: "Coba Lagi",
        status : "error",
        duration : 1000,
        isClosable : true,
      })
    }
  }
  console.log(books)
  return (
    <Box>
      <Flex my="6">
        {isLoading ? (
          <Box>
            <Skeleton />
          </Box>
        ): (
          <>
        <Box w='300px'>
          <Image
              objectFit='cover'
              maxW={{ base: '100%', xl: '200px' }}
              src= {`${API_URL}/${books.image}`}
              alt={books.title}
          ></Image>
        </Box>
        <Box>
          <Heading as='h2' size='lg'>{books.title}</Heading>
          <Text fontSize='xl'>Author : {books.author}</Text>
          <Text fontSize='xl'>Publisher : {books.publisher}</Text>
          <Text fontSize='xl'>Year : {books.year}</Text>
          <Text fontSize='xl'>Pages : {books.pages}</Text>
        </Box>
        <Button colorScheme='red' onClick={onDelete}>Delete</Button>
        <Button as="a" colorScheme='yellow' href={`${PATH.ubah}/${id}`} >Ubah</Button>
        </>)}
      </Flex>
    </Box>
  )
}

export default DetailPage