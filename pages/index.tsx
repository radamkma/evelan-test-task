import Head from 'next/head'
import dynamic from 'next/dynamic';
import styles from './index.module.css'
import { UsersResponse } from '../common/types'
import { fetchUsers } from '../common/fetchUsers'

const UserList = dynamic(() => import('../components/userList'), {
  ssr: false,
  loading: () => <p>Loading User List...</p>
});

const Home = ({ userResponse }: { userResponse: UsersResponse }) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Evelan Test Task</title>
        <meta name="description" content="Evelan Test Task Solution by Kristian Radam" />
        <meta name="robots" content="all" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Users
        </h1>

        <UserList userResponse={userResponse} />

      </main>
    </div>
  )
}

const getServerSideProps = async () => {
  try {
    // fetch page 1 of users
    const response = await fetchUsers(1)

    // Pass data to the page via props
    return { props: { userResponse: response } }
  } catch (err) {
    return { props: { userResponse: null } }
  }
}

export { Home as default, getServerSideProps }