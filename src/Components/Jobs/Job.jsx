import { MdAccessTime } from "react-icons/md";
import { CiDollar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { job_title, image, companyName, duty_hours, salary, location,_id } = job;
    return (
        <div className="border">
            <div className="p-5">
                <img className="h-[200px]" src={image} alt="" />
                <p className="text-xl font-bold">{job_title}</p>
                <p className="text-xl font-bold">{companyName}</p>
                <p className="text-lg flex items-center gap-1 font-semibold"><MdAccessTime />{duty_hours}</p>
                <div className="flex gap-2">
                <p className="text-lg flex items-center gap-1 font-semibold"><CiDollar />{salary}</p>
                <p className="text-lg font-semibold  flex items-center gap-1"><CiLocationOn />{location}</p>
                </div>
                <Link to={`/jobs/${_id}`}><button className="mt-3 btn btn-primary">job details</button></Link>
            </div>

        </div>
    )
}
export default Job;