import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "ibpgygkh",
  dataset: "production", // or your actual dataset name
  apiVersion: "2024-01-01",
  useCdn: false,
});
