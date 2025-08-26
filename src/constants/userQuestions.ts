import { CommonQuestions } from '@/types/userQuestions';
import {
  PiBroomDuotone,
  PiCardsThreeDuotone,
  PiChalkboardTeacherDuotone,
  PiChartDonutDuotone,
  PiCirclesThreePlusDuotone,
  PiCloudCheckDuotone,
  PiDevicesDuotone,
  PiFanDuotone,
  PiGlobeHemisphereWestDuotone,
  PiLockKeyDuotone,
  PiReadCvLogoDuotone,
  PiUsersThreeDuotone,
} from 'react-icons/pi';

export const KEY = 'onboarding';

export const learningPreferences: CommonQuestions[] = [
  {
    title: 'Web Development',
    value: 'web development',
    description:
      'Learn the fundamentals of web development including HTML, CSS, and JavaScript.',
    icon: PiGlobeHemisphereWestDuotone,
    color: '#FF5733',
  },
  {
    title: 'App Development',
    value: 'app development',
    description: 'Explore how to build applications for iOS, Android and pcs.',
    icon: PiDevicesDuotone,
    color: '#33FF57',
  },
  {
    title: 'AI & Machine Learning',
    value: 'ai ml',
    description:
      'Dive into Artificial Intelligence and Machine Learning concepts and applications.',
    icon: PiBroomDuotone,
    color: '#3357FF',
  },
  {
    title: 'Data Science & Analytics',
    value: 'data science and analytics',
    description:
      'Understand data analysis, visualization, and machine learning techniques.',
    icon: PiChartDonutDuotone,
    color: '#FF33A1',
  },
  {
    title: 'Cloud Computing',
    value: 'cloud computing',
    description:
      'Learn about cloud services, deployment models, and architecture.',
    icon: PiCloudCheckDuotone,
    color: '#FF8C33',
  },
  {
    title: 'Cybersecurity',
    value: 'cybersecurity',
    description:
      'Gain knowledge in securing systems, networks, and data from cyber threats.',
    icon: PiLockKeyDuotone,
    color: '#8C33FF',
  },
  {
    title: 'DevOps & Automation',
    value: 'devops and automation',
    description:
      'Master DevOps practices, CI/CD pipelines, and automation tools.',
    icon: PiFanDuotone,
    color: '#33FFF5',
  },
];

export const learningMethods: CommonQuestions[] = [
  {
    title: 'Step-by-Step Guides',
    value: 'step-by-step guides',
    description:
      'Follow detailed guides that walk you through each step of the learning process.',
    icon: PiCardsThreeDuotone,
    color: 'var(--color-green-700)',
  },
  {
    title: 'Hands-on Projects & practice',
    value: 'hands-on projects and practice',
    description:
      'Apply your knowledge through practical projects and exercises.',
    icon: PiCirclesThreePlusDuotone,
    color: 'var(--color-blue-700)',
  },
  {
    title: 'Tutorials & Video Lectures',
    value: 'tutorials and video lectures',
    description:
      'Watch video tutorials that explain concepts visually and interactively.',
    icon: PiChalkboardTeacherDuotone,
    color: 'var(--color-red-700)',
  },
  {
    title: 'Reading Articles & Blogs',
    value: 'reading articles and blogs',
    description:
      'Stay updated with the latest trends and insights through articles.',
    icon: PiReadCvLogoDuotone,
    color: 'var(--color-amber-700)',
  },
  {
    title: 'Community Discussions',
    value: 'community discussions',
    description:
      'Participate in forums and communities to share knowledge and learn.',
    icon: PiUsersThreeDuotone,
    color: 'var(--color-violet-700)',
  },
];

export const learningGoals: CommonQuestions[] = [
  {
    title: 'I want to build a verifiable skill portfolio',
    value: 'skill portfolio',
    description: 'Create a portfolio showcasing your skills and projects.',
    icon: PiReadCvLogoDuotone,
    color: 'var(--color-green-700)',
  },
  {
    title: "I'm upskilling for work or freelance",
    value: 'personal growth',
    description: 'Learn new skills for personal development and satisfaction.',
    icon: PiBroomDuotone,
    color: 'var(--color-blue-700)',
  },
  {
    title: 'I just love learning new things',
    value: 'love learning',
    description: 'Explore new topics and expand your knowledge base.',
    icon: PiGlobeHemisphereWestDuotone,
    color: 'var(--color-red-700)',
  },
  {
    title: "I'm curious and want to earn while learning",
    value: 'earn while learning',
    description: 'Pursue your interests and hobbies through learning.',
    icon: PiDevicesDuotone,
    color: 'var(--color-amber-700)',
  },
  {
    title: "Not sure yet, I'm exploring",
    value: 'just exploring',
    description: 'Pursue your interests and hobbies through learning.',
    icon: PiDevicesDuotone,
    color: 'var(--color-amber-700)',
  },
];

export const learningTime: CommonQuestions[] = [
  {
    title: 'Less than 1 hour a day',
    value: 'less than 1 hour',
    description: 'Ideal for busy schedules or quick learning sessions.',
    icon: PiLockKeyDuotone,
    color: 'var(--color-green-700)',
  },
  {
    title: '1-2 hours a day',
    value: '1-2 hours',
    description: 'Perfect for consistent daily learning.',
    icon: PiFanDuotone,
    color: 'var(--color-blue-700)',
  },
  {
    title: '2-3 hours a day',
    value: '2-3 hours',
    description: 'Great for in-depth learning and practice.',
    icon: PiChartDonutDuotone,
    color: 'var(--color-red-700)',
  },
  {
    title: '3+ hours a day',
    value: '3+ hours',
    description: 'For dedicated learners who want to immerse themselves.',
    icon: PiCloudCheckDuotone,
    color: 'var(--color-amber-700)',
  },
  {
    title: 'I prefer flexible learning',
    value: 'flexible learning',
    description: 'Learn at your own pace and schedule.',
    icon: PiCirclesThreePlusDuotone,
    color: 'var(--color-violet-700)',
  },
  {
    title: 'I want to learn on weekends',
    value: 'weekend learning',
    description: 'Focus on learning during weekends or free time.',
    icon: PiUsersThreeDuotone,
    color: 'var(--color-green-700)',
  },
];
