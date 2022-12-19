import { Box, Text } from "@chakra-ui/react";
import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

// { parkedSlot: item }

interface Props {
  id: string | number;
  isAllocated: boolean;
  parkedSlot: string;
  testId: string;
  registerNumber: String;
  arrivalDate: string;
}

const ParkingSlot: React.FC<Props> = ({
  id,
  isAllocated,
  parkedSlot,
  testId,
  registerNumber,
  arrivalDate,
}) => {
    
  const navigate = useNavigate();

  const handleSingleSlot = () => {
    if (isAllocated) {
      navigate(`/deallocation`);
    } else alert("No car parked");
  };

  return (
    <Box border="1px solid grey" cursor="pointer" onClick={handleSingleSlot}>
      <Text>{id}</Text>
      {isAllocated ? (
        <Box>
          <Text>{registerNumber}</Text>
          <Text>{moment(arrivalDate).format("LT")}</Text>
        </Box>
      ) : (
        <Text>No Car Parked</Text>
      )}
    </Box>
  );
};

export default ParkingSlot;
