import { Tile } from "./Tile";

export type Level = {
  name: string;
  width: number;
  height: number;
  tiles: Tile[];
};
