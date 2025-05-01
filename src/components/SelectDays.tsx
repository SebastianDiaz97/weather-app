import { Box, FormLabel, Select } from "@chakra-ui/react";

type Props = {
  countDays: number;
  setCountDays: (value: number) => void;
  qtyDays: number[];
};



function SelectDays({ countDays, setCountDays, qtyDays }: Props) {
  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = Number(event.target.value);
    setCountDays(value);
  }
  return (
    <Box width="300px" margin="20px">
      <FormLabel htmlFor="daysSelect">Selecciona los días</FormLabel>
      <Select id="daysSelect" onChange={handleChange} defaultValue={countDays}>
        {qtyDays.map((option, i) => {
          return (
            <option key={i} value={option}>
              {option}
            </option>
          );
        })}
      </Select>
    </Box>
  );
}

export default SelectDays;
