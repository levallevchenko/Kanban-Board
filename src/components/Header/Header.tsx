import cn from 'classnames';
// @types
import { ClassNameI } from '../../@types/project';
// components
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Profile from '../Profile/Profile';

const Header: ClassNameI = ({ className }) => {
	return (
		<header className={cn(className, 'main-header')}>
			<Logo />
			<Navigation />
			<Profile />
		</header>
	);
}

export default Header;
