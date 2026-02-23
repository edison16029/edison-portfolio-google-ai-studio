/**
 * Feature flags to toggle sections of the website.
 * Set to false to completely hide the section from navigation and the home page.
 */
export const FEATURES = {
  career: true,
  travel: true,
  blog: true,
  contact: true,
};

export type FeatureKey = keyof typeof FEATURES;
