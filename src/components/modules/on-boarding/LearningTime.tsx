'use client';

import Button from '@/components/ui/button/Button';
import { learningTime, KEY } from '@/constants/userQuestions';
import { coreActions } from '@/global/slice/coreSlice';
import { useAppDispatch, useAppSelector } from '@/global/store';
import { tinyStore } from '@/lib/initiateTinyBase';
import { cn } from '@/utils/cnMerge';

const LearningTime = () => {
  const dispatch = useAppDispatch();
  const { onBoarding } = useAppSelector((state) => state.core);

  const handleSelect = (value: string) => {
    tinyStore.set(KEY, { ...onBoarding, learningTime: value });
    dispatch(coreActions.setOnBoardingTime(value));
  };

  return (
    <div className='flex flex-wrap gap-1.5'>
      {learningTime.map((item) => (
        <Button
          key={item.value}
          className={cn(
            'flex items-center border gap-1 px-2 py-1 rounded-full text-xs transition-colors font-normal',
            {
              'bg-white border-gray-200 text-gray-800':
                onBoarding.learningTime !== item.value,
              'bg-lime-50 border-lime-200 text-gray-700':
                onBoarding.learningTime === item.value,
            }
          )}
          onClick={() => handleSelect(item.value)}
        >
          <span>{item.title}</span>
        </Button>
      ))}
    </div>
  );
};

export default LearningTime;
