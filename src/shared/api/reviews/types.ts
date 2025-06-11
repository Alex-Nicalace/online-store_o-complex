export interface GetReviewsArgs {
  signal?: AbortSignal;
}

export interface Review {
  id: number;
  text: string;
}
