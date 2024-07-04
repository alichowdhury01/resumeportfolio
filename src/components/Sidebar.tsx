'use client';
import React, { useState } from 'react';
import Navigation from './Navigation';
import SidebarHeader from './SidebarHeader';
import Badge from './Badge';
import { AnimatePresence, motion } from 'framer-motion';
import { IconLayoutSidebarRightCollapse } from '@tabler/icons-react';

const isMobile = () => {
  if (typeof window === 'undefined') return false;
  const width = window.innerWidth;
  return width < 1024;
};

const Sidebar = () => {
  const [open, setOpen] = useState(isMobile() ? false : true);
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, ease: 'linear' }}
            exit={{ x: -200 }}
            className="px-6 z-[100] py-10 bg-neutral-100 max-w-[14rem] lg:w-fit fixed lg:relative h-screen left-0 flex flex-col justify-between"
          >
            <SidebarHeader />
            <div className="flex flex-col justify-between	h-full ">
            <Navigation setOpen={setOpen} />
            <Badge href="/resume" text="Read Resume" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className="fixed lg:hidden bottom-4 right-4 h-8 w-8 border border-neutral-200 rounded-full backdrop-blur-sm flex items-center justify-center z-10"
        onClick={() => setOpen(!open)}
      >
        <IconLayoutSidebarRightCollapse className="h-4 w-4 text-secondary" />
      </button>
    </>
  );
};

export default Sidebar;
