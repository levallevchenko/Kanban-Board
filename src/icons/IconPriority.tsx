import { ClassNameI } from "../@types/project";

type IconPriorityProps = {
  priority: number;
};

const IconPriority: ClassNameI<IconPriorityProps> = ({ priority }) => {
  return (
    <svg width="34" height="14" viewBox="0 0 34 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M33.1957 5.98792L29.5856 0H25.0621L25.0526 0.00559967L29.2285 6.9324L25.0711 13.8284H29.6075L33.1957 7.87664L33.7649 6.9324L33.1957 5.98792Z" fill={priority < 5 ? '#9EA7B7' : '#9EA7B7'} />
      <path d="M26.9325 5.98792L23.3225 0H18.799L22.9653 6.9324L18.8079 13.8284H23.3444L26.9325 7.87664L27.5017 6.9324L26.9325 5.98792Z" fill={priority < 4 ? '#9EA7B7' : '#E2954D'} />
      <path d="M20.6694 5.98792L17.0593 0H12.5358L12.5263 0.00559967L16.7022 6.9324L12.5448 13.8284H17.0812L20.6694 7.87664L21.2386 6.9324L20.6694 5.98792Z" fill={priority < 3 ? '#9EA7B7' : '#E9A668'} />
      <path d="M14.9754 6.9324L14.4065 5.98792L10.7964 0H6.27288L6.26315 0.00559967L10.4392 6.9324L6.28163 13.8284H10.8183L14.4065 7.87664L14.9754 6.9324Z" fill={priority < 2 ? '#9EA7B7' : '#4BB276'} />
      <path d="M8.7125 6.9324L8.14332 5.98792L4.53325 0H0.0097254L0 0.00559967L4.17584 6.9324L0.0184783 13.8284H4.55513L8.14332 7.87664L8.7125 6.9324Z" fill={priority < 1 ? '#9EA7B7' : '#5FCE8D'} />
    </svg>

  )
}

export default IconPriority;
