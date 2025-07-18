export default function DetailsMovieStore() {
    return (
        <section id="details-movie-store" className="py-5">
            <div className="container px-3 px-md-4">
                <h2 className="fw-bold mb-4 text-center">Détails — MovieStore MVC</h2>
                <p className="lead text-center mb-5">
                    Une application web développée avec Spring Boot en architecture MVC pour gérer les films, acteurs, réalisateurs et catégories.
                </p>

                <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item">🎥 CRUD complet pour films, acteurs, réalisateurs et genres</li>
                    <li className="list-group-item">📁 Modèle MVC clair basé sur Spring Boot</li>
                    <li className="list-group-item">🧭 Navigation simple avec Thymeleaf et Bootstrap</li>
                    <li className="list-group-item">🔄 Mise à jour et suppression fluide des entités</li>
                </ul>

                <div className="text-center">
                    <a href="https://github.com/iyoub00/MVC-MOVIESTORE"
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
