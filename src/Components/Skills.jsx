export default function Skills() {
    return (
        <section id="skills" className="py-5 bg-light">
            <div className="container px-3 px-md-4">
                <h2 className="fw-bold text-center mb-5">Mes Compétences Techniques</h2>

                <div className="row g-4">
                    {/* CI/CD & Intégration Continue */}
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body">
                                <h5 className="card-title">CI/CD & Intégration Continue</h5>
                                <ul className="list-unstyled">
                                    <li>🔹 Pipelines avec <strong>GitHub Actions</strong></li>
                                    <li>🔹 Intégration avec <strong>GitLab CI</strong>, <strong>Jenkins</strong></li>
                                    <li>🔹 Déploiement automatique d’images Docker vers Harbor</li>
                                    <li>🔹 Tests, linting et déploiement conditionnel</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* DevOps & Conteneurisation */}
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body">
                                <h5 className="card-title">DevOps & Conteneurisation</h5>
                                <ul className="list-unstyled">
                                    <li>🔹 Conteneurs : <strong>Docker</strong>, <strong>Podman</strong></li>
                                    <li>🔹 Orchestration : <strong>Kubernetes</strong> (Minikube, Helm)</li>
                                    <li>🔹 Registry : <strong>Harbor</strong> (interne, sécurisé)</li>
                                    <li>🔹 API Gateway : <strong>Kong Gateway</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Cloud & Infrastructure */}
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body">
                                <h5 className="card-title">Cloud & Infrastructure</h5>
                                <ul className="list-unstyled">
                                    <li>🔹 Bases de <strong>Amazon Web Services (AWS)</strong></li>
                                    <li>🔹 Hébergement d’apps React et Spring sur EC2</li>
                                    <li>🔹 Utilisation de S3, IAM, VPC pour projets personnels</li>
                                    <li>🔹 Déploiement sur Scaleway ou machines virtuelles privées</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body">
                                <h5 className="card-title">Développement Backend</h5>
                                <ul className="list-unstyled">
                                    <li>🔹 APIs REST avec <strong>Spring Boot</strong> et <strong>Flask</strong></li>
                                    <li>🔹 Sécurité : <strong>JWT</strong>, <strong>Keycloak</strong></li>
                                    <li>🔹 Connexions bases de données : <strong>PostgreSQL</strong>, <strong>MongoDB</strong></li>
                                    <li>🔹 Génération de documents (PDF, fichiers upload/download)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Frontend */}
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body">
                                <h5 className="card-title">Développement Frontend</h5>
                                <ul className="list-unstyled">
                                    <li>🔹 Interfaces dynamiques avec <strong>React</strong></li>
                                    <li>🔹 Design responsive avec <strong>Bootstrap</strong> / <strong>Tailwind CSS</strong></li>
                                    <li>🔹 Routing, composants réutilisables, gestion d'état</li>
                                    <li>🔹 Intégration avec API REST sécurisées</li>
                                </ul>
                            </div>
                        </div>
                    </div>





                    {/* Data & Business Intelligence */}
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body">
                                <h5 className="card-title">Data & Business Intelligence</h5>
                                <ul className="list-unstyled">
                                    <li>🔹 Analyse de données avec <strong>Python</strong> (Pandas, Numpy)</li>
                                    <li>🔹 Visualisation avec <strong>Power BI</strong>, <strong>Matplotlib</strong></li>
                                    <li>🔹 Systèmes de recommandation (Airbnb, projets IA)</li>
                                    <li>🔹 Intégration avec <strong>MinIO</strong> et <strong>Qdrant</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
