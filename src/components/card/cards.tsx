import { ReactElement, useState } from "react";
import { Repo } from "../../hooks/types";

export interface CardsProps {
  repo: Repo;
}

export default function Cards({ repo }: CardsProps): ReactElement {
  const [text, setText] = useState("Ts" as string);

  return <>Hey!{text}</>;
}
