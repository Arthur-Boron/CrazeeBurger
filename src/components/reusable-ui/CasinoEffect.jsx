import { AnimatePresence, motion } from 'framer-motion'

function CasinoEffect({count}) {
  return (
        <AnimatePresence mode='wait'>
            <motion.span
                key={count} 
                initial={{ y: '50%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-50%', opacity: 0 }}
                transition={{ duration: 0.15 }}
            >
                {count}
            </motion.span>
        </AnimatePresence>
  )
}

export default CasinoEffect