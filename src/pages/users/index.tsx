import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

const UserList = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex w="100vw" my="6" maxW={1480} mx="auto" px="8">
        <Sidebar />

        <Box flex="1" p="8" bg="gray.800" borderRadius={8}>
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="blue"
                leftIcon={<Icon fontSize="20" as={RiAddLine} />}
              >
                Criar Novo
              </Button>
            </Link>
            
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="blue" />
                </Th>

                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th width="1"></Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="blue" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Alex Nascimento</Text>
                    <Text fontSize="sm" color="gray.300">
                      alexnascimento@ufrb.edu.br
                    </Text>
                  </Box>
                </Td>

                {isWideVersion && <Td>01 de Julho, 2021</Td>}

                <Td alignItems="flex-end">
                  {isWideVersion && (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon fontSize="16" as={RiPencilLine} />}
                    >
                      Editar
                    </Button>
                  )}
                </Td>
              </Tr>

              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="blue" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Alex Nascimento</Text>
                    <Text fontSize="sm" color="gray.300">
                      alexnascimento@ufrb.edu.br
                    </Text>
                  </Box>
                </Td>

                {isWideVersion && <Td>01 de Julho, 2021</Td>}

                <Td alignItems="flex-end">
                  {isWideVersion && (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon fontSize="16" as={RiPencilLine} />}
                    >
                      Editar
                    </Button>
                  )}
                </Td>
              </Tr>

              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="blue" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Alex Nascimento</Text>
                    <Text fontSize="sm" color="gray.300">
                      alexnascimento@ufrb.edu.br
                    </Text>
                  </Box>
                </Td>

                {isWideVersion && <Td>01 de Julho, 2021</Td>}

                <Td>
                  {isWideVersion && (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon fontSize="16" as={RiPencilLine} />}
                    >
                      Editar
                    </Button>
                  )}
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
};

export default UserList;
