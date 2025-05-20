import React from 'react';

const GoldContentHighlights = () => {
  const highlights = [
    {
      title: 'Precision pricing. No fluff.',
      description:
        'Make smarter trades with gold-specific charts, tools, and insights.',
    },
    {
      title: 'Built for serious gold moves.',
      description:
        'Get real-time alerts powered by AI to catch golden opportunities.',
    },
    {
      title: 'Every millisecond counts. We make them matter.',
      description:
        'Get help from real trading pros whenever markets are open.',
    },
  ];

  return (
    <section className="bg-[#0b1244] text-white  py-6 md:py-16">
      <div className="max-w-5xl mx-auto px-5 md:px-0">
        <div className='text-center text-white pb-10'>
        <h2 className="text-xl md:text-4xl font-bold mb-4 px-5">
        Trade Gold Like It’s Meant to Be
                    </h2>
                   
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'
       >
        {highlights.map((item, index) => (
          <div
            key={index}
            className={`
              bg-gradient-to-br from-[#1b1f6b] to-[#181a2e]
              rounded-xl px-10 py-14 text-center 
              transition-transform duration-500 ease-in-out 
              hover:scale-110 shadow-lg hover:bg-gradient-to-bl`}
          >
            <h3 className="font-semibold text-lg mb-6 text-secondary">{item.title}</h3>
            <p className="text-sm md:text-base text-white leading-7">{item.description}</p>
          </div>
        ))}
      </div>
   
      </div>
    </section>
  );
};

export default GoldContentHighlights;