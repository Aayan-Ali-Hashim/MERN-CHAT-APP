import Login from "@/myComponents/Authentication/Login";
import Signup from "@/myComponents/Authentication/Signup";
import {
  Box,
  Container,
  Tabs,
  Text,
} from "@chakra-ui/react";


const HomePage = () => {

  return (
    <Container maxW="xl" centerContent>
      <Box
        display="Flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans" color="black">
          Talk-a-tive
        </Text>
      </Box>
      <Box
        bg="white"
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth="1px"
        display="flex"
        justifyContent="center"
      >
        <Tabs.Root defaultValue="Sign Up" color="black" variant="line">
          <Tabs.List mb="1em">
            <Tabs.Trigger value="Sign Up" width="50%">
             Sign Up
            </Tabs.Trigger>
            <Tabs.Trigger value="Log In" width="50%">
              Log In
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="Sign Up">
            <Signup/>
          </Tabs.Content>
          <Tabs.Content value="Log In">
            <Login />
          </Tabs.Content>
        </Tabs.Root>
      </Box>
    </Container>
  );
};

export default HomePage;
