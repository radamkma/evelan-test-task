import { useState, useCallback } from "react"
import { UserData, UsersResponse } from '../common/types'
import { fetchUsers } from '../common/fetchUsers'

export interface UseLoadMoreUsers {
    users: Array<UserData>
    error: string;
    loading: boolean;
    disabled: boolean;
    handleLoadMore: () => void;
}

export const useLoadMoreUsers = (userResponse: UsersResponse): UseLoadMoreUsers => {
    const [users, setUsers] = useState(userResponse.data)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [currentPage, setCurrentPage] = useState(userResponse.page)

    const handleLoadMore = useCallback(async() => {
        try {
            // fetch next page of users
            setLoading(true)
            const nextPage = currentPage + 1
            const response = await fetchUsers(nextPage)
            setCurrentPage(nextPage)
            setDisabled(nextPage >= userResponse.total_pages)
            setUsers((currentUsers) => currentUsers.concat([...response.data]))
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message)
                setLoading(false)
            }
        } finally {
            setLoading(false)
        }
    }, [loading, currentPage, disabled, users]);

    return { users, error, loading, disabled, handleLoadMore }
}