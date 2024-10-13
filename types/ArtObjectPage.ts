import { Culture } from "./Culture";
import { Override } from "./Override";

export type ArtObjectPage = {
  id: string;
  similarPages: string[];
  lang: Culture;
  objectNumber: string;
  tags: string[];
  plaqueDescription: string;
  audioFile1?: string;
  audioFileLabel1?: string;
  audioFileLabel2?: string;
  createdOn: string;
  updatedOn: string;
  adlibOverrides: Override;
};
