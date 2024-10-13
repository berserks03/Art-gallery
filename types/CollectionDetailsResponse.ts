import { ArtObjectPage } from "./ArtObjectPage";
import { ArtObjectDetails } from "./ArtObjectDetails";

export interface CollectionDetailsResponse {
  elapsedMilliseconds: number;
  artObject: ArtObjectDetails;
  artObjectPage: ArtObjectPage;
}
