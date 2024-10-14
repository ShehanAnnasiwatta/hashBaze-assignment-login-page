export const login = async (user) => {
    const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
            email: user.email,
            password: user.password
        })
    })

    const currentUser = await response.json()

    return currentUser;
}

export const currentUser = async (setUser) => {
   const response = await fetch('http://localhost:8080/api/user', {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
    })

    const user = await response.json();
    
    // console.log("current user: ", user.username);
    setUser(user.username);
}