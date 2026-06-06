import { motion, AnimatePresence } from 'framer-motion'

interface Props { isLoading: boolean }

export default function LoadingScreen({ isLoading }: Props) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6"
          style={{ background: '#0B0B0F' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="grad-text font-syne font-extrabold text-5xl tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            SLE.
          </motion.div>

          <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #8B5CF6, #06B6D4)' }}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.6, ease: 'easeInOut' }}
            />
          </div>

          <motion.p
            className="text-white/30 text-xs tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Initializing...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}