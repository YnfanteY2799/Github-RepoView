import { ReactElement } from "react";
import { Repo } from "../../hooks/types";
import { useRepoStore } from "../../store/RepoStore";

export interface CardsProps {
  repo: Repo;
  isFav: boolean;
}

export default function Cards({ repo, isFav }: CardsProps): ReactElement {
  const addFav = useRepoStore((s) => s.addFavoriteRepo);
  const removeFav = useRepoStore((s) => s.removeFavoriteRepo);

  return (
    <>
      <h1>{repo.name}</h1>
      <button onClick={() => (!isFav ? addFav(repo.id) : removeFav(repo.id))}>
        {isFav ? "Is Like" : "Like"}
      </button>
    </>
  );
}
