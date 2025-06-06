import MinusCircle from './minus-circle-icon';
import PlusCircle from './plus-circle-icon';
import { ICONS } from './types';

interface IconProps {
  color: string;
  size: number;
  type: string;
}

export const Icon = ({ size, color, type }: IconProps) => {
  const props = { size, color };

  switch (type) {
    case ICONS.minus_icon:
      return <MinusCircle {...props} />;
    case ICONS.plus_icon:
      return <PlusCircle {...props} />;

    default:
      return <p>Pick an Icon Type</p>;
  }
};

export default Icon;
