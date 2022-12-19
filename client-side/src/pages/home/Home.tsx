import React, { useState } from "react";
import { Box, Input, Button, Heading, VStack } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import { parkingSpaceReducer } from "../../redux/parkingSlice";



const Home: React.FC = () => {
  const [inpValue, setInpValue] = useState<string>("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    window.alert("are you sure");
    dispatch(parkingSpaceReducer(inpValue))
    navigate(`/parkinglot`)
  };

  const validateUserInput = (value: string) => {
    const regex = /^(0|[1-9][0-9]*)$/;
    if (regex.test(value) || value===""){
        setInpValue(value)
    } else {
        alert("please input numbers")
    }
  };

  return (
    <Box>
      <VStack w="50%" m="2rem auto" spacing="2rem">
        <Heading as="h3" size="lg">
          Car Parking Lot App
        </Heading>
        <Input
          onChange={(e) => validateUserInput(e.target.value)}
          placeholder="Enter number of parking spaces"
          value={inpValue}
        />
        <Button onClick={handleClick} colorScheme="teal" size="lg">
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default Home;
