import { IconProps } from "../@types/common";

const IconPlayButton = ({ color }: IconProps) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 10C0 4.46939 4.46939 0 10 0C15.5306 0 20 4.46939 20 10C20 15.5306 15.5306 20 10 20C4.46939 20 0 15.5306 0 10ZM1.66122 10C1.66122 14.5959 5.40408 18.3388 10 18.3388C14.5959 18.3388 18.3388 14.5959 18.3388 10C18.3388 5.40408 14.5959 1.66122 10 1.66122C5.40408 1.66122 1.66122 5.40408 1.66122 10Z" fill={color} />
      <path fillRule="evenodd" clipRule="evenodd" d="M8.55511 5.19184L14.3388 9.36327C14.8204 9.8449 14.7837 10.2816 14.3429 10.7224L8.55511 14.8939C8.0245 15.249 7.23674 15.0898 7.23674 14.2122V5.82857C7.23674 4.94694 8.0898 4.88163 8.55511 5.19184ZM12.4245 10L8.89388 7.4449V12.5551L12.4245 10Z" fill={color} />
    </svg>

  )
}

export default IconPlayButton;
