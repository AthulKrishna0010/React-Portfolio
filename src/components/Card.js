import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      borderRadius="lg"
      boxShadow="md"
      overflow="hidden"
      bg="white"
      spacing={4}
      align="start"
      p={4}
    >
      <Image src={imageSrc} alt={title} borderRadius="md" w="full" h="200px" objectFit="cover" />
      <VStack align="start" spacing={2} w="full">
        <Heading size="md">{title}</Heading>
        <Text color="gray.600">{description}</Text>
        <HStack justify="space-between" w="full" cursor="pointer" color="blue.500">
          <Text fontWeight="bold">Learn More</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
