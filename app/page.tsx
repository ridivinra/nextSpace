import { getServerSession } from 'next-auth'
import styles from './page.module.css'
import { redirect } from 'next/navigation';

export default function Home() {
  const session = getServerSession();
  if(!session){
    redirect('/api/auth/signin');
  }
  return (
    <main>
     
    </main>
  )
}
