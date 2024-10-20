import Card from "./Card";

const Cards = ({ users, hanldleRemove }) => {
  return (
    <div
      className={
        users.length
          ? `flex items-center gap-3 flex-wrap w-full max-h-96 overflow-auto bg-zinc-200 rounded-md p-3 shadow-lg`
          : ``
      }
    >
      {users.map((elem, index) => {
        return (
          <Card
            key={index}
            index={index}
            user={elem}
            hanldleRemove={hanldleRemove}
          />
        );
      })}
    </div>
  );
};

export default Cards;
