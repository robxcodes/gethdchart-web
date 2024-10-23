import { Input, Table, TableContainer, Tbody, Td, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import { planets } from "../utils/map";
import { UseFormRegister } from "react-hook-form";
import { HDFormType } from "../hooks/useHdForm";
import { validate } from "../utils/tools";

import Logo from '../assets/gethdchart.png';
import { KeyboardEvent } from "react";

const HDForm = ({ register }: { register: UseFormRegister<HDFormType> }) => {
  const handleDesignInputEnter = (index: number) => (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      const [nextKey] = planets[index + 1] || [];
      if (nextKey) {
        (document.querySelector(`input[name="design.${nextKey}"]`) as HTMLInputElement)?.focus?.()
      } else {
        (document.querySelector('input[name="personality.sun"]') as HTMLInputElement)?.focus?.()
      }
    }
  }

  const handlePersonalityInputEnter = (index: number) => (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      const [nextKey] = planets[index + 1] || [];
      if (nextKey) {
        (document.querySelector(`input[name="personality.${nextKey}"]`) as HTMLInputElement)?.focus?.()
      }
    }
  }

  return (
    <VStack maxW="64" gap={4} alignItems="center">
      <img width={150} style={{ objectFit: 'contain' }} src={Logo} />
      <TableContainer>
        <Table variant="unstyled" size="sm" >
          <Thead>
            <Tr display="flex">
              <Th w="6"></Th>
              <Th flex={1}>Design</Th>
              <Th flex={1}>Personality</Th>
            </Tr>
          </Thead>
          <Tbody>
            {planets.map(([key, symbol], index) => (
              <Tr display="flex" alignItems="center">
                <Td w="6" padding="0.5">{symbol}</Td>
                <Td flex={1} padding="0.5">
                  <Input size="sm" minW="20" onKeyDown={handleDesignInputEnter(index)}  {...register(`design.${key}`, { validate: (v) => !validate(v) })} />
                </Td>
                <Td flex={1} padding="0.5">
                  <Input size="sm" minW="20" onKeyDown={handlePersonalityInputEnter(index)} {...register(`personality.${key}`, { validate: (v) => !validate(v) })} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </VStack>
  )
}

export default HDForm;