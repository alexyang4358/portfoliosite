import NextLink from "next/link";
import ButtonLink from "next/link";

import {
  Container,
  Box,
  Heading,
  Image,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Page = () => {
  return (
    <Container mt={20}>
      <Box
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3}
        mb={6}
        borderRadius="lg"
        align="center"
      >
        I'm a full-stack developer, graphic designer & aspiring UX consultant.
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Alex Yang
          </Heading>
          <p>Designer || Developer</p>
          <p>Based in Raleigh, NC</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/yang.jpg"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          Meet Alex, a dynamic individual with a passion for creativity and a
          relentless drive for innovation. Aspiring to be a well-rounded
          professional, Alex wears multiple hats in design, tech and golf world.
          With an eye for aesthetics and a deep understanding of user
          experience, they're a seasoned graphic designer who brings ideas to
          life with stunning visuals. But that's not all – Alex also has a knack
          for the intricate world of UX/UI engineering, crafting seamless and
          user-centric digital experiences.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Professional Bio
        </Heading>
        <BioSection>
          <BioYear>2017</BioYear>
          Print Graphic Designer at N2 Company
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Web Ad Specialist at Hyport Digital
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Startup Partner at Inside Golf
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <BioSection>
          <BioYear>2016</BioYear>
          Graduated University of North Carolina Wilmington with a Bachelors in
          Political Science and Minor in Digital Arts
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Certification from Momentum's Full-Stack Software Engineering Program
        </BioSection>
      </Section>
    </Container>
  );
};

export default Page;
