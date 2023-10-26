import algoliasearch from "algoliasearch";

const client = algoliasearch(
  process.env.ALGOLIA_APPLICATION_ID,
  process.env.ALGOLIA_API_KEY
);

export const algoliaDB = client.initIndex("nearbytour");
