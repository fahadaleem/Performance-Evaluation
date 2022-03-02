import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  FormLabel,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";

const WritingForm = () => {
  return (
    <Box my="5">
      <Heading>Writing Skills</Heading>
      {[1, 2, 3, 4, 5].map((item, key) => {
        return (
          <FormControl my="4">
            <FormLabel>
              Q{key + 1}- Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s?
            </FormLabel>
            <RadioGroup>
              <Stack direction="column">
                <Radio value="1">Nice</Radio>
                <Radio value="2">Good</Radio>
                <Radio value="3">Excellent</Radio>
                <Radio value="4">Perfect</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
        );
      })}
    </Box>
  );
};

export { WritingForm };
