'use client';

import Modal from '@/components/kit/modal/Modal';
import Button from '@/components/ui/button/Button';
import { coreActions } from '@/global/slice/coreSlice';
import { useAppDispatch } from '@/global/store';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { BsPatchCheckFill } from 'react-icons/bs';
import { PiCloverDuotone } from 'react-icons/pi';

const StartLearning = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  const handleStart = () => {
    dispatch(coreActions.setGetStarted());
    router.replace('/learning');
  };

  return (
    <Modal className='bg-transparent overflow-hidden'>
      <div className='overflow-hidden relative'>
        <AnimatePresence mode='wait'>
          <motion.div
            initial='initial'
            animate='animate'
            exit='exit'
            variants={variants}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className='flex flex-col justify-center items-center'
          >
            <h1 className='text-5xl text-[#b6f508] mb-3'>
              <BsPatchCheckFill />
            </h1>
            <h2 className='font-lato text-xl font-semibold text-gray-700'>
              You're in. Your learning journey is now on-chain
            </h2>
            <p className='text-gray-600 mb-6 font-normal text-xs'>
              Let's start a amazing learning process together
            </p>
            <div className='my-3'>
              <p className='flex items-center gap-2 text-sm font-poppins'>
                <span>You've unlocked your first</span>
                <span className='border border-amber-400 px-2 py-1 rounded-full text-amber-500 text-xs uppercase flex justify-center items-center gap-1'>
                  <PiCloverDuotone />
                  50 Learning
                </span>
                <span>Tokens</span>
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className='mt-6 flex justify-center items-center'>
        <Button
          onClick={handleStart}
          className='w-full bg-gradient-to-b from-[#c1f532] via-[#c1f530] to-[#b6f508] border-b border-[#99c518] text-sm px-2 py-1.5 rounded-lg flex items-center justify-center gap-5 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:border-gray-300'
        >
          Start Learning Now
        </Button>
      </div>
    </Modal>
  );
};

export default StartLearning;
