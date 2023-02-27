import React from 'react';

const MurderModal = ({
  openModal,
  onClick
}: {
  openModal: boolean;
  onClick: () => void;
}) => {
  return (
    <>
      {openModal && (
        <div>
          <div className="inset-0 fixed bg-gray opacity-75 z-10"></div>
          <div className="flex bg-cream justify-center items-center h-72 rounded-lg self-center justify-self-center mt-8 z-50  shadow-sm fixed">
            <div className=" px-16 py-4 rounded-md text-center">
              <p className=" text-tree text-2xl font-tilt p-4">
                Mataste al aguacate 🥲{' '}
              </p>
              <p className="font-karla-bold text-lg">
                Lo tocaste tanto que lo mataste.
              </p>
              <p className=" font-karla text-base">
                Por otro lado, eres una persona muy curiosa y has descubierto
                esto.
              </p>

              <button
                className="bg-terracotta px-4 py-2 rounded-md text-md text-white font-tilt mt-8"
                onClick={onClick}
              >
                Ay, lo siento
              </button>
              <button
                className="border-2 border-green px-7 py-2 ml-2 rounded-md text-md text-white font-tilt mt-8"
                onClick={onClick}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MurderModal;
