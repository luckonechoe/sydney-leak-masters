// Suburb data for SEO pages
export interface SuburbData {
  slug: string;
  name: string;
  region: string;
  postcode: string;
  description: string;
}

export const sydneySuburbs: SuburbData[] = [
  {
    slug: "parramatta",
    name: "Parramatta",
    region: "Western Sydney",
    postcode: "2150",
    description: "Parramatta's premier leak repair specialists serving homes and businesses throughout the CBD and surrounding areas.",
  },
  {
    slug: "bondi",
    name: "Bondi",
    region: "Eastern Suburbs",
    postcode: "2026",
    description: "Expert shower and balcony leak repairs in Bondi. We understand the unique challenges of coastal properties.",
  },
  {
    slug: "manly",
    name: "Manly",
    region: "Northern Beaches",
    postcode: "2095",
    description: "Trusted leak repair services for Manly homes. Specialising in waterproofing solutions for beachside properties.",
  },
  {
    slug: "chatswood",
    name: "Chatswood",
    region: "North Shore",
    postcode: "2067",
    description: "Professional leak repairs in Chatswood. Serving apartments, townhouses and family homes across the North Shore.",
  },
  {
    slug: "cronulla",
    name: "Cronulla",
    region: "Sutherland Shire",
    postcode: "2230",
    description: "Cronulla's trusted leak repair experts. Protecting your property from water damage with proven solutions.",
  },
  {
    slug: "bankstown",
    name: "Bankstown",
    region: "South Western Sydney",
    postcode: "2200",
    description: "Quality leak repair services in Bankstown. Affordable solutions for residential and commercial properties.",
  },
  {
    slug: "liverpool",
    name: "Liverpool",
    region: "South Western Sydney",
    postcode: "2170",
    description: "Liverpool's leading leak repair company. Fast, reliable service with transparent pricing.",
  },
  {
    slug: "penrith",
    name: "Penrith",
    region: "Western Sydney",
    postcode: "2750",
    description: "Expert leak repairs throughout Penrith and the Blue Mountains foothills. Local expertise you can trust.",
  },
  {
    slug: "blacktown",
    name: "Blacktown",
    region: "Western Sydney",
    postcode: "2148",
    description: "Comprehensive leak repair services for Blacktown residents. Quality workmanship guaranteed.",
  },
  {
    slug: "ryde",
    name: "Ryde",
    region: "Northern Sydney",
    postcode: "2112",
    description: "Professional shower and balcony repairs in Ryde. Serving the local community with excellence.",
  },
  {
    slug: "hornsby",
    name: "Hornsby",
    region: "Upper North Shore",
    postcode: "2077",
    description: "Hornsby's preferred leak repair specialists. Expert solutions for Upper North Shore properties.",
  },
  {
    slug: "sutherland",
    name: "Sutherland",
    region: "Sutherland Shire",
    postcode: "2232",
    description: "Trusted leak repair services throughout the Sutherland Shire. Local experts, proven results.",
  },
  {
    slug: "randwick",
    name: "Randwick",
    region: "Eastern Suburbs",
    postcode: "2031",
    description: "Expert leak repairs in Randwick and surrounding Eastern Suburbs. Quality solutions since day one.",
  },
  {
    slug: "marrickville",
    name: "Marrickville",
    region: "Inner West",
    postcode: "2204",
    description: "Marrickville's go-to leak repair team. Specialising in heritage homes and modern apartments.",
  },
  {
    slug: "hurstville",
    name: "Hurstville",
    region: "St George",
    postcode: "2220",
    description: "Professional leak repair services in Hurstville. Protecting St George properties from water damage.",
  },
  {
    slug: "burwood",
    name: "Burwood",
    region: "Inner West",
    postcode: "2134",
    description: "Burwood's trusted leak repair experts. Serving homes and businesses throughout the Inner West.",
  },
  {
    slug: "strathfield",
    name: "Strathfield",
    region: "Inner West",
    postcode: "2135",
    description: "Quality leak repairs in Strathfield. Premium service for premium properties.",
  },
  {
    slug: "epping",
    name: "Epping",
    region: "Northern Sydney",
    postcode: "2121",
    description: "Expert leak repair solutions in Epping. Professional service for residential and strata properties.",
  },
  {
    slug: "castle-hill",
    name: "Castle Hill",
    region: "Hills District",
    postcode: "2154",
    description: "Castle Hill's leading leak repair company. Trusted by homeowners throughout the Hills District.",
  },
  {
    slug: "mosman",
    name: "Mosman",
    region: "Lower North Shore",
    postcode: "2088",
    description: "Premium leak repair services in Mosman. Discreet, professional solutions for prestige properties.",
  },
];

export function getSuburbBySlug(slug: string): SuburbData | undefined {
  return sydneySuburbs.find((suburb) => suburb.slug === slug);
}

export function getAllSuburbSlugs(): string[] {
  return sydneySuburbs.map((suburb) => suburb.slug);
}
