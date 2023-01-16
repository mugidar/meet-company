import User from "./User";

const Users = ({ users, ...rest}) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретились (раз)</th>
            <th scope="col">Оценка</th>
            <th scope="col">Закладки</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User  key={user._id} {...rest} {...user} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
