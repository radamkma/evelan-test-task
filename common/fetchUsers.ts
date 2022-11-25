
const fetchUsers = async (pages: number) => {
    try {
        // Fetch data from external API
        const res = await fetch(`https://reqres.in/api/users?page=${pages}`)
        const data = await res.json()
        // await new Promise(resolve => setTimeout(resolve,2000));
        return data
    } catch(err) {
        throw err
    }
}

export { fetchUsers }