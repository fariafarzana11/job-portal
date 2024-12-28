import { GrTechnology } from "react-icons/gr";

const Category = ({category}) => {
    // console.log(category)
    const {img, category_name} = category
    return ( 
        <div className="border rounded-xl p-10">
            <img src={img} alt="" />
            <h3 className="font-bold text-xl flex items-center justify-center gap-1"> <GrTechnology />{category_name}</h3>

        </div>
    )
}
export default Category;