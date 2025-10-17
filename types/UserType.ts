export type FeaturedObj = {
  data: {
    title: string;
    image: string;
    link?: string;
  };
  // double?: boolean;
};

export type ShopCardProp = {
  link: string;
  image: string;
  category?: string;
  storeName?: string;
  rating?: number;
  timeRange?: string;
  title?: string;

  // double?: boolean;
};
