import { CenterMeta, Centers, GateMeta } from "./type"

export const planets = [
  ['sun', '☉'],
  ['earth', '🜨'],
  ['north', '☊'],
  ['south', '☋'],
  ['moon', '☽'],
  ['mercury', '☿'],
  ['venus', '♀'],
  ['mars', '♂'],
  ['jupiter', '♃'],
  ['saturn', '♄'],
  ['uranus', '♅'],
  ['neptune', '♆'],
  ['pluto', '♇']
]

export const centers: Record<Centers, CenterMeta> = {
  head: {
    size: { width: 76, height: 60 },
    position: { x: 126, y: 1 },
    gates: [64, 61, 63],
    color: 'F3C13F',
    vector: 'M 3 60 C 1 60 0 57 1 55 L 34 3 C 36 0 38 0 40 3 L 73 55 C 74 57 73 60 70 60 L 3 60 Z',
  },
  mind: {
    size: { width: 76, height: 60 },
    position: { x: 126, y: 75 },
    gates: [47, 24, 4, 17, 11, 43],
    color: '4FD21F',
    vector: 'M 3 0 C 1 0 0 3 1 5 L 34 57 C 36 60 38 60 40 57 L 73 5 C 74 3 73 0 70 0 L 3 0 Z',
  },
  throat: {
    size: { width: 66, height: 66 },
    position: { x: 130, y: 148 },
    gates: [62, 23, 56, 35, 12, 45, 33, 8, 31, 20, 16],
    color: 'F3893F',
    vector: 'M 66 5 C 66 2 64 0 61 0 L 5 0 C 2 0 0 2 0 5 L 0 61 C 0 64 2 66 5 66 L 61 66 C 64 66 66 64 66 61 L 66 5 Z',
  },
  g: {
    size: { width: 82, height: 82 },
    position: { x: 123, y: 245 },
    gates: [1, 13, 25, 46, 2, 15, 10, 7],
    color: 'F3C13F',
    vector: 'M 2 44 L 36 78 C 38 80 42 80 44 78 L 78 44 C 80 42 80 38 78 36 L 44 2 C 42 0 38 0 36 2 L 2 36 C 0 38 0 42 2 44 Z'
  },
  heart: {
    size: { width: 76, height: 44 },
    position: { x: 207, y: 300 },
    gates: [26, 51, 21, 40],
    color: 'F76E76',
    vector: 'M 1 38 C 0 40 1 43 3 43 L 69 43 C 71 43 73 40 71 38 L 38 1 C 37 0 35 0 34 1 L 1 38 Z'
  },
  spleen: {
    size: { width: 60, height: 76 },
    position: { x: 1, y: 352 },
    gates: [48, 57, 44, 50, 32, 28, 18],
    color: 'F3893F',
    vector: 'M 5 1 C 3 0 0 1 0 4 L 0 70 C 0 73 3 74 5 73 L 57 40 C 59 38 59 36 57 34 L 5 1 Z'
  },
  sacral: {
    size: { width: 66, height: 66 },
    position: { x: 130, y: 388 },
    gates: [5, 14, 29, 59, 9, 3, 42, 27, 34],
    color: 'F76E76',
    vector: 'M 66 5 C 66 2 64 0 61 0 L 5 0 C 2 0 0 2 0 5 L 0 61 C 0 64 2 66 5 66 L 61 66 C 64 66 66 64 66 61 L 66 5 Z',
  },
  esp: {
    size: { width: 60, height: 76 },
    position: { x: 267, y: 352 },
    gates: [6, 37, 22, 36, 30, 55, 49],
    color: 'F3893F',
    vector: 'M 54 73 C 56 74 59 73 59 70 L 59 4 C 59 1 56 0 54 1 L 2 34 C 0 36 0 38 2 40 L 54 73 Z'
  },
  root: {
    size: { width: 66, height: 66 },
    position: { x: 130, y: 484 },
    gates: [58, 38, 54, 53, 60, 52, 19, 39, 41],
    color: 'F3893F',
    vector: 'M 66 5 C 66 2 64 0 61 0 L 5 0 C 2 0 0 2 0 5 L 0 61 C 0 64 2 66 5 66 L 61 66 C 64 66 66 64 66 61 L 66 5 Z',
  },
}

