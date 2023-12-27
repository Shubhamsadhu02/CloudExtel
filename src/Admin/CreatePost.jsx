import React, { useState, useRef } from 'react'
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { firestoreDB, storage } from '../firebase.config';
import { useNavigate } from 'react-router-dom';
import Header from '../Partials/Header';
import JoditEditor from 'jodit-react';
import { Circles } from 'react-loader-spinner';


export default function CreatePost() {
    const navigate = useNavigate();
    const editor = useRef(null);
    const [blogs, setBlogs] = useState({
        title: '',
        time: Timestamp.now(),
    });
    const [thumbnail, setthumbnail] = useState();
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);

    const addPost = async () => {
        if (!blogs.title || !content) {
            toast.error('Please Fill All Fields');
            console.log('Please Fill All Fields');
        }
        else {
            setLoading(true);
            uploadImage();
        }
    }

    const uploadImage = () => {
        if (!thumbnail || !blogs.title || !content) return;
        const imageRef = ref(storage, `BlogImage/${thumbnail.name}`);
        uploadBytes(imageRef, thumbnail).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                const productRef = collection(firestoreDB, "BlogPost");
                try {
                    addDoc(productRef, {
                        blogs,
                        content: content,
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
                finally {
                    setLoading(false);
                }
            });
        });
    }

    const clearData = () => {
        setBlogs("");
        setContent("");
        setthumbnail(null);
    }

    return (
        <>
            <Header isWhite={false} isLogin={true} />
            <section className='create__Blog' style={{ background: "rgb(245, 250, 254)" }}>
                <div className="container">
                    <div className="admin__header text-center mb-4">
                        <h2>Create Blog Post</h2>
                    </div>
                    {loading ?
                        <div className='d-flex justify-conter-center'>
                            <Circles
                                height="80"
                                width="80"
                                color="#233852"
                                ariaLabel="circles-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </div>
                        : <>
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

                                    {/* <textarea type="text" placeholder='Write Your Blog Content' onChange={(e) => setBlogs({ ...blogs, content: e.target.value })}
                                 value={blogs.content} ></textarea> */}

                                    <JoditEditor
                                        ref={editor}
                                        value={content}
                                        tabIndex={1}
                                        onBlur={newContent => setContent(newContent)}
                                        onChange={newContent => { }}
                                    />

                                </div>

                                <div className="create__btn mt-5">
                                    <button type='submit' onClick={addPost} disabled={loading}>Save</button>
                                    <button type='submit' className='mx-5' onClick={() => { navigate('/dashboard') }} >Back</button>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </section>
        </>
    )
}
