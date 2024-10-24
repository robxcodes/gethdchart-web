import { Box, Button, Heading, HStack, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Text, VStack } from "@chakra-ui/react"
import { ColorResult, Colorful } from '@uiw/react-color';
import { centers } from "../utils/map";
import { Centers } from "../utils/type";

interface IColorPickerProps {
  label: string,
  value: string,
  onChange: (val: string) => void
}

const ColorPicker = ({ label, value, onChange }: IColorPickerProps) => {
  const handleColorChange = (v: ColorResult) => onChange(v.hex);

  return (
    <Popover>
      <PopoverTrigger>
        <Button size="xs" overflow="hidden" w="16" p="0" pl="2" h="6" justifyContent="space-between" variant="outline">
          {label}
          <Box w="4" h="6" style={{ backgroundColor: value }} />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <HStack>
          <Colorful color={value} onChange={handleColorChange} />
          <VStack>
            <Text textStyle="xl">{value.toUpperCase()}</Text>
            <Button variant="link" onClick={() => onChange(`#${centers[label as Centers].color}`)}>
              Reset
            </Button>
          </VStack>
        </HStack>
      </PopoverContent>
    </Popover>
  )
}

export default ColorPicker;
