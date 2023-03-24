
import 'bootstrap/dist/css/bootstrap.css';
import MainLayout from "@/Layouts/MainLayaut";
import {Link, router} from "@inertiajs/react";

export default function Index(props){

    const artList = [];

    const handleDelete=(event)=>{
        router.delete(route('arts.destroy', event.target.value));
    }

    props.arts.forEach((art)=> {
        artList.push(
            <tr key={art.id}>
                <td>{art.artName}</td>
                <td>{art.user.name}</td>
                <td>{art.category.categoryName}</td>
                <td>{art.price} Eur</td>

                <td className="text-center">
                    <Link className="btn btn-primary" href={ route('arts.edit', art.id)}>Redaguoti</Link>
                </td>
                <td className="text-center">
                    <button className="btn btn-danger" onClick={handleDelete} value={art.id}>Ištrinti</button>
                </td>
            </tr>
        )
    });


    return (

           <MainLayout>
               <div className="col-md-12 mt-5">
                   <div className="card">
                       <div className="card-header">Meno kūrinių sąrašas</div>
                       <div className="card-body">
                           <Link className="btn btn-success float-end" href={ route("arts.create") }>Pridėti naują</Link>
                           <table className="table">
                               <thead>
                               <tr>
                                   <th>Pavadinimas</th>
                                   <th>Autorius</th>
                                   <th>Kategorija</th>
                                   <th>Kaina</th>
                                   <th colSpan="2" className="text-center">Veiksmai</th>
                               </tr>
                               </thead>
                               <tbody>
                               { artList }
                               </tbody>
                           </table>


                       </div>


                   </div>
               </div>
           </MainLayout>
    )
}
