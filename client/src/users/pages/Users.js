import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: '1',
      name: 'Santiago Biolatto',
      image: 'https://www.tsensor.online/wp-content/uploads/2020/04/avatar-icon-png-105-images-in-collection-page-3-avatarpng-512_512.png',
      places: 1,
    },
    {
      id: '2',
      name: 'Juan Perez',
      image: 'https://image.flaticon.com/icons/png/512/147/147144.png',
      places: 3,
    }
  ];
  return(
    <div>
      <UsersList items={USERS} />
    </div>
  );
};

export default Users;
