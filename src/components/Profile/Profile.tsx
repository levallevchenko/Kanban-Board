// @types
import { ClassNameI } from "../../@types/project";
import IconBell from "../../icons/IconBell";
// mocks
import { avatarMediumSize } from "../../mocks/avatarData";
import { employeesData } from "../../mocks/employeesData";
// utils
import { getSize } from "../../utils/common";
// components
import Avatar from "../Avatar/Avatar";
import IconButton from "../IconButton/IconButton";

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
      <IconButton
        className="profile__notification"
        name="Посмотреть уведомления"
        icon={<IconBell color="var(--color-grey-nav)" />}
        handleClick={() => { }}
      />
      <a className="profile__menu">
        <Avatar employee={currentUser} size={currentAvatarSize} />
        <p className="profile__name">Назир</p>
        <img src="./img/ic_chevron_down.svg" />
      </a>
    </div>
  );
}

export default Profile;
