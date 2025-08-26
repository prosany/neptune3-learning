import LearningLayout from '@/layouts/LearningLayout';
import '@/styles/core.css';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Learning | Neptune 3',
  description: 'Neptune 3 Learning - A platform for learning',
};

export default function LearningCoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LearningLayout>{children}</LearningLayout>;
}
