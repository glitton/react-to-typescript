export type PeopleProps = {
  id: number;
  name: string;
  age: number;
  image: string;
}[];

const List = ({ people }: PeopleProps) => {
  return (
    <>
      {people.map((person) => {
        const { id, image, name, age } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
