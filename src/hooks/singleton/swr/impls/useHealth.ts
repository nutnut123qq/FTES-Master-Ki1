import useSWR from "swr";
import { jsonFetcher } from "@/hooks/singleton/swr/core/fetcher";

export function useGraphqlHealth(enabled = false) {
  return useSWR<{ ok: boolean }>(enabled ? "/api/health" : null, jsonFetcher);
}
