'use client';

import { useAppSelector } from '@/global/store';
import React from 'react';

const LearningPage = () => {
  const { chatPrompt } = useAppSelector((state) => state.core);
  return <div>You said: {chatPrompt}</div>;
};

export default LearningPage;
