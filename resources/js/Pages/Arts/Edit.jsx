import 'bootstrap/dist/css/bootstrap.css';

import {Link, router} from "@inertiajs/react";
import {useState} from "react";
import MainLayout from "@/Layouts/MainLayaut";

export default function Edit(props){

    const [values, setValues] = useState(props.art)

    const handleChange=(event)=>{
        setValues({
            ...values,
            [ event.target.id]:event.target.value
        });
    }

    const handleSubmit=(event)=>{
        event.preventDefault();

        router.put( route("arts.update", values.id), values );


    }

    const userOptions=[];


    props.users.forEach((user)=>{
        userOptions.push(<option key={user.id==""?0:user.id} value={user.id}>{user.name}</option>)
    });

    const categoryOptions=[];


    props.categories.forEach((category)=>{
        categoryOptions.push(<option key={category.id==""?0:category.id} value={category.id}>{category.categoryName}</option>)
    });

    return (
        <MainLayout>

                <div className="col-md-12 mt-5">
                    <div className="card">
                        <div className="card-header">Redaguoti kūrinio duomenis</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Pavadinimas</label>
                                    <input className="form-control" type="text" id="artName" onChange={handleChange} value={values.artName} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Autorius:</label>
                                    <select id="user_id" className="form-select" onChange={handleChange} value={values.user_id}>
                                        {userOptions}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Kategorija:</label>
                                    <select id="category_id" className="form-select" onChange={handleChange} value={values.category_id}>
                                        {categoryOptions}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Kaina</label>
                                    <input className="form-control" type="text" id="price" onChange={handleChange} value={values.price} />
                                </div>



                                <button className="btn btn-success">Išsaugoti</button>
                            </form>


                        </div>


                    </div>
                </div>


        </MainLayout>
    )

}
