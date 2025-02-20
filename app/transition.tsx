import { AnimatePresence } from "motion/react";

export const PostTransition = ({ children }: { children: React.ReactNode }) => (
  <AnimatePresence mode='wait'>{children}</AnimatePresence>
);
