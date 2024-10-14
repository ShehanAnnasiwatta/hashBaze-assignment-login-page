export const login = async (user) => {
    try {
        const response = await fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                email: user.email,
                password: user.password
            })
        })

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Login failed');
        }

        const currentUser = await response.json()
        return currentUser;
    } catch (error) {
        console.error('Error :', error);
        throw error;
    }

}

export const currentUser = async (setUser) => {
    try {
        const response = await fetch('http://localhost:8080/api/user', {
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        })

        if (!response.ok) {
            throw new Error('Failed to fetch the current user')
        }

        const user = await response.json();

        // console.log("current user: ", user.username);
        if (!user || !user.username) {
            throw new Error('User data is missing or invalid');
        }
        setUser(user.username);
    } catch (error) {
        console.error('Error:', error);
        setUser('');
    }

}