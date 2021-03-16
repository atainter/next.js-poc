type UserProfileBffViewResponse = {
  id: string
  username: string
  firstName: string
  lastName: string
  fullName: string
  email: string
}

export const getPageData = (userId: string): UserProfileBffViewResponse => {
  // Data is mocked here, but the server could make a call to a downstream svc...
  return {
    id: userId,
    username:"jdoe",
    firstName: "John",
    lastName: "Doe",
    fullName: "John Doe",
    email: "jdoe@email.com"
  }
}