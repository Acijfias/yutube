import { Input } from '@material-tailwind/react';
import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <div className="bg-black text-white flex items-center gap-4 justify-between p-3">
        <Link to="/">
          <img src="/favicon.ico" height="45" alt="icon" />
        </Link>
        <div className="w-95 sm:w-96">
          <Input
            className="bg-white text-black rounded-full !border-[1px] !border-white text-lg placeholder-gray-900"
            icon={<IoSearch className="text-lg text-black" />}
            placeholder="Search..."
            labelProps={{
              className: "hidden"
            }}
            containerProps={{
              className: "min-w-0"
            }}
          />
        </div>
      </div>
    </div>
  );
}
