import React, { useEffect, useState } from 'react'
import InfoCard from '../components/InfoCard'
import { getAllBooks } from '../fetcher'
import { Center, SimpleGrid } from '@chakra-ui/react';

function HomePage() {
  const [books, setBooks] = useState(null);
  console.log(books)
  useEffect(() => {
    const fetchBooks = async () => {
      const {books} = await getAllBooks();
      setBooks(books)
    };
    fetchBooks();
  },[])


  return (
    <div>
      <SimpleGrid column={2} spacing={2} justifyContent={'normal'}>
      {books?.map((book,idx) => (
      <InfoCard key={idx} {...book}/> 
      ))}
      </SimpleGrid>
    </div>
  )
}

export default HomePage