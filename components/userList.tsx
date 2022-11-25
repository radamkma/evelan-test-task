import { UserData, UsersResponse } from '../common/types'
import { useLoadMoreUsers } from '../hooks/useLoadMoreUsers'
import User from './user'
import styles from './userList.module.css'

const UserList = ({ userResponse }: { userResponse: UsersResponse }) => {

    const {
        users,
        error,
        loading,
        disabled,
        handleLoadMore
    } = useLoadMoreUsers(userResponse);

    return (
        <>
            {userResponse
                ? <div className={styles.userList}>
                    <ul>
                        {users && users.map((user: UserData) =>
                            <li key={user.id}>
                                <User userData={user} />
                            </li>
                        )}
                    </ul>
                </div>
                : <p>Error loading users</p>
            }
            {loading
                ? <p>Loading Users...</p>
                : <button className={styles.button} disabled={disabled} onClick={handleLoadMore}>
                    Load More
                </button>
            }
        </>
    )
}

export default UserList