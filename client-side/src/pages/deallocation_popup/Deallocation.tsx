import React from "react";
import DeallocationDetails from "../../components/DeallocationDetails";
import { Box, Heading, HStack, Button } from "@chakra-ui/react";
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { parkingDeallocationReducer } from "../../redux/parkingSlice";



const Deallocation = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const parkedSlot = useSelector(
        (state: any) => state.parking.parkingSpace
    )

    console.log(parkedSlot, " parkedSlot[]")

    const charges = 10;

    const handleDeallocation = async() => {
        let response = await fetch("https://httpstat.us/200", {
            method: "POST",
            body: JSON.stringify({
                "car-registration": parkedSlot.registerNumber,
                charge: charges,
            }),
        });

        if (response.ok) {
            dispatch(parkingDeallocationReducer({ id: parkedSlot.id }));
            alert("Payment Successful")
        } else {
            alert("Payment Not done")
        }
        navigate(-1);
    }

    
  return (
    <Box>
      <Heading as="h3" size="lg" textAlign="center">
        Car Allocation Details
      </Heading>
      <DeallocationDetails />
      <HStack>
        <Button onClick={handleDeallocation}>DeAllocate Space</Button>
      </HStack>
    </Box>
  );
};


export default Deallocation;