import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Box, Grid, Heading, Button, HStack } from "@chakra-ui/react";
import ParkingSlot from "../../components/ParkingSlot";
import { useNavigate } from "react-router-dom";



const ParkingLot: React.FC = () => {
  const navigate = useNavigate();
  const parkingSpace = useSelector(
    (state: any) => state.parking.parkingSpace
  );

  const handleSpaceAllocation = () => {
    let count = 0;
    parkingSpace.map((elem: object | any) => {
      if (elem.parkedSlot != 0) {
        count += 1;
      }
    });
    if (count === parkingSpace.length) {
      alert("Parking is full");
    } else {
      navigate(`/allocation`);
    }
  };

  return (
    <Box>
      <Box>
        <Heading as="h2" size="lg" textAlign="center" py="4rem">
          Parking Lot
        </Heading>
      </Box>
      <Grid templateColumns="repeat(6, 1fr)" gap={12} px="2rem">
        {parkingSpace?.map((elem: any) => {
          return <ParkingSlot {...elem} key={elem.id} />;
        })}
      </Grid>
      <HStack justify="center" mt="3rem">
        <Button onClick={handleSpaceAllocation} colorScheme="messenger">
          Allocate Space
        </Button>
      </HStack>
    </Box>
  );
};

export default ParkingLot;
