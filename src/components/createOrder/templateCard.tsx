import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import { Stack, ButtonGroup, Button, Box, Image, Text } from "@chakra-ui/react";

const TemplateCard = () => {
  return (
    <Box>
      <Card
        w="260px"
        p={5}
        ml="1px"
        backgroundColor="white"
        borderRadius="10px"
      >
        <CardBody>
          <Image
            src="https://pickbazar-react-admin-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=1920&q=75"
            alt="apples"
            borderRadius="lg"
            boxSize="225px"
          />
          <Stack mt="6" spacing="3">
            <Text color="black.600" fontSize="16px">
              $1.60
            </Text>
            <Text color="gray.400" fontSize="15px" fontWeight="hairline">
              Apples
            </Text>
          </Stack>
        </CardBody>
        <CardFooter
          display="flex"
          alignSelf="center"
          justifyContent="space-between"
          alignContent="center"
        >
          <ButtonGroup spacing="2" mt="15px">
            <Button
              variant="solid"
              fontSize="14px"
              color="gray.400"
              colorScheme="gray"
              w="220px"
            >
              <>
                <MinusIcon mr="110px" />
              </>
              Add
              <>
                {" "}
                <AddIcon ml="20px" color="gray.400" boxSize="12px" />
              </>
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default TemplateCard;
