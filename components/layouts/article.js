import { motion } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '../grid-item'

const variants = {
  hidden: {opacity: 0, x: 0, y: 20},
  enter: {opacity: 1, x: 0, y: 20},
  exit: {opacity: 0, x: 0, y: 20},
}

const Layout = ({ children, title }) => (
  <motion.article
    inital="hidden" 
    animate="enter" 
    variants={variants} 
    transition={{durantion: 0.4, type: 'eaeInOut'}}
    style={{position: 'relative'}}
  >
    <>
      {title && ( 
        <Head>
          <title>{title} - Matheus Souza Monteiro</title>
       </Head> 
       )}
       {children}
       <GridItemStyle />
    </>

  </motion.article>
)

export default Layout