import { useFetchRepo } from "./hooks/useRepos";

export default function App() {
  const { data, isError, isLoading, error } = useFetchRepo("YnfanteY2799");

  console.log(data);

  if (isLoading) {
    return <>isLoading</>;
  }
  return (
    <>
      {data.map((repo) => (
        <div>
          <h1>Repo</h1>
        </div>
      ))}
    </>
  );
}
