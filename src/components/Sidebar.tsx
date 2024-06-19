'use client';
import React from 'react';
import Navigation from './Navigation';
import SidebarHeader from './SidebarHeader';
import Badge from './Badge';
import { AnimatePresence, motion } from 'framer-motion';

const Sidebar = () => {
  return (
    <>
      <AnimatePresence>
        {
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, ease: 'linear' }}
            exit={{ x: -200 }}
            className="px-6  z-[100] py-10 bg-neutral-100 max-w-[14rem] lg:w-fit  fixed lg:relative  h-screen left-0 flex flex-col justify-between"
          >
            <SidebarHeader />
            <div className="flex flex-col justify-between	h-full ">
              <Navigation />
              <Badge href="/resume" text="Read Resume" />
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
