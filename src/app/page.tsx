"use client";
import { motion } from "framer-motion";
import { GRID_ITEMS } from "@/constants";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function page() {
  return (
    <motion.section
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="mb-14 text-center px-4 container mx-auto max-w-6xl"
    >
      <h2 className="text-[#00203F] font-[600] text-4xl tracking-[1.2px] leading-snug">
        Medicines, Cars, Dining, Electronics Your All-in-One Solution!
      </h2>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="px-4 md:px-12 lg:px-52 mt-12 grid sm:grid-cols-2 gap-6"
      >
        {GRID_ITEMS.map((item, index) => (
          <GridItem
            key={index}
            bgColor={item.bgColor}
            image={item.image}
            title={item.title}
            titleColor={item.titleColor}
            description={item.description}
            descriptionColor={item.descriptionColor}
            buttonBg={item.buttonBg}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}

interface ItemProps {
  key: number;
  bgColor: string;
  image: string;
  title: string;
  titleColor: string;
  description: string;
  descriptionColor: string;
  buttonBg: string;
}

function GridItem({
  bgColor,
  image,
  title,
  titleColor,
  description,
  descriptionColor,
  buttonBg,
}: ItemProps) {
  return (
    <motion.div
      variants={itemVariants}
      style={{ background: `${bgColor}` }}
      className={`rounded-lg h-full shadow-sm sm:shadow-lg flex flex-col items-center overflow-hidden py-3 px-1`}
    >
      <img src={image} alt={title} width="143px" />
      <h4
        style={{ color: `${titleColor}` }}
        className="font-[600] mb-2 text-[1.5rem] mt-1"
      >
        {title}
      </h4>
      <p
        style={{ color: `${descriptionColor}` }}
        className="text-sm mb-4 tracking-wider"
      >
        {description}
      </p>
      <button
        style={{ background: `${buttonBg}` }}
        className="px-6 py-1 hover:scale-105 transition-all rounded-full text-white text-sm"
      >
        Visit Page
      </button>
    </motion.div>
  );
}
