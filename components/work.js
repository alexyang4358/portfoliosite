import NextLink from "next/link";
import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Box,
  Link,
  Image,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const Title = ({ children }) => (
  <Box mt="20">
    <Link as={NextLink} href="/works">
      Works
    </Link>
    <span>
      {" "}
      <ChevronRightIcon />{" "}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
);

export const WorkImage = ({ src, alt }) => (
  <Image
    borderRadius="lg"
    h="25%"
    w="50%"
    src={src}
    alt={alt}
    mb={4}
    mr={2}
    mt={4}
  />
);

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
);
