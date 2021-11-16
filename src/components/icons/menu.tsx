import { IIcon } from '.';

export const MenuIcon = ({ className }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} h-5 w-5`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);
