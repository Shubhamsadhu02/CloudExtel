import React, { useState } from 'react'
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { firestoreDB, storage } from '../firebase.config';
import { useNavigate } from 'react-router-dom';
import Header from '../Partials/Header';

export default function CreatePost() {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState({
        title: '',
        content: "",
        time: Timestamp.now(),
    });
    const [thumbnail, setthumbnail] = useState();

    const addPost = async () => {
        if (!blogs.title || !blogs.content ) {
            toast.error('Please Fill All Fields');
            console.log('Please Fill All Fields');
        }
        // console.log(blogs.content)
        uploadImage();
    }

    const uploadImage = () => {
        if (!thumbnail || !blogs.title || !blogs.content) return;
        const imageRef = ref(storage, `BlogImage/${thumbnail.name}`);
        uploadBytes(imageRef, thumbnail).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                const productRef = collection(firestoreDB, "BlogPost");
                try {
                    addDoc(productRef, {
                        blogs,
                        thumbnail: url,
                        time: Timestamp.now(),
                        date: new Date().toLocaleString(
                            "en-US",
                            {
                                month: "short",
                                day: "2-digit",
                                year: "numeric",
                            }
                        )
                    })
                    clearData();
                    navigate('/dashboard')
                    toast.success('Post Added Successfully');
                } catch (error) {
                    toast.error(error)
                    console.log(error)
                }
            });
        });
    }

    const clearData = () => {
        setBlogs("");
        setthumbnail(null);
    }
    
    return (
        <>
        <Header isWhite={false} isLogin={true} />
            <section className='create__Blog' style={{background: "rgb(245, 250, 254)"}}>
                <div className="container">
                    <div className="text-center">
                        {thumbnail && <img
                            src={thumbnail
                                ? URL.createObjectURL(thumbnail)
                                : ""}
                            alt="thumbnail"
                            className="blog__image--post"
                        />}
                        <div className="blog__inputs">
                            <input
                                type="file"
                                label="Upload thumbnail"
                                onChange={(e) => setthumbnail(e.target.files[0])} />

                            <input type="text" placeholder='Blog Title' name="title"
                                onChange={(e) => setBlogs({ ...blogs, title: e.target.value })}
                                value={blogs.title} />

                            <textarea type="text" placeholder='Write Your Blog Content' onChange={(e) => setBlogs({ ...blogs, content: e.target.value })}
                                value={blogs.content} ></textarea>
                            
                        </div>

                        <div className="create__btn">
                            <button type='submit' onClick={addPost}>Save</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
