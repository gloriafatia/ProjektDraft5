import { PropsWithChildren, createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({children}: PropsWithChildren) => {
  const [auth, setAuth] = useState ({user: "", pwd: "", roles: [], accessToken: ""});

  return (
    <AuthContext.Provider value={{ user: auth.user, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;
