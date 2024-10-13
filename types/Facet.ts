import { FacetValue } from "./FacetValue";

export type Facet = {
  facets: FacetValue[];
  name: string;
  otherTerms: number;
  prettyName: number;
};
