import React from 'react';

import { PosMeMuero } from '@components/SVGIcons';

const RottenHeader = () => (
  <div className="text-5xl text-tree font-tilt mt-8 ml-28 w-screen">
    <div className="flex items-center justify-center">
      Platzi
      <div className="animate-bounce cursor-pointer">
        <PosMeMuero size="70px" />
      </div>
      Avo
    </div>
  </div>
);

export default RottenHeader;
