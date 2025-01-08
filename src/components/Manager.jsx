import React, { useEffect, useRef, useState } from 'react'
import { use } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])
    const ref = useRef()



    const copyText = (textTocopy) => {
        toast('Copied successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

        });
        navigator.clipboard.writeText(textTocopy);

    };


    const editPassword = (id) => {
        const editItem = passwordArray.find(item => {
            return item.id === id
        })
        setForm(editItem)
        const updatedArray = passwordArray.filter(item => {
            return item.id != id
        })
        setpasswordArray(updatedArray)

    }

    const deletePassword = (id) => {

        let c = confirm("Are u sure you want to delete?")
        if (c) {
            toast('Deleted successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",

            });
            const updatedArray = passwordArray.filter(item => {
                return item.id != id
            })
            setpasswordArray(updatedArray)
            localStorage.setItem("passwords", JSON.stringify([...updatedArray]))
        }
    }




    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])

    const savePassword = () => {
        toast('Saved successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

        });
        setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
        setForm({ site: "", username: "", password: "" })
    }
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const changeSrc = (e) => {
        if (e.target.src.endsWith("eye.png")) {
            return e.target.src = "icons/eyecross.png", ref.current.type = "password"

        }

        else if (e.target.src.endsWith("eyecross.png")) {
            return e.target.src = "icons/eye.png", ref.current.type = "text"
        }

    }



    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

            />
            <div className="absolute inset-0 -z-10 h-full w-full bg-blue-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]"></div></div>
            <div className="p-3  md:mycontainer  min-h-[83.8vh]">
                <h1 className='font-bold text-4xl text text-center'><span className="text-black">Pass</span>
                    <span className="text-blue-500">HUB</span></h1>
                <p className='text-blue-900 text-lg text-center'>A central hub for managing passwords.</p>
                <div className='flex flex-col p-4 text-black gap-8 items-center'>
                    <input onChange={handleChange} name='site' className='rounded-full border border-blue-500 w-full p-4 py-1' type="text" placeholder='Enter website URL' value={form.site} />
                    <div className="md:flex-row flex-col   flex w-full justify-between gap-8">
                        <input onChange={handleChange} name='username' className='rounded-full border border-blue-500 w-full p-4 py-1' type="text" placeholder='Enter Username' value={form.username} />
                        <div className="relative">
                            <input ref={ref} onChange={handleChange} name='password' className='rounded-full border border-blue-500 w-full p-4 py-1' type="text" placeholder='Enter Password' value={form.password} />
                            <span className='absolute right-[3px] top-[4px] cursor-pointer'><img onClick={(e) => { changeSrc(e) }} className='p-1' width={26} src="icons/eye.png" alt="" /></span>
                        </div>
                    </div>
                    <button onClick={savePassword} disabled={form.site.length < 3 || form.username.length < 3 || form.password.length < 3} className='flex justify-center items-center gap-2 bg-blue-400  rounded-full w-fit px-8 py-2 
                    border border-blue-900  hover:bg-blue-300'><lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover" >
                        </lord-icon>Save Password</button>
                </div>
                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No saved password</div>}
                    {passwordArray.length != 0 &&
                        <table className="table-auto w-full overflow-hidden rounded-md mb-10">
                            <thead className='bg-blue-800 text-white'>
                                <tr>
                                    <th className='py-2'>Site</th>
                                    <th className='py-2'>Username</th>
                                    <th className='py-2'>Password</th>
                                    <th className='py-2'>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='bg-blue-100'>
                                {passwordArray.map((item, index) => {
                                    return <tr key={index}>
                                        <td className='py-2 border border-white text-center'>
                                            <div className='flex items-center justify-center '>
                                                <a href={item.site} target='_blank'>{item.site}</a>
                                                <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>
                                                    <lord-icon
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover" >
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='py-2 border border-white text-center'>
                                            <div className='flex items-center justify-center '>
                                                <span>{item.username}</span>
                                                <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
                                                    <lord-icon
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover" >
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='py-2 border border-white text-center'>
                                            <div className='flex items-center justify-center '>
                                                <span>{"*".repeat(item.password.length)}</span>
                                                <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>
                                                    <lord-icon
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover" >
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='justify-center py-2 border border-white text-center'>
                                            <span className='cursor-pointer mx-1' onClick={() => { editPassword(item.id) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/gwlusjdu.json"
                                                    trigger="hover"
                                                    style={{ "width": "25px", "height": "25px" }}>
                                                </lord-icon>
                                            </span>
                                            <span className='cursor-pointer mx-1' onClick={() => { deletePassword(item.id) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/skkahier.json"
                                                    trigger="hover"
                                                    style={{ "width": "25px", "height": "25px" }}>
                                                </lord-icon>
                                            </span>
                                        </td>

                                    </tr>
                                })}


                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </>
    )
}

export default Manager