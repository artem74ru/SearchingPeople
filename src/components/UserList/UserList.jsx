import React from 'react';
import "./UserList.css";
import User from '../User/User';

const UserList = ({users}) => {
    return (
      <>
        {users.map((user) => (
          <User user={user} key={user.id} department={user.department} />
        ))}
      </>
    );
};

export default UserList;