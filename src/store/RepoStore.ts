import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface RepoStoreStateType {
  favoriteReposId: Array<number>;
  addFavoriteRepo: (id: number) => void;
  removeFavoriteRepo: (id: number) => void;
}

export const useRepoStore = create(
  persist<RepoStoreStateType>(
    (set) => ({
      favoriteReposId: [],
      addFavoriteRepo: (id: number) => {
        set((s) => ({ favoriteReposId: [...s.favoriteReposId, id] }));
      },
      removeFavoriteRepo: (id: number) => {
        set((s) => ({ favoriteReposId: [...s.favoriteReposId.filter((x) => x != id)] }));
      },
    }),
    { name: "fav-repos" }
  )
);
