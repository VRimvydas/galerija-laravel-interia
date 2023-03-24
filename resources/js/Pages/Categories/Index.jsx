
import 'bootstrap/dist/css/bootstrap.css';
import MainLayout from "@/Layouts/MainLayaut";
import {Link, router} from "@inertiajs/react";

export default function Index(props){

    const categoryList = [];

    const handleDelete=(event)=>{
        router.delete(route('categories.destroy', event.target.value));
    }

    props.categories.forEach((category)=> {
        categoryList.push(
            <tr key={category.id}>
                <td>{category.categoryName}</td>


                <td className="text-center">
                    <Link className="btn btn-primary" href={ route('categories.edit', category.id)}>Redaguoti</Link>
                </td>
                <td className="text-center">
                    <button className="btn btn-danger" onClick={handleDelete} value={category.id}>Ištrinti</button>
                </td>
            </tr>
        )
    });


    return (

           <MainLayout>
               <div className="col-md-4 mt-5">
                   <div className="card">
                       <div className="card-header">Kategorijų sąrašas</div>
                       <div className="card-body">
                           <Link className="btn btn-success float-end" href={ route("categories.create") }>Pridėti naują</Link>
                           <table className="table">
                               <thead>
                               <tr>
                                   <th>Pavadinimas</th>

                                   <th colSpan="2" className="text-center"></th>
                               </tr>
                               </thead>
                               <tbody>
                               { categoryList }
                               </tbody>
                           </table>


                       </div>


                   </div>
               </div>
           </MainLayout>
    )
}
