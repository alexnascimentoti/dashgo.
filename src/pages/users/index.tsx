import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { RiAddLine, RiPencilLine } from "react-icons/ri"
import { Header } from "../../components/Header"
import { Pagination } from "../../components/Pagination"
import { Sidebar } from "../../components/Sidebar"

const UserList = () => {
  return (
    <Box>
      <Header/>

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar/>

        <Box flex="1" p="8" bg="gray.800" borderRadius={8} >
          <Flex mb="8" justify="space-between" align="center" >
            <Heading size="lg" fontWeight="normal" >Usuários</Heading>
            
            <Button as="a" size="sm" fontSize="sm" colorScheme="blue" leftIcon={<Icon fontSize="20" as={RiAddLine}/>}>Criar Novo</Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="blue"/>
                </Th>

                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th width="1"></Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="blue"/>
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Alex Nascimento</Text>
                    <Text fontSize="sm" color="gray.300">alexnascimento@ufrb.edu.br</Text>
                  </Box>
                </Td>

                <Td>
                  01 de Julho, 2021
                </Td>

                <Td alignItems="flex-end">
                  <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon fontSize="16" as={RiPencilLine}/>}>Editar</Button>
                </Td>
              </Tr>

              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="blue"/>
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Alex Nascimento</Text>
                    <Text fontSize="sm" color="gray.300">alexnascimento@ufrb.edu.br</Text>
                  </Box>
                </Td>

                <Td>
                  01 de Julho, 2021
                </Td>

                <Td alignItems="flex-end">
                  <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon fontSize="16" as={RiPencilLine}/>}>Editar</Button>
                </Td>
              </Tr>

              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="blue"/>
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Alex Nascimento</Text>
                    <Text fontSize="sm" color="gray.300">alexnascimento@ufrb.edu.br</Text>
                  </Box>
                </Td>

                <Td>
                  01 de Julho, 2021
                </Td>

                <Td alignItems="flex-end">
                  <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon fontSize="16" as={RiPencilLine}/>}>Editar</Button>
                </Td>
              </Tr>

            </Tbody>
          </Table>
          <Pagination/>
        </Box> 
      </Flex>
    </Box>
  )
}

export default UserList