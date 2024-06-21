import React from 'react';
import Image from 'next/image';

const SidebarHeader = () => {
  return (
    <div className="flex space-x-2">
      <Image
        src={'/images/profile.jpg'}
        alt="Avatar"
        height="40"
        width="40"
        className="object-cover object-top rounded-full flex-shrink-0"
      />
      <div className="flex text-sm flex-col m-auto">
        <p className="font-bold text-primary">Ali Chowdhury</p>
        <p className="font-light text-secondary">Developer</p>
      </div>
    </div>
  );
};

export default SidebarHeader;
