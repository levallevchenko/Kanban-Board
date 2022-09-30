import { IconProps } from "../@types/common";

const IconBell = ({ color }: IconProps) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M19.8336 18.2158L14.6588 13.0027C14.4645 12.8073 14.4451 12.5062 14.5954 12.2753C16.7171 9.02105 16.2222 4.54567 13.092 1.87256C10.08 -0.698844 5.49545 -0.610845 2.57719 2.06798C-0.772506 5.14281 -0.857077 10.3765 2.32462 13.5604C5.03774 16.2758 9.23714 16.6055 12.3211 14.5656C12.5525 14.4124 12.856 14.4324 13.0514 14.629L18.2148 19.8312C18.4382 20.0558 18.8005 20.0564 19.0245 19.8324L19.8325 19.0238C20.0554 18.8009 20.0559 18.4398 19.8336 18.2158V18.2158ZM3.94061 11.9427C1.73262 9.73304 1.73262 6.13765 3.94061 3.92796C6.14859 1.71827 9.74114 1.7177 11.9491 3.92796C14.1571 6.13765 14.1571 9.73304 11.9491 11.9427C9.74114 14.1524 6.14859 14.1524 3.94061 11.9427V11.9427Z" fill={color} />
    </svg>

  )
}

export default IconBell;
