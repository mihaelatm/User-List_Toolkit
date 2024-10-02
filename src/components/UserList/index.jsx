import { useSelector } from "react-redux";
import UserItem from "../UserItem";

function UserList() {
  const users = useSelector((state) => state.user.users);

  return (
    <div>
      <h1>User List</h1>
      <div>
        {users.map((user) => {
          return <UserItem key={user.id} {...user} />;
        })}
      </div>
    </div>
  );
}

export default UserList;
