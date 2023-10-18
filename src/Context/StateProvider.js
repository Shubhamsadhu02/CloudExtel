import React, { useEffect, useState } from 'react'
import Reducer from './reducer';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { firestoreDB } from '../firebase.config';

export default function StateProvider(props) {
    //* search state
    const [searchkey, setSearchkey] = useState('');

    //* loading state
    const [loading, setloading] = useState(false);

    //* getAllBlog State 
    const [getAllBlog, setGetAllBlog] = useState([]);

    //* getAllBlogs Function
    function getAllBlogs() {
        setloading(true);
        try {
            const q = query(
                collection(firestoreDB, "BlogPost"),
                orderBy('time')
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let blogArray = [];
                QuerySnapshot.forEach((doc) => {
                    blogArray.push({ ...doc.data(), id: doc.id });
                });

                setGetAllBlog(blogArray)
                console.log(blogArray)
                setloading(false)
            });
            return () => data;
        } catch (error) {
            console.log(error)
            setloading(false)
        }
    }

    useEffect(() => {
        getAllBlogs();
    }, []);
    return (
        <Reducer.Provider value={{
            searchkey,
            setSearchkey,
            loading,
            setloading,
            getAllBlog
        }}>
            {props.children}
        </Reducer.Provider>
    )
}
