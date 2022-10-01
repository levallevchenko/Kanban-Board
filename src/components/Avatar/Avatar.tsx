import cn from "classnames";
import { EmployeeI } from "../../@types/employee";

// @types
import { ClassNameI } from "../../@types/project";

type AvatarProps = {
  employee: EmployeeI;
  size: {
    width: string;
    height: string;
  }
};

const Avatar: ClassNameI<AvatarProps> = ({ className, employee, size }) => {
  const { avatar, name } = employee;
  const { basic, retina, webp } = avatar;
  const { width, height } = size;

  return (
    <picture>
      <source type="image/webp" srcSet={webp} />
      <source srcSet={`${basic} 1x, ${retina} 2x`} />
      <img
        className={cn(className, 'avatar')}
        src={basic}
        srcSet={`${retina} 2x`}
        alt={`${name} (аватар)`}
        width={width}
        height={height} />
    </picture>

  )
}

export default Avatar;
