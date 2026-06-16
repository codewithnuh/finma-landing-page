'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonVariant = 'primary' | 'secondary';

interface SizeConfig {
  height: string;
  padding: string;
  text: string;
  icon: string;
  iconPadding: string;
  leftArrowX: number;
  rightArrowX: number;
  textShift: number;
  leftPos: string;
  gap: string;
}

const sizeConfig: Record<ButtonSize, SizeConfig> = {
  sm: {
    height: 'h-10',
    padding: 'pl-5 pr-4',
    text: 'text-sm',
    icon: 'size-3',
    iconPadding: 'p-1.5',
    leftArrowX: -30,
    rightArrowX: 40,
    textShift: 18,
    leftPos: 'left-2.5',
    gap: 'gap-2',
  },
  md: {
    height: 'h-12',
    padding: 'pl-6 pr-5',
    text: 'text-base',
    icon: 'size-3.5',
    iconPadding: 'p-1.5',
    leftArrowX: -40,
    rightArrowX: 50,
    textShift: 22,
    leftPos: 'left-3',
    gap: 'gap-2.5',
  },
  lg: {
    height: 'h-16',
    padding: 'pl-8 pr-6',
    text: 'text-xl',
    icon: 'size-4',
    iconPadding: 'p-2',
    leftArrowX: -50,
    rightArrowX: 60,
    textShift: 27,
    leftPos: 'left-4',
    gap: 'gap-3',
  },
};

const variantConfig: Record<ButtonVariant, string> = {
  primary: 'bg-linear-to-b from-[rgb(59,130,246)] to-[rgb(64,106,228)]',
  secondary: 'bg-linear-to-b from-[rgb(45,45,45)] to-[#1d1d1d]',
};

interface AnimatedButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children?: string;
}

export default function AnimatedButton({
  variant = 'primary',
  size = 'sm',
  className,
  children = 'Try it free',
}: AnimatedButtonProps) {
  const s = sizeConfig[size];
  const v = variantConfig[variant];

  return (
    <motion.button
      className={cn(
        `
        group relative overflow-hidden
        ${s.height} ${s.padding} rounded-full
        ${s.text} font-bold text-white
        ${v}
        shadow-[inset_0_2px_8px_rgba(255,255,255,0.15),inset_0_-4px_8px_rgba(0,0,0,0.7),0_4px_10px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.08),0_0_20px_rgba(255,255,255,0.06)]
        hover:brightness-110
        cursor-pointer
      `,
        className
      )}
      whileHover="hover"
      initial="initial"
    >
      <div className={`flex items-center ${s.gap}`}>
        {/* LEFT ARROW — hidden initially, enters on hover */}
        <motion.div
          className={`absolute ${s.leftPos} bg-white ${s.iconPadding} rounded-full`}
          variants={{
            initial: { x: s.leftArrowX, rotate: -45, opacity: 0 },
            hover: {
              x: 0,
              rotate: 0,
              opacity: 1,
              transition: { duration: 0.55, ease: 'easeInOut' },
            },
          }}
        >
          <ArrowRight className={`${s.icon} text-black`} strokeWidth={2.5} />
        </motion.div>

        {/* TEXT — shifts right on hover */}
        <motion.span
          className="relative z-10 font-bold"
          variants={{
            initial: { x: 0 },
            hover: {
              x: s.textShift,
              transition: { duration: 0.35, ease: 'easeInOut' },
            },
          }}
        >
          {children}
        </motion.span>

        {/* RIGHT ARROW — exits on hover */}
        <motion.div
          className={`relative z-10 bg-white ${s.iconPadding} rounded-full`}
          variants={{
            initial: { x: 0, rotate: 0, opacity: 1 },
            hover: {
              x: s.rightArrowX,
              rotate: 45,
              opacity: 0,
              transition: { duration: 0.55, ease: 'easeIn' },
            },
          }}
        >
          <ArrowRight className={`${s.icon} text-black`} strokeWidth={2.5} />
        </motion.div>
      </div>
    </motion.button>
  );
}
