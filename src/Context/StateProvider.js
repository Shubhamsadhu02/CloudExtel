import React, { useEffect, useState } from 'react'
import Reducer from './reducer';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { firestoreDB } from '../firebase.config';

export default function StateProvider(props) {
    const [getAllBlog, setGetAllBlog] = useState([]);

    function getAllBlogs() {
        try {
            const q = query(
                collection(firestoreDB, "BlogPost"),
                orderBy('time', 'desc')
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let blogArray = [];
                QuerySnapshot.forEach((doc) => {
                    blogArray.push({ ...doc.data(), id: doc.id });
                });
                setGetAllBlog(blogArray)
                // console.log(blogArray)
            });
            return () => data;
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllBlogs();
    }, []);
    return (
        <Reducer.Provider value={{
            getAllBlog
        }}>
            {props.children}
        </Reducer.Provider>
    )
}
