import React, { useState, useEffect } from 'react';
import PuesVivo from './AnimatedHeader';
import PuesMuero from './RottenHeader';
import MurderModal from './MurderModal';

const KawaiiHeader = () => {
  const [meMori, setMeMori] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [count, setCount] = useState(0);

  const closeModal = () => {
    setModalOpen(false);
    setMeMori(false);
    setCount(0);
  };

  useEffect(() => {
    if (count === 4) {
      setMeMori(true);
      setModalOpen(true);
    }
  }, [count]);

  return (
    <div>
      <div className="container flex justify-center">
        {meMori ? (
          <PuesMuero />
        ) : (
          <PuesVivo onClick={() => setCount((prevCount) => prevCount + 1)} />
        )}
      </div>
      <div className="absolute w-screen z-100 flex justify-center items-center">
        <div className="w-1/2">
          <MurderModal openModal={modalOpen} onClick={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default KawaiiHeader;
