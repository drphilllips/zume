
declare module '#auth-utils' {
  interface User {
    email: string
    name: string
    picture: string
    googleId: string
  }

  interface UserSession {
    loggedInAt: number
  }
}

export {}