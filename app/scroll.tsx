"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "motion/react";

export const ContainerScroll = ({
  titleComponent,
  children,
  containerClassName, // New prop for sizing
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 0.5], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.05, 1]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[90rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="w-full relative"
        style={{ perspective: "1500px" }}
      >
        {/* IPAD CARD */}
        <Card 
          rotate={rotate} 
          translate={translate} 
          scale={scale} 
          className={containerClassName}
        >
          {children}
        </Card>

        {/* TEXT CONTENT BELOW */}
        <div className="mt-10 md:mt-20">
          <Header translate={translate} titleComponent={titleComponent} />
        </div>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="max-w-7xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
  className, // Added this prop
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
      }}
      // The backticks allow the custom size from page.tsx to override the defaults
      className={`mx-auto w-full border-4 border-white/10 p-2 md:p-4 bg-[#111111] rounded-[40px] shadow-2xl ${className || 'max-w-7xl h-[35rem] md:h-[50rem] -mt-32'}`}
    >
      <div className="h-full w-full overflow-hidden rounded-[30px] bg-zinc-950">
        {children}
      </div>
    </motion.div>
  );
};