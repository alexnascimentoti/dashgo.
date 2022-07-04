import { Flex, Avatar, Box, Text } from "@chakra-ui/react";

export function Profile(){
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Alex Nascimento</Text>
        <Text color="gray.300" fontSize="small">
          alexnascimentoti@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Alex Nascimento" src="https://github.com/alexnascimento.png"></Avatar>  
    </Flex>
  )

}