import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss'
import type { AppProps } from 'next/app'
import { createContext, useState } from 'react';
export const AuthContext = createContext<{
  token?: string,
  setToken: (token: string) => void
}>({ token: "", setToken: () => { } })

export default function App({ Component, pageProps }: AppProps) {
  const [token, setToken] = useState('')

  return (
    <AuthContext.Provider
      value={{
        token, setToken
      }}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  )
}
