import cn from "classnames";
// @types
import { ClassNameI } from "../../@types/project";
// icons
import IconPlayButton from "../../icons/IconPlayButton";

type BoardBreadcrumbsProps = {
  breadcrumbs: string[];
};

const BoardBreadcrumbs: ClassNameI<BoardBreadcrumbsProps> = ({ className, breadcrumbs }) => {
  const lastBreadcrumbIndex = breadcrumbs.length - 1;

  return (
    <div className={cn(className, 'breadcrumbs')}>
      <nav className="breadcrumbs__nav">
        <IconPlayButton color="var(--color-pink)" />
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
