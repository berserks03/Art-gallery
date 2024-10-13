import { Culture } from "./Culture";
import { Format } from "./Format";
import { Sort } from "./Sort";

export interface CollectionRequest {
  searchTerm: string;
  page?: number;
  perPage?: number;
  format?: Format;
  culture?: Culture;
  involvedMaker?: string;
  type?: string;
  material?: string;
  technique?: string;
  period?: string;
  hex?: string;
  imageOnly?: boolean;
  topPieces?: boolean;
  sort?: Sort;
}
