
function Cards({question, answer, isFlipped, onClick, backgroundColor}) {
    return(
        <div onClick={onClick} className="card" style={{backgroundColor}}>
            <p>{isFlipped ? answer : question}</p>
        </div>
    )
}

export default Cards