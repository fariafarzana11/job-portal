
import { useLoaderData } from 'react-router-dom';
import { deleteDataFromLocalStorage, getDataFromLocalStorage } from '../../LocalStorage/LocalStorage';
import { useEffect, useState } from 'react';
import AppliedJobs from './AppliedJobs';
import { ToastContainer, toast } from "react-toastify";

const Apply = () => {
    const values = useLoaderData();
    const [localData, setLocalData] = useState([]);
    const [filteredData, setFilteredData] = useState([]); 
    console.log(localData);

    useEffect(() => {
        const data = getDataFromLocalStorage();
        const emptyArray = [];
        for (const da of data) {
            const filterData = values.find(value => value._id === da);
            if (filterData) {
                emptyArray.push(filterData);
            }
        }
        setLocalData(emptyArray);
        setFilteredData(emptyArray); 
    }, [values]);

    const handleDelete = (id) => {
        const data = localData.filter(local => local._id !== id);
        if (data) {
            toast("Deleted successfully");
            setLocalData(data);
            setFilteredData(data); 
        }

        deleteDataFromLocalStorage(id);
    };

    const handleSort = (e) => {
        const selectedLocation = e.target.value;
        if (selectedLocation) {
            const sortedData = localData.filter(item => item.location === selectedLocation);
            setFilteredData(sortedData); 
        }
    };

    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="mt-20 text-center font-bold text-4xl border-b-indigo-500 shadow-lg text-white py-3 rounded bg-gradient-to-r from-indigo-500">
                Applied Jobs
            </h2>
            <div className="mt-10">
                <select className="select select-primary w-full max-w-xs" onChange={handleSort}>
                    <option disabled selected>
                        Select any location
                    </option>
                    <option>Dhaka</option>
                    <option>Rajsahi</option>
                    <option>Gazipur</option>
                    <option>Chittagang</option>
                </select>
            </div>
            <div>
                {filteredData.map(local => (
                    <AppliedJobs key={local._id} local={local} handleDelete={handleDelete}></AppliedJobs>
                ))}
            </div>
            <ToastContainer />
        </div>
    );
};

export default Apply;

