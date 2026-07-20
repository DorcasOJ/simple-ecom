export type FeaturedObj = {
  data: {
    title?: string | undefined;
    image: string;
    link?: string;
  };
  // double?: boolean;
};

export type ShopCardProp = {
  link?: string;
  image: string;
  category?: string;
  storeName?: string;
  rating?: number;
  timeRange?: string;
  title?: string | undefined;

  // double?: boolean;
};
