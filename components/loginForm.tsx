import { useEffect, useState } from "react";
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
  Avatar,
  FormControl,
  InputRightElement,
  FormLabel,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useStore } from "../store";
import { AlertBox } from "./Alert";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

interface ILogin {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const setAuth = useStore((state) => state.setAuth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILogin>();

  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);
  const [serverError, setServerError] = useState<{
    title: string;
    message: string;
  }>();

  const onSubmit = async (data: ILogin) => {
    const authCredential = new FormData();

    authCredential.append("email", data.email);
    authCredential.append("password", data.password);

    const postData = await axios.post(
      "http://evaluationproject.atwebpages.com/login.php",
      authCredential
    );

    if (postData.data.error === "200") {
      setAuth(postData.data.user);
      return;
    } else if (postData.data.error === "400") {
      setServerError({
        title: "Error",
        message: postData.data.message,
      });
    }
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome Admin</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
              flexDirection="column"
              justifyContent="center"
              padding={8}
              borderRadius={5}
            >
              {serverError?.message && (
                <AlertBox message={serverError?.message} />
              )}
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="email"
                    placeholder="email address"
                    {...register("email", {
                      required: "Email is required",
                    })}
                  />
                </InputGroup>
                {errors.email?.type === "required" && (
                  <FormLabel mt={2} color="Red">
                    Email is required
                  </FormLabel>
                )}
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {errors.password?.type === "required" && (
                  <FormLabel mt={2} color="Red">
                    Password is required
                  </FormLabel>
                )}
              </FormControl>
              <Button
                borderRadius={5}
                type="submit"
                variant="solid"
                bg="brand.primary"
                width="full"
                color="#fff"
                _hover={{
                  backgroundColor: "brand.primary",
                }}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};
