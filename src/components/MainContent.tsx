import { Grid, Heading } from "@chakra-ui/react";
import { SearchForm, WeatherData } from "../types";
import CardWeather from "./CardWeather";
import useHttpData from "../hooks/useHttpData";

type Props = {
  location: SearchForm;
};

const MainContent = ({ location }: Props) => {
  const { data, error, isLoading } = useHttpData<WeatherData>(location);

  if (isLoading) {
    return <Heading textAlign={"center"}>Cargando...</Heading>;
  }

  if (error) {
    return (
      <Heading
        textAlign={"center"}
      >{`Lugar ${location.city} no encontrado`}</Heading>
    );
  }

  if (data) {
    return (
      <>
        <Heading textAlign={"center"}>{data?.resolvedAddress}</Heading>
        <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" , lg:'repeat(4,1fr)'}} gap="6" mt={10}>
          {data?.days.slice(0, 6
          ).map((day) => {
            return (
              <CardWeather
                key={day.datetime}
                date={day.datetime}
                tempmax={day.tempmax}
                tempmin={day.tempmin}
                conditions={day.conditions}
              ></CardWeather>
            );
          })}
        </Grid>
      </>
    );
  }
};

export default MainContent;
