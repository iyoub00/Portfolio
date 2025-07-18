export default function Projects() {
    return (
        <section id="projects" className="py-5 bg-light">
            <div className="container px-3 px-md-4">
                <h2 className="fw-bold text-center mb-5">Mes Projets</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {/* 🎬 Gestion Cinéma */}
                    <div className="col">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Gestion Cinéma</h5>
                                <p className="card-text">
                                    Application web complète pour gérer les salles, projections, billets et réservations.
                                </p>
                                <div className="mt-auto d-flex justify-content-between">
                                    <a href="https://github.com/iyoub00/GestionCinema"
                                       className="btn btn-outline-primary btn-sm"
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        Voir le projet
                                    </a>
                                    <a href="#details-gestion-cinema" className="btn btn-outline-secondary btn-sm">
                                        Voir plus
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 🥗 FoodApp */}
                    <div className="col">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">FoodApp</h5>
                                <p className="card-text">
                                    Application web de commande de repas avec filtrage dynamique et gestion du panier.
                                </p>
                                <div className="mt-auto d-flex justify-content-between">
                                    <a href="https://github.com/iyoub00/foodapp"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="btn btn-outline-primary btn-sm">
                                        Voir le projet
                                    </a>
                                    <a href="#details-foodapp" className="btn btn-outline-secondary btn-sm">
                                        Voir plus
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 👨‍🎓 Gestion Stagiaire */}
                    <div className="col">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Gestion Stagiaire</h5>
                                <p className="card-text">
                                    Système complet de gestion des stagiaires, encadrants et rapports de stage.
                                </p>
                                <div className="mt-auto d-flex justify-content-between">
                                    <a href="https://github.com/iyoub00/GestionStagiaire"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="btn btn-outline-primary btn-sm">
                                        Voir le projet
                                    </a>
                                    <a href="#details-gestion-stagiaire" className="btn btn-outline-secondary btn-sm">
                                        Voir plus
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 🎬 MovieStore MVC */}
                    <div className="col">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">MovieStore MVC</h5>
                                <p className="card-text">
                                    Application MVC pour la gestion des films, acteurs et réalisateurs.
                                </p>
                                <div className="mt-auto d-flex justify-content-between">
                                    <a href="https://github.com/iyoub00/MVC-MOVIESTORE"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="btn btn-outline-primary btn-sm">
                                        Voir le projet
                                    </a>
                                    <a href="#details-movie-store" className="btn btn-outline-secondary btn-sm">
                                        Voir plus
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* ⚙️ GitLab CI/CD */}
                    <div className="col">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">GitLab CI/CD Demo</h5>
                                <p className="card-text">
                                    Pipeline automatisé pour tester, builder et déployer une application Node.js avec GitLab CI/CD.
                                </p>
                                <div className="mt-auto d-flex justify-content-between">
                                    <a href="https://gitlab.com/iyoub00/freecodecamp-gitlab-ci"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="btn btn-outline-primary btn-sm">
                                        Voir le projet
                                    </a>
                                    <a href="#details-gitlab-ci" className="btn btn-outline-secondary btn-sm">
                                        Voir plus
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}
