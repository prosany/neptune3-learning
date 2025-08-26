'use client';

import Button from '@/components/ui/button/Button';
import { KEY, learningPreferences } from '@/constants/userQuestions';
import { coreActions } from '@/global/slice/coreSlice';
import { useAppDispatch, useAppSelector } from '@/global/store';
import { tinyStore } from '@/lib/initiateTinyBase';
import { cn } from '@/utils/cnMerge';

const LearningPref = () => {
  const dispatch = useAppDispatch();
  const { onBoarding } = useAppSelector((state) => state.core);

  const handleSelect = (value: string) => {
    tinyStore.set(KEY, {
      ...onBoarding,
      learningPreferences: value,
    });
    dispatch(coreActions.setOnBoardingPreferences(value));
  };

  return (
    <div className='flex flex-wrap gap-1.5'>
      {learningPreferences.map((item) => (
        <Button
          key={item.value}
          className={cn(
            'flex items-center border border-gray-200 gap-1 px-2 py-0.5 rounded-full text-xs transition-colors font-normal',
            {
              'bg-white text-gray-800':
                onBoarding.learningPreferences !== item.value,
              'bg-lime-50 border-lime-200 text-gray-700':
                onBoarding.learningPreferences === item.value,
            }
          )}
          onClick={() => handleSelect(item.value)}
        >
          <span className='text-base'>
            <item.icon
              className='inline-block'
              style={{ color: item?.color }}
            />
          </span>
          <span>{item.title}</span>
        </Button>
      ))}
    </div>
  );
};

export default LearningPref;
