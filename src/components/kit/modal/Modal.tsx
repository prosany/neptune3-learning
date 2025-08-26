import { cn } from '@/utils/cnMerge';
import React, { HTMLAttributes, memo, ReactNode } from 'react';

type ModalProps = {
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Modal = memo(({ children, ...rest }: ModalProps) => {
  return (
    <div
      {...rest}
      className={cn(
        'fixed inset-0 z-50 w-full flex items-center justify-center bg-black/20',
        rest.className
      )}
    >
      <div className='bg-white rounded-lg shadow-lg p-5 max-w-lg w-full'>
        {children}
      </div>
    </div>
  );
});

export default Modal;
