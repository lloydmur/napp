import Styles from '../../styles/Home.module.css'

//build page and route for each item in array
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(user => {
        return {
            params: {id : user.id.toString()}
        }
    })
    //fallback property is for when path is not found
    return {
        paths,
        fallback: false
    }
}
// This function run for every page made in getStaticPaths
// The params wew stored in the context object
export const getStaticProps = async(context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    //The return value of getStaticProps goes to the props of the component
    return {
        props: {
            user: data
        }
    }
}

const UserDetails = (props) => {
    return ( 
        <div className={Styles.container}>
            <h3>{props.user.name}</h3>
            <p>{props.user.email}</p>
            <p>{props.user.website}</p>
            <p>{props.user.address.city}</p>
        </div>
     )
}
 
export default UserDetails;