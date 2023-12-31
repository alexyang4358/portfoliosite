import NextLink from "next/link";
import ButtonLink from "next/link";
import { motion } from "framer-motion";

import {
  Container,
  Box,
  Heading,
  Image,
  Button,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
const Page = () => {
  return (
    <Container mt={20}>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Box
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          mb={6}
          h="2px"
          borderRadius="20px"
          align="center"
          backgroundColor={useColorModeValue("teal.500", "teal.200")}
        ></Box>
      </motion.div>

      <Box display={{ sm: "flex" }}>
        <Box flexGrow={1}>
          <Heading
            color={useColorModeValue("teal", "#ff63c3")}
            as="h2"
            variant="page-title"
          >
            Alex Yang
          </Heading>
          <p>Designer // Developer</p>
          <p>Based in Raleigh, NC</p>
        </Box>
        <Box
          flexShrink={1}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="150px"
              display="inline-block"
              borderRadius="full"
              src="/images/yang.jpg"
            />
          </motion.div>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          Meet Alex, a dynamic individual with a passion for creativity. As a
          well-rounded professional, Alex wears multiple hats in the design,
          tech and golf world. They have a deep understanding for strong design,
          user-friendly web applications and full-stack frameworks like React
          and Django.
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
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Technical Skills
        </Heading>
        <BioYear>
          Adobe Illustrator, Photoshop, React, Django, JavaScript, Python,
          Figma, HTML, CSS, Git/Github
        </BioYear>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Professional Bio
        </Heading>
        <BioSection>
          <BioYear>2017</BioYear>
          Print Graphic Designer at{" "}
          <Link href="https://n2co.com/" target="_blank">
            N2 Company
          </Link>{" "}
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Web Ad Specialist at{" "}
          <Link href="https://hyportdigital.com/" target="_blank">
            Hyport Digital
          </Link>{" "}
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Startup Partner at{" "}
          <Link href="https://insidegolfnc.com/" target="_blank">
            Inside Golf
          </Link>{" "}
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Full-stack developer at{" "}
          <Link href="https://www.momentumlearn.com/" target="_blank">
            Momentum
          </Link>{" "}
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <BioSection>
          <BioYear>2016</BioYear>
          UNIVERSITY OF NORTH CAROLINA WILMINGTON, Wilmington, NC B.A. in
          Political Science, minor in Digital Arts,
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
