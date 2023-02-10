import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Videos = () => {
  return (

    <Stack direction={["column ", "row"]} h={'100vh'}>
        <VStack w={"full"}>
            <video controls controlsList='nodownload' src="" style={{width: "100%"}}></video>
            <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>Sample Video 1</Heading>
          <Text>
            This is a Sample Text. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem distinctio eius ex blanditiis quia? Doloribus totam tenetur ipsa eius aliquid nam nesciunt error, modi quasi quibusdam, similique itaque, possimus eveniet maiores omnis alias quidem illo aliquam obcaecati excepturi odit! Ratione ducimus commodi quisquam, porro cum..
          </Text>
        </VStack>
        </VStack>

       
        <VStack w={["full","xl"]} alignItems={"stretch"} p={"8"} spacing={"8"}  overflowY={"auto"}>
        <Button variant={"ghost" } colorScheme={"purple"}>
        Lecture 1
        </Button>
        </VStack>
    </Stack>


  )
}

export default Videos