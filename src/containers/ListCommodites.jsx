import React from "react";
import { Box, Container } from "@mui/material";
import CardComodites from "../components/CardCommodities";

const ListComodities = ({ comodity:commodityDataOn }) => {
 

  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "1em",
            marginTop: "2em",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {commodityDataOn.map((comodity) => {
            return <CardComodites key={comodity.id} nama={comodity.name} />;
          })}
        </Box>
      </Container>
    </>
  );
};

export default ListComodities
