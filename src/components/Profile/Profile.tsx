// @types
import { ClassNameI } from "../../@types/project";
// mocks
import { avatarMediumSize } from "../../mocks/avatarData";
import { employeesData } from "../../mocks/employeesData";
// utils
import { getSize } from "../../utils/common";
// components
import Avatar from "../Avatar/Avatar";

const Profile: ClassNameI = () => {
  const currentUser = employeesData[0];
  const currentAvatarSize = getSize(avatarMediumSize);

  return (
    <div className="profile">
      <div className="profile__info">
        <p>
          <span>60 000</span>
          <span className="profile__info--currency">₽</span>
        </p>
      </div>
      <img className="profile__notifications" src="./icons/ic_bell.svg" />
      <a className="profile__menu">
        <Avatar employee={currentUser} size={currentAvatarSize} />
        <p className="profile__name">Назир</p>
        <img src="./icons/ic_chevron_down.svg" />
      </a>
    </div>
  );
}

export default Profile;
