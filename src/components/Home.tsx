import { Container, Stack } from "@chakra-ui/react";
import { useHdForm } from "../hooks/useHdForm";
import HDChart from "./HDChart";
import HDForm from "./HDForm";

const Home = () => {
  const { register, result } = useHdForm();

  return (
    <Container>
      <Stack>
        <HDForm register={register} />
        {result && <HDChart hdValue={result} />}
      </Stack>
    </Container>
  )
}

export default Home;