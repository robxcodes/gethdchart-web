import { Container, Stack } from "@chakra-ui/react";
import { useHdForm } from "../hooks/useHdForm";
import HDChart from "./HDChart";
import HDForm from "./HDForm";

const Home = () => {
  const { register, result } = useHdForm();

  return (
    <Container maxW="container.md" p="10">
      <Stack direction="row" gap={4}>
        <HDForm register={register} />
        <HDChart design={result?.design} personality={result?.personality} />
      </Stack>
    </Container>
  )
}

export default Home;