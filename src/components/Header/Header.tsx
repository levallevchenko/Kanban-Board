import classNames from 'classnames';
// @types
import { ClassNameInterface } from '../../@types/project';
// components
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Profile from '../Profile/Profile';

const Header: ClassNameInterface = ({className}) => {
	return (
		<header className={classNames(className, 'main-header')}>
			<Logo />
			<Navigation />
			<Profile />
		</header>
	);
}

export default Header;
