import { PeopleProps } from "./App";

const List = ({ ...person }: PeopleProps) => {
  const { id, name, image, age } = person;
  return (
    <article key={id} className='person'>
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};

export default List;
