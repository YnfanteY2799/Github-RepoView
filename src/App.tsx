import { useState } from "react";
import { Card, Navbar } from "./components";
import { useFetchRepo } from "./hooks/useRepos";
import { useRepoStore } from "./store/RepoStore";

export default function App() {
  const [user, setUser] = useState("" as string);

  const { data, isError, isLoading, error } = useFetchRepo(user);
  const { favoriteReposId } = useRepoStore();

  return (
    <>
      <Navbar />
      {/* {isLoading ? <> loading</> : <></>}
      <input onChange={({ target: { value } }) => setUser(value)} />
      {data?.map((repo) => (
        <div key={repo.id}>
          <Card repo={repo} isFav={favoriteReposId.includes(repo.id)} />
        </div>
      ))} */}
    </>
  );
}
