import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Typography } from '@material-tailwind/react';
import Videos from '../components/Videos';

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState(null);

    useEffect(() => {
        setVideos(null);
       
    }, [selectedCategory]);

    return (
        <div className="bg-black text-white lg:flex lg:gap-6">
            <div className="">
                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            </div>
            <div className="lg:w-3/4 p-5 h-[90vh] overflow-x-auto flex flex-col gap-4">
                <Typography variant="h2" className="flex gap-4">
                    {selectedCategory}
                    <span className="text-red-500">videos</span>
                </Typography>
                <div className="mt-3">
                    <Videos videos={videos} />
                </div>
            </div>
        </div>
    );
}
