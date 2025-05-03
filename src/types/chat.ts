export interface User {
    id: string
    firstName: string
    lastName: string | null
    email: string
    phone: string
    userName: string
    dateOfBirth?: Date
    profileImage?: string
    userStatus: "ACTIVE" | "BLOCK"
    role: "SUPER_ADMIN" | "ADMIN" | "USER"
    createdAt: string
    updatedAt: string
  }
  
  export interface Channel {
    id: string
    channelName: string
    createdAt: string
    updatedAt: string
    person1?: User
    person2?: User
    person1Id?: string
    person2Id?: string
    messages?: Message[]
  }
  
  export interface Message {
    id?: string
    message?: string
    files: string[]
    createdAt: string
    updatedAt?: string
    senderId: string
    channelName: string
    sender?: User
  }
  