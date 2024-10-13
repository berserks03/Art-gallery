import { CollectionImageResponse } from './CollectionImageResponse';
import { CollectionResponse } from './CollectionResponse';
import { CollectionDetailsResponse } from './CollectionDetailsResponse';

export type ApiResponse =
    | CollectionResponse
    | CollectionDetailsResponse
    | CollectionImageResponse;
