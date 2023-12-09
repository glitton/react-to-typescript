import { PeopleProps } from "./App";

const List = ({ id, name, image, age }: PeopleProps) => {
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
