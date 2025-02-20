import { AnimatePresence } from "framer-motion";

export const PostTransition = ({ children }: { children: React.ReactNode }) => (
  <AnimatePresence mode='wait'>{children}</AnimatePresence>
);
