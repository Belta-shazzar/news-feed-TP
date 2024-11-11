import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "9eqn7s6i",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",
});

export default client;
