export default function DetailsGestionStagiaire() {
    return (
        <section id="details-gestion-stagiaire" className="py-5">
            <div className="container px-3 px-md-4">
                <h2 className="fw-bold mb-4 text-center">Détails — Gestion Stagiaire</h2>
                <p className="lead text-center mb-5">
                    Application web développée avec Spring Boot et Thymeleaf pour la gestion des stagiaires, leurs superviseurs et les rapports de stage.
                </p>

                <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item">📋 Création et suivi des fiches de stage</li>
                    <li className="list-group-item">👨‍🏫 Gestion des encadrants et des affectations</li>
                    <li className="list-group-item">📄 Upload et consultation de rapports de stage</li>
                    <li className="list-group-item">📊 Interface utilisateur conviviale avec Bootstrap</li>
                </ul>

                <div className="text-center">
                    <a href="https://github.com/iyoub00/GestionStagiaire"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="btn btn-primary">
                        Voir le code sur GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
