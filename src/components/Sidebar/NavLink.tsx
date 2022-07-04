import { Icon, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { ElementType } from 'react'
import {LinkProps} from '@chakra-ui/react'

interface NavLinkProps extends LinkProps{
  icon: ElementType,
  children: string,
  uri: string
}

export function NavLink({icon, children, uri, ...rest}: NavLinkProps){
  return(
    <NextLink href={`/${uri}`} passHref>
      <Link display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20"/>
        <Text ml="4" fontWeight="medium">{children}</Text> 
      </Link>
    </NextLink>
  )
}