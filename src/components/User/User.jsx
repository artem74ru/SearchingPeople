import React from 'react';
import "./User.css";

const User = (props) => {
    return (
      <div className="user">
        <div className="user-data">
          <div className="user-avatar"><img src="{props.user.avatarUrl}" alt="Photo"/></div>
          <div>
            <div className="user-name-surname-tag">{props.user.firstName} {props.user.lastName} {props.user.userTag}</div>
            <div className="department">{props.user.department}</div>
          </div>
        </div>
      </div>
    );
};

export default User;