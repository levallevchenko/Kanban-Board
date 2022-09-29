// @types
import { ClassNameInterface } from "../../@types/project";
// components
import Avatar from "../Avatar/Avatar";

const Profile: ClassNameInterface = () => {
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
				<Avatar src="./img/Avatar1.png" />
				<p className="profile__name">Назир</p>
				<img src="./icons/ic_chevron_down.svg" />
			</a>
		</div>
	);
}

export default Profile;
