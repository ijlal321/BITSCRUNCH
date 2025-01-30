import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';

export type BuildOfferV2BodyParam = FromSchema<typeof schemas.BuildOfferV2.body>;
export type BuildOfferV2Response200 = FromSchema<typeof schemas.BuildOfferV2.response['200']>;
export type CancelOrderBodyParam = FromSchema<typeof schemas.CancelOrder.body>;
export type CancelOrderMetadataParam = FromSchema<typeof schemas.CancelOrder.metadata>;
export type CancelOrderResponse200 = FromSchema<typeof schemas.CancelOrder.response['200']>;
export type GenerateListingFulfillmentDataV2BodyParam = FromSchema<typeof schemas.GenerateListingFulfillmentDataV2.body>;
export type GenerateListingFulfillmentDataV2Response200 = FromSchema<typeof schemas.GenerateListingFulfillmentDataV2.response['200']>;
export type GenerateOfferFulfillmentDataV2BodyParam = FromSchema<typeof schemas.GenerateOfferFulfillmentDataV2.body>;
export type GenerateOfferFulfillmentDataV2Response200 = FromSchema<typeof schemas.GenerateOfferFulfillmentDataV2.response['200']>;
export type GetAccountMetadataParam = FromSchema<typeof schemas.GetAccount.metadata>;
export type GetAccountResponse200 = FromSchema<typeof schemas.GetAccount.response['200']>;
export type GetAllListingsOnCollectionV2MetadataParam = FromSchema<typeof schemas.GetAllListingsOnCollectionV2.metadata>;
export type GetAllListingsOnCollectionV2Response200 = FromSchema<typeof schemas.GetAllListingsOnCollectionV2.response['200']>;
export type GetAllOffersOnCollectionV2MetadataParam = FromSchema<typeof schemas.GetAllOffersOnCollectionV2.metadata>;
export type GetAllOffersOnCollectionV2Response200 = FromSchema<typeof schemas.GetAllOffersOnCollectionV2.response['200']>;
export type GetBestListingOnNftV2MetadataParam = FromSchema<typeof schemas.GetBestListingOnNftV2.metadata>;
export type GetBestListingOnNftV2Response200 = FromSchema<typeof schemas.GetBestListingOnNftV2.response['200']>;
export type GetBestListingsOnCollectionV2MetadataParam = FromSchema<typeof schemas.GetBestListingsOnCollectionV2.metadata>;
export type GetBestListingsOnCollectionV2Response200 = FromSchema<typeof schemas.GetBestListingsOnCollectionV2.response['200']>;
export type GetBestOfferOnNftV2MetadataParam = FromSchema<typeof schemas.GetBestOfferOnNftV2.metadata>;
export type GetBestOfferOnNftV2Response200 = FromSchema<typeof schemas.GetBestOfferOnNftV2.response['200']>;
export type GetCollectionMetadataParam = FromSchema<typeof schemas.GetCollection.metadata>;
export type GetCollectionOffersV2MetadataParam = FromSchema<typeof schemas.GetCollectionOffersV2.metadata>;
export type GetCollectionOffersV2Response200 = FromSchema<typeof schemas.GetCollectionOffersV2.response['200']>;
export type GetCollectionResponse200 = FromSchema<typeof schemas.GetCollection.response['200']>;
export type GetCollectionStatsMetadataParam = FromSchema<typeof schemas.GetCollectionStats.metadata>;
export type GetCollectionStatsResponse200 = FromSchema<typeof schemas.GetCollectionStats.response['200']>;
export type GetContractMetadataParam = FromSchema<typeof schemas.GetContract.metadata>;
export type GetContractResponse200 = FromSchema<typeof schemas.GetContract.response['200']>;
export type GetListingsMetadataParam = FromSchema<typeof schemas.GetListings.metadata>;
export type GetListingsResponse200 = FromSchema<typeof schemas.GetListings.response['200']>;
export type GetNftMetadataParam = FromSchema<typeof schemas.GetNft.metadata>;
export type GetNftResponse200 = FromSchema<typeof schemas.GetNft.response['200']>;
export type GetOffersMetadataParam = FromSchema<typeof schemas.GetOffers.metadata>;
export type GetOffersResponse200 = FromSchema<typeof schemas.GetOffers.response['200']>;
export type GetOrderMetadataParam = FromSchema<typeof schemas.GetOrder.metadata>;
export type GetOrderResponse200 = FromSchema<typeof schemas.GetOrder.response['200']>;
export type GetPaymentTokenMetadataParam = FromSchema<typeof schemas.GetPaymentToken.metadata>;
export type GetPaymentTokenResponse200 = FromSchema<typeof schemas.GetPaymentToken.response['200']>;
export type GetTraitOffersV2MetadataParam = FromSchema<typeof schemas.GetTraitOffersV2.metadata>;
export type GetTraitOffersV2Response200 = FromSchema<typeof schemas.GetTraitOffersV2.response['200']>;
export type GetTraitsMetadataParam = FromSchema<typeof schemas.GetTraits.metadata>;
export type GetTraitsResponse200 = FromSchema<typeof schemas.GetTraits.response['200']>;
export type ListCollectionsMetadataParam = FromSchema<typeof schemas.ListCollections.metadata>;
export type ListCollectionsResponse200 = FromSchema<typeof schemas.ListCollections.response['200']>;
export type ListEventsByAccountMetadataParam = FromSchema<typeof schemas.ListEventsByAccount.metadata>;
export type ListEventsByAccountResponse200 = FromSchema<typeof schemas.ListEventsByAccount.response['200']>;
export type ListEventsByCollectionMetadataParam = FromSchema<typeof schemas.ListEventsByCollection.metadata>;
export type ListEventsByCollectionResponse200 = FromSchema<typeof schemas.ListEventsByCollection.response['200']>;
export type ListEventsByNftMetadataParam = FromSchema<typeof schemas.ListEventsByNft.metadata>;
export type ListEventsByNftResponse200 = FromSchema<typeof schemas.ListEventsByNft.response['200']>;
export type ListEventsMetadataParam = FromSchema<typeof schemas.ListEvents.metadata>;
export type ListEventsResponse200 = FromSchema<typeof schemas.ListEvents.response['200']>;
export type ListNftsByAccountMetadataParam = FromSchema<typeof schemas.ListNftsByAccount.metadata>;
export type ListNftsByAccountResponse200 = FromSchema<typeof schemas.ListNftsByAccount.response['200']>;
export type ListNftsByCollectionMetadataParam = FromSchema<typeof schemas.ListNftsByCollection.metadata>;
export type ListNftsByCollectionResponse200 = FromSchema<typeof schemas.ListNftsByCollection.response['200']>;
export type ListNftsByContractMetadataParam = FromSchema<typeof schemas.ListNftsByContract.metadata>;
export type ListNftsByContractResponse200 = FromSchema<typeof schemas.ListNftsByContract.response['200']>;
export type PostCriteriaOfferV2BodyParam = FromSchema<typeof schemas.PostCriteriaOfferV2.body>;
export type PostCriteriaOfferV2Response200 = FromSchema<typeof schemas.PostCriteriaOfferV2.response['200']>;
export type PostListingBodyParam = FromSchema<typeof schemas.PostListing.body>;
export type PostListingMetadataParam = FromSchema<typeof schemas.PostListing.metadata>;
export type PostListingResponse200 = FromSchema<typeof schemas.PostListing.response['200']>;
export type PostOfferBodyParam = FromSchema<typeof schemas.PostOffer.body>;
export type PostOfferMetadataParam = FromSchema<typeof schemas.PostOffer.metadata>;
export type PostOfferResponse200 = FromSchema<typeof schemas.PostOffer.response['200']>;
export type RefreshNftMetadataParam = FromSchema<typeof schemas.RefreshNft.metadata>;
