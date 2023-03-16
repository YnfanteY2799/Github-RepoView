import Cards from "./components/card/cards";
import { useFetchRepo } from "./hooks/useRepos";

export default function App() {
  const { data, isError, isLoading, error } = useFetchRepo("YnfanteY2799");


  if (isLoading) {
    return <>isLoading</>;
  }

  return (
    <>
      {data?.map((repo) => (
        <div>
          <Cards repo={repo} />
        </div>
      ))}
    </>
  );
}
