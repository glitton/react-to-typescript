import { useState } from "react";
import data from "./data";
import List from "./List";

export type PeopleProps = {
  id: number;
  name: string;
  age: number;
  image: string;
}[];

const App = () => {
  const [people, setPeople] = useState<PeopleProps[]>(data);

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        {people.map((person) => (
          <List {...person} />
        ))}
        <button onClick={() => setPeople([])} className='btn'>
          clear all
        </button>
      </section>
    </main>
  );
};
export default App;
