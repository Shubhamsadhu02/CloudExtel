import React, { useEffect, useState } from 'react'
import Reducer from './reducer';
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { firestoreDB } from '../firebase.config';
import toast from 'react-hot-toast';

export default function StateProvider(props) {
    const [getAllBlog, setGetAllBlog] = useState([]);
    const [getAllCareer, setGetAllCareer] = useState([]);

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

    const deleteBlogs = async (id) => {
        try {
            await deleteDoc(doc(firestoreDB, "BlogPost", id));
            getAllBlogs()
            toast.success("Blogs deleted successfully")
        } catch (error) {
            toast.error("Blogs can't deleted")
            console.log(error)
        }
    }

    function getAllCareers() {
        try {
            const q = query(
                collection(firestoreDB, "CareerPost"),
                orderBy('time', 'desc')
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let careerArray = [];
                QuerySnapshot.forEach((doc) => {
                    careerArray.push({ ...doc.data(), id: doc.id });
                });
                setGetAllCareer(careerArray)
            });
            return () => data;
        } catch (error) {
            console.log(error)
        }
    }

    const deleteCareers = async (id) => {
        try {
            await deleteDoc(doc(firestoreDB, "CareerPost", id));
            getAllBlogs()
            toast.success("Careers deleted successfully")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllBlogs();
        getAllCareers();
    }, []);
    return (
        <Reducer.Provider value={{
            getAllBlog,
            getAllCareer,
            deleteBlogs,
            deleteCareers
        }}>
            {props.children}
        </Reducer.Provider>
    )
}
