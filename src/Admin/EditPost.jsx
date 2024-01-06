import React, { useState, useRef, useEffect } from 'react'
import { Timestamp, doc, setDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { firestoreDB, storage } from '../firebase.config';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Header from '../Partials/Header';
import JoditEditor from 'jodit-react';
import { Circles } from 'react-loader-spinner';


export default function EditPost() {
    const navigate = useNavigate();
    const editor = useRef(null);
    const [blogs, setBlogs] = useState({
        title: '',
        time: Timestamp.now(),
    });
    const [thumbnail, setthumbnail] = useState();
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);

    const { id } = useParams();
    const location = useLocation();
    const { data } = location.state;

    useEffect(() => {
        if (data) {
            setBlogs(data.blogs);
            setContent(data.content);
        }
    }, [data]);

    const updatePost = async () => {
        if (!blogs.title || !content) {
            toast.error('Please Fill All Fields');
        } else {
            setLoading(true);
            updateData();
        }
    }

    // const uploadImage = () => {
    //     const imageRef = ref(storage, `BlogImage/${thumbnail.name}`);
    //     uploadBytes(imageRef, thumbnail).then((snapshot) => {
    //         getDownloadURL(snapshot.ref).then((url) => {
    //             setBlogs((prevBlogs) => ({ ...prevBlogs, thumbnail: url }));
    //             updateData();
    //         });
    //     });
    // }

    const updateData = async () => {
        if (!blogs.title || !content) {
            setLoading(false);
            return;
        }
    
        let updatedThumbnail = data.thumbnail;
    
        if (thumbnail) {
            const imageRef = ref(storage, `BlogImage/${thumbnail.name}`);
            const snapshot = await uploadBytes(imageRef, thumbnail);
            const url = await getDownloadURL(snapshot.ref);
            updatedThumbnail = url; 
        }
    
        const postRef = doc(firestoreDB, "BlogPost", id);
        try {
            await setDoc(postRef, {
                blogs,
                content,
                thumbnail: updatedThumbnail, 
                time: Timestamp.now(),
                date: new Date().toLocaleString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                }),
            }, { merge: true });
    
            navigate('/dashboard');
            toast.success('Post Updated Successfully');
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    

    return (
                <>
                    <Header isWhite={false} isLogin={true} />
                    <section className='create__Blog' style={{ background: "rgb(245, 250, 254)" }}>
                        <div className="container">
                            <div className="admin__header text-center mb-4">
                                <h2>Edit Blog Post</h2>
                            </div>
                            {loading ?
                                <div className='d-flex justify-content-center'>
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
                                                : data.thumbnail}
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

                                            <JoditEditor
                                                ref={editor}
                                                value={content}
                                                tabIndex={1}
                                                onBlur={newContent => setContent(newContent)}
                                                onChange={newContent => { }}
                                            />

                                        </div>

                                        <div className="create__btn mt-5">
                                            <button type='submit' onClick={updatePost} disabled={loading}>Update</button>
                                            <button type='submit' className='mx-5' onClick={() => { navigate('/dashboard') }} >Cancel</button>
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                    </section>
                </>
            )
        }
