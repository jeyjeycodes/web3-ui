type Config = {
  someApiKey: string;
  gaTrackingId: string;
};

export const config: Config = {
  someApiKey: process.env.SOME_API_KEY ?? '',
  gaTrackingId: process.env.NEXT_PUBLIC_GA_TRACKING_ID ?? ''
};
