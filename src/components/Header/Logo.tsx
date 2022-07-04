import { Text } from '@chakra-ui/react'
import NextLink from 'next/link'

export function Logo(){
  return(
    <NextLink href={'/dashboard'} passHref>
      <Text
        as="a"
        fontSize={['2xl','3xl']}
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        dashgo
        <Text as="span" color="blue.500" ml="1">.</Text>
      </Text>
    </NextLink>
  )
}