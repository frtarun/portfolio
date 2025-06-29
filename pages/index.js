import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import ProfileCard from '../components/ProfileCard'

export default function Home() {
  return (
    <div style={{ display: 'flex', background: '#111', height: '100vh', color: 'white' }}>
      <Head>
        <title>Portfolio - Tarun Singh Lodha</title>
      </Head>
      <Sidebar />
      <ProfileCard />
    </div>
  )
}
