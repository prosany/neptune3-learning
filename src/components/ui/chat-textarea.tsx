'use client';

import * as React from 'react';
import { cn } from '@/utils/cnMerge';
import { Plus, ArrowUp } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { redirect } from 'next/navigation';
import { useAppDispatch } from '@/global/store';
import { coreActions } from '@/global/slice/coreSlice';

function ChatTextarea({
  className,
  ...props
}: React.ComponentProps<'textarea'>) {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const dispatch = useAppDispatch();

  // Auto-resize logic
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 200)}px`;
  };

  const handleStartConversation = () => {
    const value = props.value?.toString().trim();
    if (!value || value.length > 1000) return;

    // Start the conversation with the user's input
    dispatch(coreActions.setChatPrompt(value));
    redirect(`/learning/${uuidv4()}`);
  };

  return (
    <div className='relative w-full max-w-3xl rounded-md border bg-background p-2 shadow-sm'>
      <textarea
        ref={textareaRef}
        data-slot='textarea'
        rows={1}
        onInput={handleInput}
        maxLength={1000}
        className={cn(
          'w-full max-h-[400px] resize-none border-0 bg-transparent px-3 py-2 text-base outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className
        )}
        {...props}
      />

      <div className='flex justify-between items-center'>
        <button
          type='button'
          className='flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:bg-accent hover:text-accent-foreground'
        >
          <Plus className='h-5 w-5' />
        </button>
        {props.value && (
          <span className='text-sm text-gray-500'>
            {props.value.toString().length} / 1000
          </span>
        )}
        <button
          disabled={
            !props?.value ||
            (props?.value?.toString()?.trim()?.length ?? 0) > 1000
          }
          type='button'
          className='flex h-7 w-7 items-center justify-center rounded-full bg-indigo-900 text-primary-foreground hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed'
          onClick={handleStartConversation}
        >
          <ArrowUp className='h-5 w-5' />
        </button>
      </div>
    </div>
  );
}

export { ChatTextarea };
