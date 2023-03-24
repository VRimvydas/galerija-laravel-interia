import 'bootstrap/dist/css/bootstrap.css';

import {Link, router} from "@inertiajs/react";
import {useState} from "react";
import MainLayout from "@/Layouts/MainLayaut";

export default function Edit(props){

    const [values, setValues] = useState(props.category)

    const handleChange=(event)=>{
        setValues({
            ...values,
            [ event.target.id]:event.target.value
        });
    }

    const handleSubmit=(event)=>{
        event.preventDefault();

        router.put( route("categories.update", values.id), values );



    }


    return (
        <MainLayout>

                <div className="col-md-4 mt-5">
                    <div className="card">
                        <div className="card-header">redaguoti</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Pavadinimas</label>
                                    <input className="form-control" type="text" id="categoryName" onChange={handleChange} value={values.categoryName} />
                                </div>

                                <button className="btn btn-success">Pridėti</button>
                            </form>


                        </div>


                    </div>
                </div>


        </MainLayout>
    )

}
