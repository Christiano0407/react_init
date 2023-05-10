//**! ==== Array Data ==== This is not Component => < */
const users = [
  {
    id: 1,
    name: "Robot5",
    image: "https://robohash.org/user5",
  },
  {
    id: 2,
    name: "Robot 6",
    image: "https://robohash.org/user1",
  },
];

export function Users() {
  return (
    <>
      {users.map((user, index) => {
        return <h2 key={index}>{user.name}</h2>;
      })}
    </>
  );
}
