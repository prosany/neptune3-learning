'use client';

import React, { memo, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = memo(({ children, ...rest }: ButtonProps) => {
  return <button {...rest}>{children}</button>;
});

export default Button;
