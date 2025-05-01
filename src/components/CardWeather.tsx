import { Text, Flex, Icon, Box } from "@chakra-ui/react";
import {
  FaCloudSun,
  FaSun,
  FaCloud,
  FaCloudRain,
  FaCloudSunRain,
} from "react-icons/fa";
type Props = {
  date: string;
  tempmax: number;
  tempmin: number;
  conditions: string;
};

function fahrenheitToCelsius(temp: number) {
  return Math.round(((temp - 32) * 5) / 9);
}
function typeIcon(conditions: string) {
  switch (conditions) {
    case "Partially cloudy":
      return FaCloudSun;
    case "Clear":
      return FaSun;
    case "Overcast":
      return FaCloud;
    case "Rain":
      return FaCloudRain;
    case "Rain, Overcast":
      return FaCloudRain;
    case "Rain, Partially cloudy":
      return FaCloudSunRain;
    default:
      break;
  }
}

function formatDate(date: string) {
  const dateFormat = new Date(date).toUTCString();
  const arrayDate = dateFormat.split(" ");
  return `${arrayDate[0]} ${arrayDate[1]}-${arrayDate[2]}-${arrayDate[3]}`;

}

function CardWeather({ date, tempmax, tempmin, conditions }: Props) {
  
  return (
    <>
      <Box
        p={6}
        borderRadius="2xl"
        boxShadow="md"
        bg={"gray.100"}
        maxW="sm"
        w="100%"
        mx="auto"
        textAlign="center"
      >
        <Text fontSize="xl" color="gray.500">
          {formatDate(date)}
        </Text>

        <Flex align="center" justify="center" mt={4} mb={2}>
          <Icon
            as={typeIcon(conditions)}
            w={8}
            h={8}
            mr={2}
            color="yellow.400"
          />
          <Text fontSize="4xl" fontWeight="bold">
            {fahrenheitToCelsius(tempmin)}° / {fahrenheitToCelsius(tempmax)}°
          </Text>
        </Flex>
        <Text fontSize="2xl" fontWeight="bold">
          {conditions}
        </Text>
      </Box>
    </>
  );
}

export default CardWeather;
