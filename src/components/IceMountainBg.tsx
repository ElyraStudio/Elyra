import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import iceMountain from "@/assets/ice-mountain.jpg";

const IceMountainBg = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ scale, transformOrigin: "50% 30%" }}
        className="h-full w-full"
      >
        <img
          src={iceMountain}
          alt=""
          className="h-full w-full object-cover opacity-30"
        />
      </motion.div>
      <div className="absolute inset-0 bg-background/70" />
    </div>
  );
};

export default IceMountainBg;
