export default function Projects() {
    return (
        <section id="projects" className="py-5">
            <div className="container px-3 px-md-4">
                <h2 className="fw-bold text-center mb-5">Mes Projets</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Projet React</h5>
                                <p className="card-text">App de tâches avec React et Firebase.</p>
                                <a href="#" className="btn btn-outline-primary btn-sm">Voir plus</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">API Spring Boot</h5>
                                <p className="card-text">Backend sécurisé avec Spring Boot et PostgreSQL.</p>
                                <a href="#" className="btn btn-outline-primary btn-sm">Voir plus</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">CI/CD Kubernetes</h5>
                                <p className="card-text">Déploiement avec GitHub Actions et K8s.</p>
                                <a href="#" className="btn btn-outline-primary btn-sm">Voir plus</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
