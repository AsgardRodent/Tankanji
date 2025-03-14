import React from 'react';
import NewNavbar from '../navbar/new_navbar';
import bg from '../../Images/Toji.jpeg'
import '../levels/levels.css'

const Levels = () => {
  return (
      <div
        className="w-full h-screen bg-cover bg-center flex flex-col items-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
      <div className='w-full h-screen bg-white/35'>
      <div className="w-full">
        <NewNavbar />
      </div>
      <div className="w-full mt-8 flex flex-col justify-center items-center pt-[50px]">
        <h1 className="text-3xl text-[#18517A] font-bold">
          Unlock Japanese,
        </h1>
        <h1 className="text-3xl text-[#18517A] font-bold">
          One KANJI at a Time
        </h1>
      </div>
      {/* <div className="mt-4 flex justify-center items-center">
        <svg width="600" height="100" viewBox="0 0 58 15" fill="none" className="pl-4 mx-auto text-[#18517A]">
          <path className='Animated-class' d="M7.535 0.984999C7.475 1.42 7.43 2.155 7.4 2.74C7.385 3.46 7.4 4.315 7.4 5.17C7.4 6.835 7.685 10.06 7.685 11.32C7.685 12.655 6.995 13.915 4.49 13.915C2.33 13.915 0.575 13.21 0.575 11.185C0.575 9.61 1.925 8.38 4.67 8.38C7.805 8.38 10.61 9.955 12.14 11.365L10.985 13.165C9.5 11.665 7.115 10.045 4.4 10.045C3.23 10.045 2.525 10.435 2.525 11.095C2.525 11.815 3.275 12.1 4.325 12.1C5.285 12.1 5.645 11.665 5.645 10.675C5.645 9.625 5.465 6.595 5.465 5.17C5.465 4.27 5.45 3.385 5.435 2.74C5.42 1.99 5.375 1.345 5.285 0.984999H7.535ZM6.395 3.85C7.28 3.85 9.905 3.79 11.585 3.61L11.66 5.395C9.965 5.545 7.325 5.62 6.395 5.62V3.85ZM24.26 8.095C24.26 7.105 23.495 6.31 22.085 6.31C20.435 6.31 18.935 6.805 18.185 7.03C17.75 7.165 17.15 7.39 16.73 7.57L16.16 5.41C16.67 5.38 17.3 5.26 17.795 5.155C18.89 4.915 20.57 4.48 22.34 4.48C24.71 4.48 26.375 5.83 26.375 8.17C26.375 11.395 23.39 13.375 19.22 13.96L18.155 12.085C21.875 11.665 24.26 10.45 24.26 8.095ZM18.365 0.894999C20.12 1.27 23.525 1.57 25.1 1.57L24.815 3.415C23.06 3.295 19.805 2.995 18.08 2.695L18.365 0.894999ZM32.255 2.11C33.365 2.23 34.76 2.29 36.35 2.29C37.82 2.29 39.545 2.2 40.685 2.08V4.075C39.635 4.165 37.79 4.255 36.35 4.255C34.79 4.255 33.485 4.18 32.255 4.09V2.11ZM33.515 8.455C33.38 8.995 33.26 9.475 33.26 9.985C33.26 10.93 34.19 11.635 36.35 11.635C38.36 11.635 40.28 11.41 41.615 11.035L41.63 13.15C40.31 13.45 38.51 13.645 36.41 13.645C32.99 13.645 31.25 12.505 31.25 10.435C31.25 9.58 31.445 8.845 31.55 8.275L33.515 8.455ZM47.675 1.525C48.155 1.57 48.59 1.585 49.1 1.585C49.745 1.585 52.55 1.45 53.465 1.345C53.96 1.3 54.305 1.225 54.515 1.165L55.7 2.545C55.385 2.74 54.815 3.115 54.515 3.37C53.435 4.225 51.965 5.455 50.945 6.265C52.955 6.055 55.445 5.905 57.26 5.905L57.275 7.675C55.835 7.585 54.32 7.585 53.405 7.705C52.04 7.9 50.885 8.875 50.885 10.105C50.885 11.29 51.815 11.755 53.165 11.905C54.005 11.995 54.89 11.98 55.445 11.935L55.055 13.915C51.2 14.08 48.965 12.91 48.965 10.42C48.965 9.49 49.505 8.56 50.06 8.05C48.68 8.155 47.015 8.38 45.5 8.65L45.335 6.835C46.13 6.745 47.18 6.625 47.96 6.535C49.295 5.65 51.26 3.955 52.19 3.115C51.575 3.16 49.715 3.25 49.1 3.31C48.74 3.34 48.23 3.4 47.765 3.445L47.675 1.525ZM61.895 9.295C63.245 9.295 64.325 10.375 64.325 11.71C64.325 13.06 63.245 14.14 61.895 14.14C60.56 14.14 59.465 13.06 59.465 11.71C59.465 10.375 60.56 9.295 61.895 9.295ZM61.895 13.06C62.645 13.06 63.245 12.46 63.245 11.71C63.245 10.975 62.645 10.375 61.895 10.375C61.16 10.375 60.545 10.975 60.545 11.71C60.545 12.46 61.16 13.06 61.895 13.06Z" fill="#18517A"/>
        </svg>
      </div> */}
      <div className="mt-4 flex justify-center items-center pt-[100px] pb-[75px]">
        <div
          className="bg-white/80 text-[#18517A] px-6 py-2 rounded-full shadow-md font-medium"
        >
          Select your level!
        </div>
      </div>
      <div className="mt-8 flex justify-center items-center gap-4">
        {['N5', 'N4', 'N3', 'N2', 'N1'].map((level) => (
          <button
            key={level}
            className="w-[260px] h-[260px] bg-white text-[#18517A] rounded-xl shadow-md flex justify-center items-center text-6xl font-bold hover:border-white hover:text-white hover:bg-[#18517A] transition-all duration-300 ease-in-out"
          >
            <div className="w-[240px] h-[240px] border-4 border-[#18517A] rounded-xl flex justify-center items-center text-6xl font-bold hover:border-white hover:text-white hover:bg-[#18517A] transition-all duration-300 ease-in-out">
            {level}
            </div>
          </button>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Levels;

