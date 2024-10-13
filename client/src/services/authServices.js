export const login = async (user) => {
    await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
            email: user.email,
            password: user.password
        })
    })
}