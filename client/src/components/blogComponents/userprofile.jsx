import React from "react";

import "./userProfile.scss";

const UserProfile = () => {
  return (
    <div className="container">
      <div className="row profile-container">
        <div className="col-md-5">
          <div className="profile-img">
            <img
              src="https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg"
              alt="User Profile"
            />
          </div>
        </div>
        <div className="col-md-7">
          <div className="user-details">
            <h2>Vishal Kumar</h2>
            <p className="user-email">vish.dev04@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
