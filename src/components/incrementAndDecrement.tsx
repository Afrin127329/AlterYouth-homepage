import React, { useState } from "react";

const IncrementDecrementComponent: React.FC = () => {
  const basePrice: number = 1650;
  const [quantity, setQuantity] = useState<number>(1);
  const [subtotal, setSubtotal] = useState<number>(basePrice);

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("en-US").format(price);
  };

  const handleIncrement = (): void => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setSubtotal(newQuantity * basePrice);
  };


  const handleDecrement = (): void => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setSubtotal(newQuantity * basePrice);
    }
  };

  return (
    <div className="flex gap-4 items-center justify-between">
      <div className="relative flex items-center max-w-[8rem]">
        <button
          type="button"
          id="decrement-btn"
          className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
          onClick={handleDecrement}
        >
          <svg
            className="w-3 h-3 text-gray-900"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h16"
            />
          </svg>
        </button>
        <input
          type="text"
          id="incrementAndDecrementInput"
          name="quantity"
          readOnly
          className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"
          required
          value={quantity}
        />
        <button
          type="button"
          id="increment-btn"
          className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
          onClick={handleIncrement}
        >
          <svg
            className="w-3 h-3 text-gray-900"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>
      <div className=" flex items-center">
        <span className="mr-3 text-2xl leading-relaxed font-bold text-gray-800">BDT</span>
        <p
          className="title-font font-medium text-xl text-gray-800"
          id="subTotalPrice"
        >
          <span className="font-bold text-2xl">{formatPrice(subtotal)}</span>/month
        </p>
      </div>
    </div>
  );
};

export default IncrementDecrementComponent;