export const channels = [
  [47, 64],
  [24, 61],
  [4, 63],
  [17, 62],
  [23, 43],
  [11, 56],
  [16, 48],
  [20, 57],
  [20, 10],
  [20, 34],
  [31, 7],
  [8, 1],
  [33, 13],
  [45, 21],
  [12, 22],
  [35, 36],
  [10, 57],
  [10, 34],
  [15, 5],
  [2, 14],
  [46, 29],
  [25, 51],
  [26, 44],
  [40, 37],
  [57, 34],
  [50, 27],
  [32, 54],
  [28, 38],
  [18, 58],
  [59, 6],
  [42, 53],
  [3, 60],
  [9, 52],
  [49, 19],
  [55, 39],
  [30, 41]
]

export const gates: Record<number, GateMeta> = {
  // head
  64: {
    position: { x: 142, y: 47 },
    channel: { x: 148, y: 68, length: 12, rotate: 90 }
  },
  61: {
    position: { x: 157, y: 47 },
    channel: { x: 163, y: 68, length: 12, rotate: 90 }
  },
  63: {
    position: { x: 172, y: 47 },
    channel: { x: 178, y: 68, length: 12, rotate: 90 }
  },
  // mind
  47: {
    position: { x: 142, y: 77 },
    channel: { x: 148, y: 80, length: 12, rotate: 90 }
  },
  24: {
    position: { x: 157, y: 77 },
    channel: { x: 163, y: 80, length: 12, rotate: 90 }
  },
  4: {
    position: { x: 172, y: 77 },
    channel: { x: 178, y: 80, length: 12, rotate: 90 }
  },
  17: {
    position: { x: 145, y: 96 },
    channel: { x: 148, y: 131, length: 27, rotate: 90 }
  },
  43: {
    position: { x: 157, y: 114 },
    channel: { x: 163, y: 142, length: 20, rotate: 90 }
  },
  11: {
    position: { x: 169, y: 96 },
    channel: { x: 178, y: 131, length: 27, rotate: 90 }
  },
  // throat
  62: {
    position: { x: 142, y: 150 },
    channel: { x: 148, y: 156, length: 27, rotate: 90 }
  },
  23: {
    position: { x: 157, y: 150 },
    channel: { x: 163, y: 155, length: 15, rotate: 90 }
  },
  56: {
    position: { x: 172, y: 150 },
    channel: { x: 178, y: 156, length: 27, rotate: 90 }
  },
  35: {
    position: { x: 182, y: 162 },
    channel: { x: 190, y: 160, length: 128, rotate: -57.5 }
  },
  12: {
    position: { x: 182, y: 176 },
    channel: { x: 190, y: 175, length: 118, rotate: -60 }
  },
  45: {
    position: { x: 182, y: 190 },
    channel: { x: 190, y: 190, length: 78, rotate: -66 }
  },
  33: {
    position: { x: 172, y: 200 },
    channel: { x: 178, y: 234, length: 27, rotate: 90 }
  },
  8: {
    position: { x: 157, y: 200 },
    channel: { x: 163, y: 234, length: 27, rotate: 90 }
  },
  31: {
    position: { x: 142, y: 200 },
    channel: { x: 148, y: 234, length: 27, rotate: 90 }
  },
  20: {
    position: { x: 132, y: 176 },
    channel: { x: 136, y: 175, length: 190, rotate: -120, alwaysRoundCap: true }
  },
  16: {
    position: { x: 132, y: 162 },
    channel: { x: 136, y: 160, length: 128, rotate: -122.5 }
  },
  // ego
  26: {
    position: { x: 216, y: 329 },
    channel: { x: 218, y: 334, length: 100, rotate: -166 }
  },
  51: {
    position: { x: 227, y: 317 },
    channel: { x: 208, y: 301, length: 30, rotate: -45 }
  },
  21: {
    position: { x: 237, y: 305 },
    channel: { x: 219, y: 255, length: 62, rotate: -66 }
  },
  40: {
    position: { x: 258, y: 329 },
    channel: { x: 268, y: 336, length: 28, rotate: -60 }
  },
  // g
  7: {
    position: { x: 142, y: 264 },
    channel: { x: 148, y: 267, length: 35, rotate: 90 }
  },
  1: {
    position: { x: 157, y: 249 },
    channel: { x: 163, y: 255, length: 21, rotate: 90 }
  },
  13: {
    position: { x: 172, y: 264 },
    channel: { x: 178, y: 267, length: 35, rotate: 90 }
  },
  25: {
    position: { x: 187, y: 279 },
    channel: { x: 193, y: 286, length: 30, rotate: -45 }
  },
  46: {
    position: { x: 172, y: 294 },
    channel: { x: 178, y: 352, length: 51, rotate: 90 }
  },
  2: {
    position: { x: 157, y: 309 },
    channel: { x: 163, y: 352, length: 37, rotate: 90 }
  },
  15: {
    position: { x: 142, y: 294 },
    channel: { x: 148, y: 352, length: 51, rotate: 90 }
  },
  10: {
    position: { x: 127, y: 279 },
    channel: { x: 132, y: 287, length: 104, rotate: -150, alwaysRoundCap: true }
  },
  // sacral
  5: {
    position: { x: 142, y: 390 },
    channel: { x: 148, y: 390, length: 40, rotate: 90 },
  },
  14: {
    position: { x: 157, y: 390 },
    channel: { x: 163, y: 393, length: 40, rotate: 90 },
  },
  29: {
    position: { x: 172, y: 390 },
    channel: { x: 178, y: 393, length: 40, rotate: 90 },
  },
  59: {
    position: { x: 182, y: 427 },
    channel: { x: 231, y: 414, length: 46, rotate: -155 },
  },
  9: {
    position: { x: 172, y: 440 },
    channel: { x: 178, y: 470, length: 20, rotate: 90 },
  },
  3: {
    position: { x: 157, y: 440 },
    channel: { x: 163, y: 470, length: 20, rotate: 90 },
  },
  42: {
    position: { x: 142, y: 440 },
    channel: { x: 148, y: 470, length: 20, rotate: 90 },
  },
  27: {
    position: { x: 132, y: 427 },
    channel: { x: 94, y: 414, length: 46, rotate: -25 },
  },
  34: {
    position: { x: 132, y: 402 },
    channel: { x: 41, y: 340, length: 116, rotate: -35, alwaysRoundCap: true },
  },
  // spleen
  48: {
    position: { x: 3, y: 359 },
    channel: { x: 71, y: 262, length: 120, rotate: -122.5 },
  },
  57: {
    position: { x: 15, y: 367 },
    channel: { x: 42, y: 338, length: 40, rotate: -120, alwaysRoundCap: true },
  },
  44: {
    position: { x: 28, y: 375 },
    channel: { x: 130, y: 356, length: 100, rotate: -166 },
  },
  50: {
    position: { x: 41, y: 383 },
    channel: { x: 47, y: 392, length: 54, rotate: -25 },
  },
  32: {
    position: { x: 28, y: 391 },
    channel: { x: 34, y: 401, length: 75, rotate: -45 },
  },
  28: {
    position: { x: 15, y: 399 },
    channel: { x: 23, y: 409, length: 78, rotate: -45 },
  },
  18: {
    position: { x: 3, y: 407 },
    channel: { x: 11, y: 416, length: 81, rotate: -45 },
  },
  // esp
  6: {
    position: { x: 274, y: 383 },
    channel: { x: 278, y: 392, length: 54, rotate: -155 },
  },
  37: {
    position: { x: 287, y: 375 },
    channel: { x: 279, y: 355, length: 28, rotate: -60 },
  },
  22: {
    position: { x: 300, y: 367 },
    channel: { x: 243, y: 267, length: 118, rotate: -60 },
  },
  36: {
    position: { x: 312, y: 359 },
    channel: { x: 253, y: 259, length: 120, rotate: -57.5 },
  },
  30: {
    position: { x: 312, y: 407 },
    channel: { x: 315, y: 416, length: 81, rotate: -135 },
  },
  55: {
    position: { x: 300, y: 399 },
    channel: { x: 303, y: 409, length: 78, rotate: -135 },
  },
  49: {
    position: { x: 287, y: 391 },
    channel: { x: 292, y: 401, length: 75, rotate: -135 },
  },
  // root
  58: {
    position: { x: 132, y: 531 },
    channel: { x: 67, y: 472, length: 92, rotate: -45 },
  },
  38: {
    position: { x: 132, y: 515 },
    channel: { x: 76, y: 462, length: 82, rotate: -45 },
  },
  54: {
    position: { x: 132, y: 499 },
    channel: { x: 86, y: 453, length: 70, rotate: -45 },
  },
  53: {
    position: { x: 142, y: 486 },
    channel: { x: 148, y: 488, length: 20, rotate: 90 },
  },
  60: {
    position: { x: 157, y: 486 },
    channel: { x: 163, y: 488, length: 20, rotate: 90 },
  },
  52: {
    position: { x: 172, y: 486 },
    channel: { x: 178, y: 488, length: 20, rotate: 90 },
  },
  19: {
    position: { x: 182, y: 499 },
    channel: { x: 240, y: 453, length: 70, rotate: -135 },
  },
  39: {
    position: { x: 182, y: 515 },
    channel: { x: 250, y: 462, length: 82, rotate: -135 },
  },
  41: {
    position: { x: 182, y: 531 },
    channel: { x: 259, y: 472, length: 92, rotate: -135 },
  },
}
