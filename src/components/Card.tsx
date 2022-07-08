import React from 'react';

const Card = ({ text, number }: { text: string; number: number }) => {
  return (
    <div className="border bg-white dark:bg-dark-bg md:w-52 w-auto h-24 md:h-32 mx-2 md:ml-20 mt-6 text-center flex flex-col justify-center items-center rounded-lg">
      <h4 className="font-['sans'] font-medium text-base dark:text-dark-text-fill">{text}</h4>
      <h1 className="font-['sans] font-semibold text-lg mt dark:text-dark-text-fill">{number}</h1>
    </div>
  );
};

export default Card;
