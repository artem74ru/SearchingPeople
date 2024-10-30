import React from 'react';
import "./UserList.css"
import User from '../User/User';

const UserList = ({users}) => {
    return (
      <>
        {users.map((user, index) => (
          <User user={user} key={user.id}  />
        ))}
      </>
    );
};

export default UserList;