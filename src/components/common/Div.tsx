"use client";

import { motion } from "framer-motion";

type DivProps = {
  children: React.ReactNode;
  className?: string;
};

const Div = ({ children, ...props }: DivProps) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.25 }}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Div;
