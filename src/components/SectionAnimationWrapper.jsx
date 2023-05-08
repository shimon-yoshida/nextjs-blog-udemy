import {motion} from "framer-motion";

export default function SectionAnimationWrapper({children, className, ...props}) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      animate={{ 
        x: [0, 100, 50]
    }}
      
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}