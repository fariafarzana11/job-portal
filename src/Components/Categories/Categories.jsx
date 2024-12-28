import { useEffect, useState } from "react";
import Category from "./Category";

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://next-level-two-ashen.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    })

    return (
        <div className="max-w-6xl mx-auto mt-14">
            <h2 className="text-center font-bold text-4xl border-b-indigo-500 shadow-lg text-indigo-500 py-3 rounded ">Category</h2>
            <p className="text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minus necessitatibus sequi eos magni, fugiat dignissimos error cumque. Ea necessitatibus qui molestias, sapiente dolor corrupti voluptatibus molestiae nulla dolorum cumque!</p>

            <div className="mt-10 grid grid-cols-3 gap-20">
                {
                    // categories.map(category => <Category key={category.id} category={category}></Category>)

                    categories.length? categories.map(category => <Category key={category.id} category={category}></Category>):< div className="grid grid-cols-3 gap-36" >
                    <div className="flex w-52 flex-col gap-4">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>
                    <div className="flex w-52 flex-col gap-4">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>
                    <div className="flex w-52 flex-col gap-4">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>
                    </div>

                     
                }
        </div>
        </div >
    )
}
export default Categories;