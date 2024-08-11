import "server-only";

import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from '../env';

import { draftMode } from "next/headers";
import { type QueryOptions, type QueryParams } from "next-sanity";


export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: {
  query: string;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}) {
  const isDraftMode = draftMode().isEnabled;

  let dynamicRevalidate = revalidate;
  if (isDraftMode) {
    dynamicRevalidate = 0;
  } else if (tags.length) {
    dynamicRevalidate = false;
  }

  return client.fetch<QueryResponse>(query, params, {
    ...(isDraftMode &&
      ({
        perspective: "previewDrafts",
        stega: true,
      } satisfies QueryOptions)),
    next: {
      revalidate: dynamicRevalidate,
      tags,
    },
  });
}