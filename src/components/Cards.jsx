
function Cards({question, answer, isFlipped, onClick, backgroundColor}) {
    return(
        <div className="card" onClick={onClick}>
        <div className={`card-inner ${isFlipped ? 'is-flipped' : ''}`} style={{ backgroundColor }}>
            <div className="card-front">
            <p>{question}</p>
            </div>
            <div className="card-back">
            <p>{answer}</p>
            </div>
        </div>
        </div>
    )
}

export default Cards