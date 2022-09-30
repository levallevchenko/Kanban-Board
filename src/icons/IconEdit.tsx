import { IconProps } from "../@types/common";

const IconEdit = ({ color }: IconProps) => {
  return (
    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.5">
        <path fillRule="evenodd" clip-rule="evenodd" d="M0.0254627 13.5583L1.07112 8.64522C1.07112 8.52226 1.13142 8.43124 1.22061 8.34044L8.72698 0.680677C9.30173 0.00937206 10.8616 -0.436206 11.9559 0.680677L13.332 2.08492C14.2226 2.9935 14.2226 4.47093 13.332 5.37971L5.82566 13.0393C5.76516 13.101 5.67617 13.1625 5.55536 13.1918L0.71223 14.3203C0.422028 14.3645 -0.124032 14.1768 0.0254627 13.5583ZM12.4961 4.52669C12.9441 4.06946 12.9441 3.3659 12.4961 2.90867L11.1199 1.50442C10.6834 1.05885 9.97092 1.05885 9.53425 1.50442L2.68566 8.49267H3.46405C3.79162 8.49267 4.06162 8.76849 4.06162 9.10245V10.108H5.04708C5.37465 10.108 5.64455 10.3835 5.64455 10.7178V11.4828L12.4961 4.52669ZM4.45243 12.1862V11.3305H3.46698C2.94981 11.3803 2.8694 10.8467 2.8694 10.7208V9.71222H2.03082L1.34112 12.9163L4.45243 12.1862Z" fill={color} />
      </g>
    </svg>
  )
}

export default IconEdit;
