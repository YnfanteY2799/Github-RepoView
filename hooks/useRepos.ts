import { githubAPI } from "../api/github";
import { useQuery } from "@tanstack/react-query";
import { Repo } from "./types";

async function fetchRepos(username: string) {
  const { data } = await githubAPI.get<Repo[]>(`/users/${username}/repos`);

  return data;
}

export function useFetchRepo(username: string) {
  return useQuery(["repos"], () => fetchRepos(username));
}
