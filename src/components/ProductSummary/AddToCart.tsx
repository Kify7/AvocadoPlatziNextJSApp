import { faCartPlus, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCartMutations } from '@store/Cart';
import React, { useState } from 'react';

const checkIcon = <FontAwesomeIcon icon={faCheck} className="text-lg" />;

const addShoppingIcon = (
  <FontAwesomeIcon icon={faCartPlus} className="text-lg py-2" />
);
// Fake a server Response, we don't care on this project
// about data persistency, but you may add it :)
const addToCartRequest = () =>
  new Promise((resolve, reject) => {
    window.setTimeout(resolve, 600);
  });

const validate = (quantity: number) => {
  let error = '';
  if (quantity < 1) error = "Can't be blank";

  return error;
};

const AddToCart = ({ product }: { product?: TProduct }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [visible, setVisible] = useState(false);
  const { addToCart } = useCartMutations();

  const toggleMessage = () => {
    setTimeout(() => {
      setVisible(false);
    }, 1000);
  };

  const handleSubmit = async () => {
    const error = validate(quantity);
    setError(error);

    if (!error && product) {
      setLoading(true);
      addToCartRequest()
        .then(() => {
          addToCart(product, quantity);
          setLoading(false);
          setQuantity(quantity);
          setVisible(true);
          toggleMessage();
        })
        .catch((err: Error) => {
          setError(`Error: ${err}` || 'Something went wrong');
          setLoading(false);
        });
    }
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setQuantity(parseInt(target.value, 10));

  return (
    <>
      <div className="flex items-center">
        <input
          className="text-base font-tilt py-2 border px-2 border-smoke-400 rounded focus:outline-green relative"
          type="number"
          placeholder="Cantidad"
          value={quantity}
          min={1}
          step={1}
          onChange={handleChange}
          formAction="hola"
          onError={() => setError(error)}
          onLoad={() => setLoading(loading)}
        />
        <button
          className="rounded bg-green hover:bg-tree text-base font-karla-bold text-cream hover:text-green px-2 pt-1  absolute right-auto ml-44"
          type="submit"
          onSubmit={handleSubmit}
          disabled={loading}
        >
          <div className="flex items-center">
            <div className="px-1">{addShoppingIcon} </div>
            <div className="px-1">Añadir al carrito</div>
          </div>
        </button>
      </div>
      {error && <div className="bg-tiger-500 absolute">{error}</div>}
      {visible && (
        <div className="text-lg mt-2 font-karla-bold text-avocado flex items-center">
          <div className="mr-2">{checkIcon} </div>
          <p>Añadido</p>{' '}
        </div>
      )}
    </>
  );
};

export default AddToCart;
