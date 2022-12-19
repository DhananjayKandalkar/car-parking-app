import React from "react";
import moment from "moment";

import { Button, Text, Heading, Box, Stack } from "@chakra-ui/react";

type Props = {
  id?: string;
  isAllocated?: boolean;
  parkedSlot?: string | null;
  arrivalDate?: string | null;
  registerNumber?: string | null;
};

const DeallocationDetails: React.FC<Props> = ({
  id,
  registerNumber,
  arrivalDate,
}) => {
  let spentMinute: number = 0;
  let spentHour: number = 0;
  let charges: number = 10;

  const calculateCharges = () => {
    if (spentHour > 2) {
      charges += spentMinute * 10;
    }
    return charges;
  };

  return (
    <Box >
      <Stack spacing="2rem" m="2rem auto" w='50%' >
        <Text fontWeight="bold">Parking Slot</Text>
        <Text>{`Parked At: ${id}`}</Text>
        <Text fontWeight="bold">Vehicle Details</Text>
        <Text>{`Registration Number: ${registerNumber}`}</Text>
        <Text>{`Arrived At: ${moment(arrivalDate).format("lll")}`}</Text>
        <Text fontWeight="bold">Time & Charges</Text>
        <Text>{`Total Time:  ${spentMinute} Minutes`}</Text>
        <Text>{`Total Charges: $ ${calculateCharges()}`}</Text>
      </Stack>
    </Box>
  );
};


export default DeallocationDetails;