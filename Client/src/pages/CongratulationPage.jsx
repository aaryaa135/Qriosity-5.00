import React, { useEffect, useState } from 'react';
import Navbar from "../common/components/Navbar";

const CongratulationsPage = () => {
  const [loading, setLoading] = useState(true);
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowElements(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="main min-h-screen fixed inset-0 bg-cover overflow-hidden" 
          style={{ backgroundImage: 'url("../../src/assets/low-angle-shot-mesmerizing-starry-sky 1.png")' }}>
          <Navbar />
          
          <div className='flex flex-col'>
            <div className={`text-[#ffff] text-xl top-0 right-1/2 transform -translate-x-1/2 flex mx-auto items-center hidden sm:block md:block`}>
              Congratulations on your Achievement!
            </div>
          </div>

          <div className="item-container">
            <div className="relative svgclass min-w-screen">
              <img
                src="https://media.giphy.com/media/3o6gE5aYJ5eQnbXt6g/giphy.gif"
                alt="Confetti"
                className="absolute left-[80vw] transform -translate-x-1/2 -translate-y-1/2 h-[5vh] w-[5vh] sm:h-[15vh] sm:w-[15vh] md:h-[10vh] md:w-[10vh] lg:h-[8vh] lg:w-[8vh] animate-float"
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Trophy_Icon.svg/1024px-Trophy_Icon.svg.png"
                alt="Trophy"
                className="absolute z-9 top-[20vh] left-[60vw] transform -translate-x-1/2 -translate-y-1/2 h-[45vh] w-[45vw] sm:h-[25vh] sm:w-[35vw] md:h-[20vh] md:w-[30vw] lg:h-[50vh] lg:w-[50vw] animate-float"
              />

              <div className='text-[#FDF0D1] text-xl hidden sm:block md:block lg:text-3xl xl:text-3xl absolute top-[24vh] left-[20vw] sm:top-[10vh] md:top-[20vh] sm:left-[10vw] md:left-[20vw] text-bold transform -translate-x-1/2 flex items-center animate-fade-in'>
                Well Done! You've made it!
              </div>
            </div>

            <div className='top-1/2 left-1/4 right-1/4 absolute z-99 animate-fade-in-delayed'>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Mars_2020_logo.svg"
                alt="Mars"
              />
            </div>

            {/* Celebration effects */}
            <div className="absolute top-0 inset-x-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-confetti"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${3 + Math.random() * 2}s`
                  }}
                >
                  {['🎉', '🎊', '⭐', '✨'][Math.floor(Math.random() * 4)]}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes confetti {
          0% { transform: translateY(-10vh) rotate(0deg) scale(1); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg) scale(0.5); opacity: 0; }
        }
        .animate-float {
          animation: float 3s infinite ease-in-out;
        }
        .animate-confetti {
          animation: confetti 3s forwards;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-fade-in-delayed {
          animation: fadeIn 1s ease-out 0.5s forwards;
          opacity: 0;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default CongratulationsPage;