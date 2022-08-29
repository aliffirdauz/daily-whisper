import React, { useState, useEffect } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function CreateNews(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [isNotif, setIsNotif] = useState(false);

    const handleSubmit = () => {
        const data = {
            title, description, category
        }
        Inertia.post('/news', data);
        setIsNotif(true);
        setTitle('');
        setDescription('');
        setCategory('');

    }

    useEffect(() => {
        if (!props.myNews) {
            Inertia.get('/news/create')
        }
        return;
    }, [])
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create News</h2>}
        >
            <Head title="Create News" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white border-b border-gray-200">
                        {isNotif && <div className="alert alert-success shadow-lg">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{props.flash.message}</span>
                            </div>
                        </div>}
                        <input type="text" placeholder="Title" className="m-2 input input-bordered w-full bg-white" onChange={(title) => setTitle(title.target.value)} value={title} />
                        <input type="text" placeholder="Description" className="m-2 input input-bordered w-full bg-white" onChange={(description) => setDescription(description.target.value)} value={description} />
                        <input type="text" placeholder="Category" className="m-2 input input-bordered w-full bg-white" onChange={(category) => setCategory(category.target.value)} value={category} />
                        {/* <button className='btn btn-primary m-2' onClick={() => handleSubmit()}>Submit</button> */}
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}