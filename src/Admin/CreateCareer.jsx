import React, { useState, useRef } from 'react'
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { firestoreDB } from '../firebase.config';
import { useNavigate } from 'react-router-dom';
import Header from '../Partials/Header';
import JoditEditor from 'jodit-react';
import { Circles } from 'react-loader-spinner';

export default function CreateCareer() {
    const navigate = useNavigate();
    const editor = useRef(null);
    const [jobs, setjobs] = useState({
        title: '',
        location: '',
        department: '',
        applyLink: ''
    });
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);

    const isValidURL = (url) => {
        const pattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
        return pattern.test(url);
    }

    const addPost = async () => {
        if (!jobs.title || !jobs.location || !jobs.department || !jobs.applyLink || !content) {
            toast.error('Please Fill All Fields');
            console.log('Please Fill All Fields');
        }
        else if (!isValidURL(jobs.applyLink)) {
            toast.error('Please enter a valid URL for the Apply Link');
        }
        else {
            setLoading(true);
            uploadCareer();
        }
    }

    const uploadCareer = () => {
        if (!jobs.title || !jobs.location || !jobs.department || !jobs.applyLink || !content) return;
        const productRef = collection(firestoreDB, "CareerPost");
        try {
            addDoc(productRef, {
                jobs,
                content: content,
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
    }

    const clearData = () => {
        setjobs("");
        setContent("");
    }

    return (
        <>
            <Header isWhite={false} isLogin={true} />
            <section className='create__Blog' style={{ background: "rgb(245, 250, 254)" }}>
                <div className="container">
                    <div className="admin__header text-center mb-4">
                        <h2>Create Career</h2>
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
                                <div className="blog__inputs">
                                    <input type="text" placeholder='Job Title' name="title"
                                        onChange={(e) => setjobs({ ...jobs, title: e.target.value })}
                                        value={jobs.title} />
                                    <input type="text" placeholder='Location' name="location"
                                        onChange={(e) => setjobs({ ...jobs, location: e.target.value })}
                                        value={jobs.location} />
                                    <input type="text" placeholder='Department' name="department"
                                        onChange={(e) => setjobs({ ...jobs, department: e.target.value })}
                                        value={jobs.department} />
                                    <input type="url" placeholder='Link should start with https://' name="applyLink"
                                        onChange={(e) => setjobs({ ...jobs, applyLink: e.target.value })}
                                        value={jobs.applyLink} />

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
