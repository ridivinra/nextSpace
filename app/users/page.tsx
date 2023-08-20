import UserCard from '../components/UserCard/UserCard';
import {prisma} from '../lib/prisma';

export default async function User(){
    const users = await prisma.user.findMany();
    return (
        <div>
            {users.map((user) => (
                <UserCard key = {user.id} {...user}/>
            ))}
        </div>
        )
}