import { useState } from "react";
import data from "./data";
import List, { PeopleProps } from "./List";

const App = () => {
  const [people, setPeople] = useState<PeopleProps[]>(data);

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])} className='btn'>
          clear all
        </button>
      </section>
    </main>
  );
};
export default App;
