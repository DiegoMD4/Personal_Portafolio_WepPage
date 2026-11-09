import { useState } from "react";
import { Entry } from "../components/Entry";
import { Portfolio } from "./Portfolio";

export default function Home() {
  const [entered, setEntered] = useState(false);

  if (!entered) {
    return <Entry onEnter={() => setEntered(true)} />;
  }
  return (
    <div className="page-in">
      <Portfolio onBack={() => setEntered(false)} />
    </div>
  );
}
