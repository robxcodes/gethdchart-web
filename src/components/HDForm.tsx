import { Card, CardBody, Input, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { planets } from "../utils/map";
import { UseFormRegister } from "react-hook-form";
import { HDFormType } from "../hooks/useHdForm";
import { validate } from "../utils/tools";

const HDForm = ({ register }: { register: UseFormRegister<HDFormType> }) => {
  return (
    <Card maxW="xs">
      <CardBody>
        <TableContainer>
          <Table variant="unstyled" size="sm" >
            <Thead>
              <Tr>
                <Th></Th>
                <Th>Design</Th>
                <Th>Personality</Th>
              </Tr>
            </Thead>
            <Tbody>
              {planets.map(([key, symbol]) => (
                <Tr>
                  <Td padding="0.5">{symbol}</Td>
                  <Td padding="0.5"><Input size="sm" minW="20" {...register(`design.${key}`, { validate: (v) => !validate(v) })} /></Td>
                  <Td padding="0.5"><Input size="sm" minW="20" {...register(`personality.${key}`, { validate: (v) => !validate(v) })} /></Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  )
}

export default HDForm;