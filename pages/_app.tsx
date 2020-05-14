import { AppProps } from "next/app"
import "../styles/global.css"

export default function ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
