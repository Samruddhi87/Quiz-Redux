import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";
const Users = () => {
  const [searchParamas, setSearchParamas] = useSearchParams();
  const showActiveUser = searchParamas.get('filter') === 'active';
  return (
    <div className=" users">
      <h2>User 1</h2>
      <h2>User 2</h2>
      <h2>User 3</h2>
      <Outlet /> {/* which makes every make compoenet to render  */}
      <div>
        <button onClick={() => setSearchParamas({ filter: "active" })}>
          Active users
        </button>
        <button onClick={() => setSearchParamas({})}>Reset filter</button>
      </div>
      {showActiveUser ? (
        <h2> Showing active user</h2>
      ) : (
        <h2> showing all users</h2>
      )}
    </div>
  );
};
export default Users;
