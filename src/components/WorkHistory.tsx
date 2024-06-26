'use client';
import { timeline } from '@/constants/timeline';
import React from 'react';
import { Paragraph } from './Paragraph';
import { Heading } from './Heading';

export const WorkHistory = () => {
  return (
    <div>
      {timeline.map((item, index) => (
        <div
          className="flex md:flex-row flex-col space-y-10 md:space-y-0 space-x-10 my-20 relative"
          key={`timeline-${index}`}
        >
          <div>
            <Paragraph className="w-40 text-neutral-500">{item.date}</Paragraph>
          </div>
          <div>
            <Heading
              as="h5"
              className="text-lg md:text-lg lg:text-lg text-emerald-500"
            >
              {item.company}
            </Heading>
            <Paragraph className="text-base md:text-base lg:text-base font-semibold text-neutral-500">
              {item.title}
            </Paragraph>
            <Paragraph className="text-sm md:text-sm lg:text-sm mb-4 text-neutral-500">
              {item.location}
            </Paragraph>

            {item.responsibilities.map((responsibility) => (
              <div key={responsibility}>
                <Paragraph className="flex space-x-1 items-start my-2 text-neutral-500">
                  {responsibility}
                </Paragraph>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

