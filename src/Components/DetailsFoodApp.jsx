export default function DetailsFoodApp() {
    return (
        <section id="details-foodapp" className="py-5">
            <div className="container px-3 px-md-4">
                <h2 className="fw-bold mb-4 text-center">Détails — FoodApp</h2>
                <p className="lead text-center mb-5">
                    FoodApp est une application React moderne pour commander des repas, gérer les articles dans le panier et filtrer les produits par type.
                </p>

                <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item">🍽️ Interface fluide avec React.js</li>
                    <li className="list-group-item">🛒 Système de panier interactif avec Redux Toolkit</li>
                    <li className="list-group-item">🔍 Filtrage des produits (par catégories, types)</li>
                    <li className="list-group-item">📦 Stockage local du panier pour persistance</li>
                </ul>

                <div className="text-center">
                    <a href="https://github.com/iyoub00/foodapp"
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
