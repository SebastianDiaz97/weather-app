import { Grid, GridItem } from "@chakra-ui/react";
import InputSearch from "./components/InputSearch";
import { useState } from "react";
import MainContent from "./components/MainContent";


function App() {
  const [location, setLocation] = useState({city: "Santiago"});


  return (
    <>
      <Grid
        w="90vw"
        h="100vh"
        templateRows="100px 1fr"
        templateColumns="1fr"
        gap={4}
        margin={"auto"}
      >
        <GridItem mt={'30px'}>
          <InputSearch setLocation={setLocation}/>
        </GridItem>
        <GridItem >
          <MainContent location={location}/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
