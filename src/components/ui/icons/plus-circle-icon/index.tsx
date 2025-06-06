import React from 'react';
import { IconProps } from '../types';

export default function PlusCircle({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10.0003 6.66675V13.3334M6.66699 10.0001H13.3337M18.3337 10.0001C18.3337 14.6025 14.6027 18.3334 10.0003 18.3334C5.39795 18.3334 1.66699 14.6025 1.66699 10.0001C1.66699 5.39771 5.39795 1.66675 10.0003 1.66675C14.6027 1.66675 18.3337 5.39771 18.3337 10.0001Z'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  );
}
