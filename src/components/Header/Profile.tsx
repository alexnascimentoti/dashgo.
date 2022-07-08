import { Flex, Avatar, Box, Text } from "@chakra-ui/react";

interface ProfileProps{
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps){
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Alex Nascimento</Text>
          <Text color="gray.300" fontSize="small">
            alexnascimentoti@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Alex Nascimento" src="https://github.com/alexnascimentoti.png"></Avatar>  
    </Flex>
  )

}