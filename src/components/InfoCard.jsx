import * as React from 'react'
import { Card, Image, Stack, CardBody, Heading, CardFooter, Button, Text } from "@chakra-ui/react";
import { API_URL, PATH } from '../constrats/path';


function InfoCard (props){
 const {id,title,author,publisher, year,pages,image} = props;
 console.log(title)
    return(
        <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', xl: '100px' }}
    src= {`${API_URL}/${image}`}
    alt={title}
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{title}<Text></Text>
</Heading>
      <Text >Penulis : {author}</Text>
      <Text>Penerbit : {publisher}</Text>
    </CardBody>

    <CardFooter>
      <Button as="a" variant='solid' colorScheme='blue' href={`${PATH.book}/${id}`} >
       Lihat Selengkapnya
      </Button>
    </CardFooter>
  </Stack>
</Card>
    )
}

export default InfoCard;