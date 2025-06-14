import React from 'react'

const stats = [
  { value: '367', label: ['Job Posted', 'Today'] },
  { value: '2+', label: ['Millions Daily', 'Active Users'] },
  { value: '5K', label: ['Trusted By Big', 'Companies'] },
  { value: '10M', label: ['Over 20 Million', 'Stories Shared'] },
];

function Stats() {
  return (
    <div className='bg-[#0d1121e8] font-inter px-6 sm:px-12 md:px-16 py-12 grid grid-cols-1 sm:grid-cols-2 xmd:grid-cols-4 gap-6 place-items-center text-center'>
      {stats.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <p className="text-4xl font-bold text-[#0667ce]">{item.value}</p>
          <div className="text-zinc-50 leading-tight text-[15px]">
            {item.label.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Stats;
