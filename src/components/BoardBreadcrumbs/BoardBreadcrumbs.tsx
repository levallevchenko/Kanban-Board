import classNames from "classnames";
// @types
import { ClassNameInterface } from "../../@types/project";

type BoardBreadcrumbsProps = {
	breadcrumbs: string[];
};

const BoardBreadcrumbs: ClassNameInterface<BoardBreadcrumbsProps> = ({ className, breadcrumbs }) => {
	const lastBreadcrumbIndex = breadcrumbs.length - 1;

	return (
		<div className={classNames(className, 'breadcrumbs')}>
			<nav>
				<ul className="breadcrumbs__list">
					{breadcrumbs.map((breadcrumb, id) => (
						<li className="breadcrumbs__item" key={`${id}-breadcrumb`}>
							{
								id === lastBreadcrumbIndex 
									? <p className="breadcrumbs__item--current">{breadcrumb}</p>
									: <a className="breadcrumbs__item--link" href="#">{breadcrumb}</a>
							}
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default BoardBreadcrumbs;