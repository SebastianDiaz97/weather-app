import { Grid, Heading, Skeleton } from "@chakra-ui/react";
import { useState } from "react";
import useHttpData from "../hooks/useHttpData";
import { SearchForm, WeatherData } from "../types";
import CardWeather from "./CardWeather";
import SelectDays from "./SelectDays";
import SkeletonCard from "./SkeletonCard";

type Props = {
  location: SearchForm;
};

function createArray(qty: number) {
  const array = [];
  for (let index = 1; index <= qty; index++) {
    array.push(index);
  }
  return array;
}

const MainContent = ({ location }: Props) => {
  const { data, error, isLoading } = useHttpData<WeatherData>(location);
  const [qtyDays, setCountDays] = useState(4);
  const arrayDays = [1, 2, 3, 4];

  if (isLoading) {
    return (
      <>
        <Heading textAlign={"center"}>
          <Skeleton height={"43px"} width={"90vw"} />
        </Heading>
        <Skeleton height="72px" width="300px" margin="20px" />
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4,1fr)",
          }}
          gap="6"
          mt={10}
        >
          {arrayDays.map((d) => {
            return <SkeletonCard key={d} />;
          })}
        </Grid>
      </>
    );
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
        <Heading textAlign={"center"}>{data.resolvedAddress}</Heading>
        <SelectDays
          countDays={qtyDays}
          setCountDays={setCountDays}
          qtyDays={createArray(data.days.length)}
        />

        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4,1fr)",
          }}
          gap="6"
          mt={10}
        >
          {data.days.slice(0, qtyDays).map((day) => {
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
