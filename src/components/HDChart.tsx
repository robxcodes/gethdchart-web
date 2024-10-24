import { Alert, Button, Card, Text, VStack } from '@chakra-ui/react';
import { gates, centers } from '../utils/map';
import { generate } from '../utils/tools';
import { Centers, DefinedGateMap, HDValue } from '../utils/type';
import { useRef, useState } from 'react';
import ColorPicker from './ColorPicker';

const purple = '#342973';
const white = '#FFFFFF';
const brokenWhite = '#F5F5F5';
const grey = '#D9D9D9';
const darkGrey = '#31243D';
const red = '#D90A0A';

const formatMap: Record<string, string> = {
  png: 'image/png',
  jpg: 'image/jpeg',
  svg: 'image/svg+xml'
}

const generateGate = (gate: number, defined?: boolean) => {
  const { position } = gates[gate] || {};

  if (!position) return;

  const { x, y } = position;

  return (
    <g>
      <rect x={x} y={y} width={12} height={12} rx={6} fill={defined ? purple : 'none'} />
      <text
        x={x + 6}
        y={y + 8.5}
        fill={defined ? brokenWhite : purple}
        fontFamily="Helvetica, sans-serif"
        fontSize={7}
        textAnchor="middle"
      >
        {gate}
      </text>
    </g>
  )
}

const generateChannel = (gate: number, gateMap?: DefinedGateMap) => {
  const { isDesign, isPersonality, isConnected } = gateMap || {};

  const { channel } = gates[gate] || {};

  if (!channel) return null;
  const { x, y, length, rotate, alwaysRoundCap } = channel;

  let lineStroke = grey;
  if (isPersonality && isDesign) {
    lineStroke = `url(#channelGradient${gate})`
  } else if (isPersonality) {
    lineStroke = darkGrey;
  } else if (isDesign) {
    lineStroke = red;
  }

  return (
    <>
      {(isPersonality && isDesign) && (
        <defs>
          <linearGradient id={`channelGradient${gate}`} x1={x} y1={y - 3} x2={x} y2={y + 3} gradientUnits="userSpaceOnUse" >
            <stop offset="0%" stopColor={darkGrey} />
            <stop offset="100%" stopColor={red} />
          </linearGradient>
        </defs>
      )}
      <path
        d={`M ${x} ${y} L ${x + length} ${y}`}
        stroke={lineStroke}
        strokeWidth={6}
        transform={!!rotate ? `rotate(${-rotate}, ${x}, ${y})` : ''}
        strokeLinecap={(isConnected && !alwaysRoundCap) ? 'butt' : 'round'}
      />
    </>
  );
}

const HDChart = ({ design, personality }: HDValue) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const hasResult = !!design || !!personality;
  const result = generate({ design, personality });

  const [colors, setColors] = useState<Record<string, string>>(Object.keys(centers).reduce(
    (colorMap, key) => ({
      ...colorMap,
      [key]: `#${centers[key as Centers].color}`
    }),
    {}
  ))

  const handleColorChange = (label: string) => (value: string) => setColors(
    (colors) => ({ ...colors, [label]: value })
  )

  const generateCenter = (name: Centers, isDefined?: boolean, definedGates?: number[]) => {
    const { position, gates: centerGates, vector } = centers[name] || {};

    const color = colors[name];

    return (
      <g>
        <path
          d={vector}
          fill={isDefined ? color : white}
          strokeWidth={2}
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke={color}
          transform={`translate(${position?.x}, ${position?.y})`}
        />
        {centerGates.map((gate) => generateGate(gate, definedGates?.includes(gate)))}
      </g>
    );
  }


  const svg = (
    <svg ref={svgRef} style={{ userSelect: 'none', opacity: hasResult ? 1 : 0.5 }} width="330" height="552" viewBox="0 0 330 552" fill="none" xmlns="http://www.w3.org/2000/svg">
      {result.gates.open.map((undGate) => generateChannel(undGate))}
      {result.gates.defined.map((defGate) => generateChannel(defGate, result.gates.map[defGate]))}
      {Object.keys(centers).map((center) => generateCenter(center as Centers, result.centers.defined.includes(center as Centers), result.gates.defined))}
    </svg>
  )

  const generateSvg = () => {
    if (!svgRef.current) return;

    const svgData = new XMLSerializer().serializeToString(svgRef.current)
    const svgDataBase64 = btoa('<?xml version="1.0" encoding="UTF-8"?>' + svgData)
    return `data:image/svg+xml;charset=utf-8;base64,${svgDataBase64}`
  }

  const downloadSvg = () => {
    const svgDataUrl = generateSvg()
    if (!svgDataUrl) return;

    const aBtn = document.createElement('a');
    aBtn.href = svgDataUrl;
    aBtn.download = 'hd-chart.svg';
    aBtn.click();
  }

  const downloadImage = (format: string) => {
    const svgDataUrl = generateSvg()
    if (!svgDataUrl) return;

    const image = new Image()

    image.addEventListener('load', () => {
      const canvas = document.createElement('canvas')

      canvas.width = 1320;
      canvas.height = 2208;

      const context = canvas.getContext('2d')
      if (!context) return;
      context.font = "600 7px 'Poppins'";
      context.fillText("text", 0, 7);
      context.drawImage(image, 0, 0, 1320, 2208)

      const dataUrl = canvas.toDataURL(formatMap[format])

      const aBtn = document.createElement('a');
      aBtn.href = dataUrl;
      aBtn.download = `hd-chart.${format}`;
      aBtn.click();
    })

    image.src = svgDataUrl;

  };

  return (
    <Card flex="1" position="relative" width="auto" p="4" alignItems="center">
      {svg}
      {hasResult && (
        <VStack position="absolute" top="4" left="4" gap="1" alignItems="flex-start">
          <Text as="b" fontSize="xs">Change colors</Text>
          {Object.entries(colors).map(
            ([label, value]) => <ColorPicker label={label} value={value} onChange={handleColorChange(label)} />
          )}
        </VStack>
      )}
      {hasResult ? (
        <VStack position="absolute" top="4" right="4" gap="1">
          <Text as="b" fontSize="xs">Download</Text>
          <Button size="sm" onClick={() => downloadSvg()}>
            📥 SVG
          </Button>
          <Button size="sm" onClick={() => downloadImage('png')}>
            📥 PNG
          </Button>
        </VStack>
      ) : (
        <Alert position="absolute" top="150px">Please complete input</Alert>
      )}

    </Card>
  )
}

export default HDChart;
