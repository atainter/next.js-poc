type UserProfileBffApiResponse = {
    id: string
    username: string
    firstName: string
    lastName: string
    fullName: string
    email: string
}

export const getUserProfileData = (userId: string): UserProfileBffApiResponse => {
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