import React from "react";
import UsersList from "../components/UsersList";
import Faker from 'faker'

const Users = () => {
  const USERS = [
    {
      id: '1',
      name: Faker.name.findName(),
      image: Faker.internet.avatar(),
      places: 1,
    },
    {
      id: '2',
      name: Faker.name.findName(),
      image: Faker.internet.avatar(),
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
