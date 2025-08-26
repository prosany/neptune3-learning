'use client';

import Modal from '@/components/kit/modal/Modal';
import LearningMeth from '@/components/modules/on-boarding/LearningMeth';
import LearningPref from '@/components/modules/on-boarding/LearningPref';
import LearningGoal from '@/components/modules/on-boarding/LearningGoal';
import LearningTime from '@/components/modules/on-boarding/LearningTime';
import Button from '@/components/ui/button/Button';
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import { RxArrowRight } from 'react-icons/rx';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/utils/cnMerge';
import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/global/store';
import { coreActions } from '@/global/slice/coreSlice';
import StartLearning from '@/components/modules/on-boarding/StartLearning';

const steps = [
  {
    label: 'learning-preferences',
    title: 'What do you want to learn?',
    description: "Pick what you're most interested in right now.",
    component: LearningPref,
    key: 'learningPreferences',
  },
  {
    label: 'learning-methods',
    title: 'How do you want to learn?',
    description: 'Pick what kind of learning methods you prefer.',
    component: LearningMeth,
    key: 'learningMethods',
  },
  {
    label: 'learning-goals',
    title: 'What is your goal with Learnoa?',
    description: 'Pick what you want to achieve with Learnoa.',
    component: LearningGoal,
    key: 'learningGoals',
  },
  {
    label: 'learning-time',
    title: 'How much time can you dedicate?',
    description: 'How much time can you dedicate to learning?',
    component: LearningTime,
    key: 'learningTime',
  },
] as const;

const OnBoarding = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { onBoarding, isFinished, getStarted } = useAppSelector(
    (state) => state.core
  );

  const step = searchParams.get('step') || steps[0].label;

  // Get current step info
  const currentStep = useMemo(() => {
    const index = steps.findIndex((s) => s.label === step);
    return index === -1
      ? { ...steps[0], index: 0 }
      : { ...steps[index], index };
  }, [step]);

  // Navigate to next step
  const handleNext = () => {
    const nextStep = steps[currentStep.index + 1];

    const isStepCompleted = onBoarding[currentStep.key];

    if (nextStep && isStepCompleted) {
      router.push(`?step=${nextStep.label}`);
    } else if (!nextStep) {
      dispatch(coreActions.setFinish());
    }
  };

  const variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  const isButtonDisabled = useMemo(() => {
    const isStepCompleted = onBoarding[currentStep.key];

    return isStepCompleted.length <= 0;
  }, [currentStep, onBoarding]);

  if (isFinished && getStarted) {
    return redirect('/learning');
  }

  return (
    <div className='min-h-screen w-full relative overflow-hidden'>
      <motion.div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage:
            'radial-gradient(circle at center, rgba(70,130,180,0.5), transparent 70%)',
          filter: 'blur(120px)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: [
            '0% 0%',
            '100% 0%',
            '100% 100%',
            '0% 100%',
            '0% 0%',
          ],
        }}
        transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
      />
      {!isFinished && (
        <Modal className='bg-transparent overflow-hidden'>
          <div className='overflow-hidden relative'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentStep.label}
                initial='initial'
                animate='animate'
                exit='exit'
                variants={variants}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <h2 className='font-lato text-xl font-semibold text-gray-700'>
                  {currentStep.title}
                </h2>
                <p className='text-gray-600 mb-6 font-normal text-xs'>
                  {currentStep.description}
                </p>
                <currentStep.component />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className='mt-6 flex justify-between items-end'>
            <div className='flex gap-2 items-center'>
              {steps.map((s, index) => (
                <Button
                  key={s.label}
                  onClick={() => router.push(`?step=${s.label}`)}
                  className='flex flex-col items-center'
                  disabled={onBoarding[s.key]?.length <= 0}
                >
                  <span
                    className={cn('block h-0.5 w-7', {
                      'bg-gray-400': index !== currentStep.index,
                      'bg-[#99c518]': index === currentStep.index,
                    })}
                  />
                </Button>
              ))}
            </div>

            <Button
              onClick={handleNext}
              disabled={isButtonDisabled}
              className='bg-gradient-to-b from-[#c1f532] via-[#c1f530] to-[#b6f508] border-b border-[#99c518] text-sm px-2 py-1.5 rounded-lg flex items-center gap-5 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:border-gray-300'
            >
              <span className='text-sm font-lato'>
                {step === 'learning-time' ? 'Finish' : 'Next'}
              </span>
              <RxArrowRight />
            </Button>
          </div>
        </Modal>
      )}

      {isFinished && <StartLearning />}
    </div>
  );
};

export default OnBoarding;
