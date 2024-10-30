import React from 'react';
import "./User.css";

const User = (props) => {
    return (
      <div className="user">
        <div className="data">
          {props.user.data} {props.user.id} {props.user.avatarUrl}
          {props.user.birthday} {props.user.department} {props.user.firstName}
        </div>
        <button>Удалить</button>
      </div>
    );
};

export default User;