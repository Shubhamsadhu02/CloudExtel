import React, { useEffect, useState } from 'react'
import Reducer from './reducer';
import { collection, deleteDoc, doc, getDoc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { firestoreDB, storage } from '../firebase.config';
import toast from 'react-hot-toast';
import { deleteObject, ref } from 'firebase/storage';

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
            const blogRef = doc(firestoreDB, "BlogPost", id);
            const blogSnapshot = await getDoc(blogRef);
            if (blogSnapshot.exists()) {
                const blogData = blogSnapshot.data();
                const thumbnail = blogData.thumbnail;
                const imageRef = ref(storage, thumbnail);
                await deleteObject(imageRef);

                await deleteDoc(blogRef);
                await getAllBlogs();
    
                toast.success("Blog deleted successfully");
            } else {
                toast.error("Blog not found");
            }
        } catch (error) {
            toast.error("Blog can't be deleted");
            console.error(error);
        }
    };

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
