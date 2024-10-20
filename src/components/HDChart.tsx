import { gates, centers } from '../utils/map';
import { generate } from '../utils/tools';
import { Centers, DefinedGateMap, HDValue } from '../utils/type';

const purple = '#342973';
const white = '#FFFFFF';
const brokenWhite = '#F5F5F5';
const grey = '#D9D9D9';
const darkGrey = '#31243D';
const red = '#D90A0A';

const generateGate = (gate: number, defined?: boolean) => {
  const { position } = gates[gate] || {};

  if (!position) return;

  const { x, y } = position;

  return (
    <g>
      <rect x={x} y={y} width={12} height={12} rx={6} fill={defined ? purple : 'none'} />
      <text
        x={x + 6}
        y={y + 7}
        fill={defined ? brokenWhite : purple}
        fontFamily="'Poppins', sans-serif"
        fontWeight={600}
        fontSize={7}
        text-anchor="middle"
        dominant-baseline="middle"
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
            <stop offset="0%" stop-color={darkGrey} />
            <stop offset="100%" stop-color={red} />
          </linearGradient>
        </defs>
      )}
      <path
        d={`M ${x} ${y} L ${x + length} ${y}`}
        stroke={lineStroke}
        strokeWidth={6}
        transform={!!rotate ? `rotate(${-rotate}, ${x}, ${y})` : ''}
        strokeLinecap={(isConnected && !alwaysRoundCap) ? 'square' : 'round'}
      />
    </>
  );
}

const generateCenter = (name: Centers, isDefined?: boolean, definedGates?: number[]) => {
  const { position, gates: centerGates, color, vector } = centers[name] || {};

  return (
    <g>
      <path
        d={vector}
        fill={isDefined ? `#${color}` : white}
        strokeWidth={2}
        strokeLinejoin="round"
        strokeLinecap="round"
        stroke={`#${color}`}
        transform={`translate(${position?.x}, ${position?.y})`}
      />
      {centerGates.map((gate) => generateGate(gate, definedGates?.includes(gate)))}
    </g>
  );
}

const HDChart = ({ hdValue }: { hdValue: HDValue }) => {
  const result = generate(hdValue);

  return (
    <svg width="330" height="552" viewBox="0 0 330 552" fill="none" xmlns="http://www.w3.org/2000/svg">
      {result.gates.open.map((undGate) => generateChannel(undGate))}
      {result.gates.defined.map((defGate) => generateChannel(defGate, result.gates.map[defGate]))}
      {Object.keys(centers).map((center) => generateCenter(center as Centers, result.centers.defined.includes(center as Centers), result.gates.defined))}
    </svg>
  )
}

export default HDChart;
