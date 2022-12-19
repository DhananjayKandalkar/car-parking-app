import React, { useState } from "react";
import { Box, Heading, Text, Input, Button, VStack } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { parkingAllocationReducer } from "../../redux/parkingSlice";



const AllocateSpace = () => {
  const [registrationNumber, setRegistrationNumber] = useState<string>("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNewAssignSpace = () => {
    dispatch(
      parkingAllocationReducer({
        date: Date(),
        registerNumber: registrationNumber,
      })
    );
    navigate(-1);
  };

  return (
    <Box>
      <VStack w="50%" m="2rem auto" spacing="3rem">
        <Heading as="h3" size="lg" textAlign="center">
          Allocate Parking Space
        </Heading>
        <Text>{`Current Time: ${moment().format("LT")}`}</Text>
        <Input
          placeholder="Enter Registration Number"
          value={registrationNumber} 
          onChange={(e) => setRegistrationNumber(e.target.value)}
        />
        <Button
          onClick={handleNewAssignSpace}
          isDisabled={registrationNumber.length > 0 ? false : true}
          colorScheme="teal"
          size="lg"
        >
          Assign Space
        </Button>
      </VStack>
    </Box>
  );
};

export default AllocateSpace;
