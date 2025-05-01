import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { SearchForm } from "../types";

type Props = {
  setLocation: (data: SearchForm) => void;
};

const InputSearch = ({ setLocation }: Props) => {
  const { register, handleSubmit, reset } = useForm<SearchForm>();
  const onSubmit = (data: SearchForm) => {
    setLocation(data);
    reset(); // limpia el input
  };
  return (
    <>
      <Box w="full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <Input
              placeholder="Ingrese ciudad para buscar"
              {...register("city")}
              required
            />
            <InputRightElement width="5.5rem">
              <Button type="submit" h="1.75rem" size="sm" variant="outline">
                Buscar
              </Button>
            </InputRightElement>
          </InputGroup>
        </form>
      </Box>
    </>
  );
};

export default InputSearch;
