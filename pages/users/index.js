import Styles from '../../styles/Home.module.css'
import Link from 'next/link'

//this code runs when the page renders
//Next js prerenders this page at build time with return value
export const getStaticProps = async () => {
    
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    
    return {
        props: {
            users: data
        }
    }

}

const Users = (props) => {
    return ( 
        <div className={Styles.container}>
            All Users
            {props.users.map(user => (
                <Link href={`users/${user.id}`} key={user.id}>
                    <a>
                        <h3>{user.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
     )
}
 
export default Users;