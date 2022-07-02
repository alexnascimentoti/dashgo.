import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import NextLink from 'next/link'

export function Sidebar(){
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small" >GERAL</Text>
            <Stack spacing="4" mt="8" align="stretch">
              <NextLink href={'/dashboard'} passHref>
                <Link display="flex" alignItems="center">
                  <Icon as={RiDashboardLine} fontSize="20"/>
                  <Text ml="4" fontWeight="medium">Dashboard</Text> 
                </Link>
              </NextLink>
              
              <NextLink href={'/users'} passHref>
                <Link display="flex" alignItems="center">
                  <Icon as={RiContactsLine} fontSize="20"/>
                  <Text ml="4" fontWeight="medium">Usuários</Text> 
                </Link> 
              </NextLink>
              
            </Stack>
        </Box>

        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small" >AUTOMAÇÃO</Text>
            <Stack spacing="4" mt="8" align="stretch">
              
              <NextLink href={'/'} passHref>
                <Link display="flex" alignItems="center">
                  <Icon as={RiInputMethodLine} fontSize="20"/>
                  <Text ml="4" fontWeight="medium">Formulários</Text> 
                </Link>
              </NextLink>
              
              <NextLink href={'/'} passHref>
                <Link display="flex" alignItems="center">
                  <Icon as={RiGitMergeLine} fontSize="20"/>
                  <Text ml="4" fontWeight="medium">Automação</Text> 
                </Link>
              </NextLink>
               
            </Stack>
        </Box>
      </Stack>
    </Box>
  )
}