import React from 'react';
import { categories } from '../utils/constant';
import { Button } from '@material-tailwind/react';

export default function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <div>
      <div className="px-2 sidebar py-2 w-52  lg:flex-col flex gap-5 overflow-y-scroll">
        {categories.map((e) => (
          <div key={e.name} className="">
            <Button
              onClick={() => setSelectedCategory(e.name)}
              className={`${e.name === selectedCategory ? 'bg-red-500' : "bg-transparent"} gap-3 w-full group rounded-full hover:bg-red-500 text-white shadow-none border-none flex items-center transition-all duration-300 ease-in`}
            >
              <div className={`${e.name === selectedCategory ? 'text-white' : "text-red-500"} flex items-center group-hover:text-white text-2xl transition-all duration-300 ease-in`}>
                {e.icon}
              </div>
              <h1 className="text-md capitalize">{e.name}</h1>
            </Button>
          </div>
        ))}
        <h1 className='text-xs text-center'>Copyright © 2024 Boyzayev Aziz</h1>
      </div>
    </div>
  );
}
