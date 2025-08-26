'use client';

import { Badge } from '@/components/ui/badge';
import { ChatTextarea } from '@/components/ui/chat-textarea';
import { useAppSelector } from '@/global/store';
import { redirect } from 'next/navigation';
import { useState } from 'react';

const quickTags = [
  'Data Science',
  'Web Development',
  'Machine Learning',
  'Cybersecurity',
  'DevOps',
];

const Learn = () => {
  const { isFinished, getStarted } = useAppSelector((state) => state.core);
  const [learningGoal, setLearningGoal] = useState<string>('');

  if (!isFinished && !getStarted) {
    redirect('/on-boarding?step=learning-preferences');
  }

  const handleTagClick = (tag: string) => {
    const goal = `I want to learn about ${tag}.`;
    setLearningGoal(goal);
  };

  return (
    <div className='flex flex-col items-center w-full mt-20'>
      <h1 className='scroll-m-20 text-center text-3xl text-gray-600 font-semibold tracking-tight text-balance'>
        What do you want to learn today?
      </h1>
      <div className='text-center text-gray-600 mt-5'>
        <p>Get instant access to focused, distraction-free learning content.</p>
        <p>No ads, no clutter, just pure learning.</p>
      </div>
      <div className='w-full flex justify-center items-center mt-10'>
        <ChatTextarea
          placeholder='Write what you want to learn...'
          value={learningGoal}
          onChange={(e) => setLearningGoal(e.target.value)}
        />
      </div>
      <div className='flex flex-col items-center gap-2'>
        <div className='flex w-full flex-wrap gap-2 justify-center mt-5'>
          {quickTags.map((tag) => (
            <Badge
              key={tag}
              variant='secondary'
              className='cursor-pointer'
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learn;
