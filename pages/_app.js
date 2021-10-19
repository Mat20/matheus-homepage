import { ChakraProvider } from "@chakra-ui/provider"
import Layout from "../components/layouts/index"
import Fonts from '../components/fonts'
import theme from '../libs/theme'
import { AnimatePresence } from "framer-motion"


const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence>
            <Component {...pageProps} key={router.router} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website