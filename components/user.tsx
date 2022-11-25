import Image from 'next/image'
import styles from './user.module.css'
import { UserData } from '../common/types'

const User = ({ userData }: { userData: UserData }) => {
    return (
        <div className={styles.userCard}>
            <Image className={styles.avatar} src={userData.avatar} width="50" height="50" alt="Avatar" />
            <p>{userData.id}</p>
            <p>{userData.email}</p>
            <p>{userData.first_name} {userData.last_name}</p>
        </div>
    )
}

export default User