import React from 'react';
import { Avocado } from '@components/SVGIcons';

type AnimatedHeaderProps = {
  onClick: () => void;
};

const AnimatedHeader = ({ onClick }: AnimatedHeaderProps) => (
  <div
    className="text-5xl text-green font-tilt mt-8 ml-28 w-screen"
    onClick={onClick}
  >
    <div className="flex items-center justify-center">
      Platzi
      <div className="animate-bounce cursor-pointer">
        <Avocado size="70px" />
      </div>
      Avo
    </div>
  </div>
);

export default AnimatedHeader;
