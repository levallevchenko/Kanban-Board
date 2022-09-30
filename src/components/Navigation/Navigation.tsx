import { ClassNameI } from "../../@types/project";
// mocks
import { navListData } from "../../mocks/navListData";

const Navigation: ClassNameI = () => {
	return (
		<nav className="main-nav" >
			<ul className="main-nav__list">
				{navListData.map((navItemData) => (
					<li className="main-nav__item" key={navItemData.name}>
						<a href="#" className={`main-nav__link ${navItemData.isActive && 'main-nav__link--active'}`}>{navItemData.name}</a>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Navigation;
