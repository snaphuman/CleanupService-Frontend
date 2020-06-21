import React from 'react';

class ProfilePicture extends React.Component {
  render() {
    return (
      <div className="file-field-wrapper">
        <div className="file-field">
          <span>Subir fotografía</span>
          <input type="file" />
        </div>
      </div>
    )
  }
}

export default ProfilePicture;
