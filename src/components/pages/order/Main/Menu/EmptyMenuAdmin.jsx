function EmptyMenuAdmin({onReset}) {
    return (
        <div>
            <span>Pas de produits</span>
            <button onClick={onReset}>Regénérer le menu</button>
        </div>
    )
}

export default EmptyMenuAdmin