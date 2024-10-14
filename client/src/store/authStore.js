export const authStore = (set) => ({
    user: '',
    setUser: (newUser) => set({ user: newUser })
}) 