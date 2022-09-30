import { IconProps } from "../@types/common";

const IconChevronRight = ({ color }: IconProps) => {
  return (
    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.63318 0.154058L9.69329 8.25618C10.1022 8.667 10.1022 9.333 9.69329 9.74382L1.63318 17.8459C1.42897 18.0514 1.09738 18.0514 0.893169 17.8459L0.15316 17.1021C-0.0510531 16.8967 -0.0510531 16.5637 0.15316 16.3583L7.10378 9.37218C7.30799 9.16676 7.30799 8.83324 7.10378 8.62835L0.15316 1.64171C-0.0510531 1.43629 -0.0510531 1.10329 0.15316 0.897882L0.893169 0.154058C1.09738 -0.0513533 1.42897 -0.0513533 1.63318 0.154058" fill={color} />
    </svg>
  )
}

export default IconChevronRight;
