import { centers, channels } from "./map";
import { Centers, DefinedGateMap, HDValue } from "./type";

export const validate = (input: string) => {
  if (!input) {
    return 'Empty input!'
  }

  const [gate, profile] = input.split('.').map(d => +d || 0);
  if (gate === 0 || profile === 0 || gate > 64 || profile > 6) {
    return 'Invalid input!'
  }

  return false;
}

export const generate = (value: HDValue) => {
  const definedGateMap: Record<number, DefinedGateMap> = {};

  const { design, personality } = value;
  Object.values(design).forEach(([gate]) => {
    definedGateMap[gate] = {
      ...(definedGateMap[gate] || {}),
      isDesign: true,
    }
  })
  Object.values(personality).forEach(([gate]) => {
    definedGateMap[gate] = {
      ...(definedGateMap[gate] || {}),
      isPersonality: true,
    }
  })
  channels.forEach(([gate1, gate2]) => {
    if (!!definedGateMap[gate1] && !!definedGateMap[gate2]) {
      definedGateMap[gate1] = {
        ...definedGateMap[gate1],
        isConnected: true
      }
      definedGateMap[gate2] = {
        ...definedGateMap[gate2],
        isConnected: true
      }
    }
  })

  const definedGates: number[] = [];
  const undefinedGates: number[] = [];
  const definedCenters: string[] = [];
  const undefinedCenters: string[] = [];

  Object.keys(centers).forEach((center) => {
    const { gates } = centers[center as Centers];
    gates.forEach((gate) => {
      if (!!definedGateMap[gate]) {
        definedGates.push(gate);
        if (definedGateMap[gate].isConnected && !definedCenters.includes(center)) {
          definedCenters.push(center);
        }
      } else {
        undefinedGates.push(gate);
      }
    })
    if (!definedCenters.includes(center)) {
      undefinedCenters.push(center)
    }
  })

  return {
    // due to reserved 'undefined' word, I name undefined gates/centers as open
    gates: {
      defined: definedGates,
      open: undefinedGates,
      map: definedGateMap,
    },
    centers: {
      defined: definedCenters,
      open: undefinedCenters,
    }
  }

}