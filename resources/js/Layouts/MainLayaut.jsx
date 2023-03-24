import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "@inertiajs/react";

export default function MainLayout({children}) {

    return (

        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href={ route("arts.index")}>GALERIJA</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link href={ route("users.index")} className="nav-link active">Vartotojai</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href={ route("arts.index")} className="nav-link active">Meno kūriniai</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href={ route("categories.index")} className="nav-link active">Kategorijos</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {children}
            </div>
        </div>
    );
}
