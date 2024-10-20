export interface HDValue {
  design: Record<string, [number, number]>,
  personality: Record<string, [number, number]>,
}

export interface DefinedGateMap {
  isDesign?: boolean;
  isPersonality?: boolean;
  isConnected?: boolean;
}

export type Centers = 'head' | 'mind' | 'throat' | 'g' | 'heart' | 'spleen' | 'sacral' | 'esp' | 'root'

export interface CenterMeta {
  size: { width: number, height: number },
  position: { x: number, y: number },
  gates: number[],
  color: string,
  vector: string,
  radius: 2 | 4,
}

export interface ChannelMeta {
  x: number,
  y: number,
  length: number,
  rotate?: number,
  alwaysRoundCap?: boolean,
}

export interface GateMeta {
  position: { x: number, y: number },
  channel: ChannelMeta,
}
