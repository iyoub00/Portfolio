export default function DetailsGitlabCI() {
    return (
        <section id="details-gitlab-ci" className="py-5">
            <div className="container px-3 px-md-4">
                <h2 className="fw-bold mb-4 text-center">Détails — GitLab CI/CD Demo</h2>
                <p className="lead text-center mb-5">
                    Ce projet montre comment configurer une pipeline CI/CD sur GitLab pour une application Node.js.
                </p>

                <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item">⚙️ Utilisation de `.gitlab-ci.yml` pour définir les jobs</li>
                    <li className="list-group-item">🐳 Build & test avec Docker</li>
                    <li className="list-group-item">🚀 Déploiement automatique via pipeline GitLab</li>
                    <li className="list-group-item">✅ Jobs de validation et de test intégrés</li>
                </ul>

                <div className="text-center">
                    <a href="https://gitlab.com/iyoub00/freecodecamp-gitlab-ci"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="btn btn-primary">
                        Voir le code sur GitLab
                    </a>
                </div>
            </div>
        </section>
    );
}
