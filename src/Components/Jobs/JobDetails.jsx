import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import { getDataFromLocalStorage, setDataLocalStorage } from "../../LocalStorage/LocalStorage";


const JobDetails = () => {
    const values = useLoaderData()
    const { _id,job_title, description, companyName, deadline, duty_hours, experience, jobSummary, postDate, location, salary, skills } = values
    console.log(values)


    const navigate = useNavigate()

    const handleSubmit =()=>{
        const data = getDataFromLocalStorage()
        const exists = data.find(da=>da === _id)
        if(!exists){ 
            setDataLocalStorage(_id)
            navigate('/apply')
            toast('applied successfully')
        }
        else{
            toast.error('already exists')
        }
       
    }
    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="mt-20 text-center font-bold text-4xl border-b-indigo-500 shadow-lg text-white py-3 rounded bg-gradient-to-r from-indigo-500">Job Details</h2>
            <div className='grid grid-cols-3 gap-20 mt-20'>
                <div className="col-span-2 border-2 border-blue-300 p-10">
                    <h1 className="font-bold text-2xl">Job Title</h1>
                    <p className='text-xl mt-2'>{job_title}</p>
                    <hr className='border border-black mt-2' />
                    <h1 className="font-bold text-2xl">Job Summary</h1>
                    <p className='text-xl mt-2'>{jobSummary}</p>
                    <hr className='border border-black mt-2' />
                    <h1 className="font-bold text-2xl">Description</h1>
                    <p className='text-xl mt-2'>{description}</p>
                </div>
                <div className="col-span-1 border-2 border-blue-300 p-10">
                    <h1 className="font-bold text-2xl">Company Name</h1>
                    <p className='text-xl'>{companyName}</p>
                    <h1 className="font-bold text-2xl mt-3">Skills</h1>
                    <p className='text-xl'>{skills}</p>
                    <h1 className="font-bold text-2xl mt-3">Experience</h1>
                    <p className='text-xl'>{experience}</p>
                    <h1 className="font-bold text-2xl mt-3">Salary</h1>
                    <p className='text-xl'>{salary}</p>
                    <h1 className="font-bold text-2xl mt-3">Duty Hours</h1>
                    <p className='text-xl'>{duty_hours}</p>
                    <h1 className="font-bold text-2xl mt-3">Deadline</h1>
                    <p className='text-xl'>{deadline}</p>
                    <h1 className="font-bold text-2xl mt-3">Location</h1>
                    <p className='text-xl'>{location}</p>
                    <button className='btn bg-indigo-500 mt-5 px-5' onClick={handleSubmit}>Apply Now</button>
                </div>
                <ToastContainer></ToastContainer>
            </div>    
        </div>
    )
}
export default JobDetails;