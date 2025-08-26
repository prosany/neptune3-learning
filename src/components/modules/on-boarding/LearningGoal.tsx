'use client';

import Button from '@/components/ui/button/Button';
import { learningGoals, KEY } from '@/constants/userQuestions';
import { coreActions } from '@/global/slice/coreSlice';
import { useAppDispatch, useAppSelector } from '@/global/store';
import { tinyStore } from '@/lib/initiateTinyBase';
import { cn } from '@/utils/cnMerge';

const LearningGoal = () => {
  const dispatch = useAppDispatch();
  const { onBoarding } = useAppSelector((state) => state.core);

  const handleToggle = (value: string) => {
    let updatedGoals: string[];
    if (onBoarding.learningGoals.includes(value)) {
      updatedGoals = onBoarding.learningGoals.filter((g) => g !== value);
    } else {
      updatedGoals = [...onBoarding.learningGoals, value];
    }
    const updatedData = {
      ...onBoarding,
      learningGoals: JSON.stringify(updatedGoals),
    };

    tinyStore.set(KEY, updatedData);
    dispatch(coreActions.setOnBoardingGoals(updatedGoals));
  };

  return (
    <div className='flex flex-wrap gap-1.5'>
      {learningGoals.map((item) => (
        <Button
          key={item.value}
          className={cn(
            'flex items-center border gap-1 px-2 py-1 rounded-full text-xs transition-colors font-normal',
            {
              'bg-white border-gray-200 text-gray-800':
                !onBoarding.learningGoals.includes(item.value),
              'bg-lime-50 border-lime-200 text-gray-700':
                onBoarding.learningGoals.includes(item.value),
            }
          )}
          onClick={() => handleToggle(item.value)}
        >
          <span>{item.title}</span>
        </Button>
      ))}
    </div>
  );
};

export default LearningGoal;
