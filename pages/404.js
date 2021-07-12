import styles from '../styles/Home.module.css'

import { useEffect } from 'react';
import {useRouter} from 'next/router'

const NotFound = () => {
    //use router allows redirection
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    })
    return ( 
        <div className={styles.container}>
            <h1>Uh, whoops</h1>
            <p>Could not find the page you were looking for</p>
        </div>
     );
}
 
export default NotFound;