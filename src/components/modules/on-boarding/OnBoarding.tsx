'use client';

import Button from '@/components/ui/button/Button';
import { useRouter } from 'next/navigation';

const OnBoarding = () => {
  const router = useRouter();

  const handleOnBoarding = () => {
    router.push('/on-boarding?step=learning-preferences');
  };

  return (
    <div>
      <Button
        onClick={handleOnBoarding}
        className='bg-blue-500 px-2 py-1 rounded-xl text-white cursor-pointer hover:bg-blue-600 transition-colors'
      >
        Continue On-Boarding
      </Button>
    </div>
  );
};

export default OnBoarding;
