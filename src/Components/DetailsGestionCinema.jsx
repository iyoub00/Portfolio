export default function DetailsGestionCinema() {
    return (
        <section id="details-gestion-cinema" className="py-5">
            <div className="container px-3 px-md-4">
                <h2 className="fw-bold mb-4 text-center">Détails — Gestion Cinéma</h2>
                <p className="lead text-center mb-5">
                    Ce projet est une application web complète pour la gestion de salles de cinéma, développée avec Spring Boot, JPA et Thymeleaf.
                </p>

                <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item">
                        🎞️ Gestion des films, projections, salles, tickets et réservations
                    </li>
                    <li className="list-group-item">
                        🧠 Architecture MVC avec Spring Boot et Spring Data JPA
                    </li>
                    <li className="list-group-item">
                        🌐 Frontend intégré avec Thymeleaf (serveur-side rendering)
                    </li>
                    <li className="list-group-item">
                        🧪 Tests unitaires simples avec JUnit
                    </li>
                </ul>

                <div className="text-center">
                    <a href="https://github.com/iyoub00/GestionCinema"
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
