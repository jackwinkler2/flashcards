
function Cards({question, answer, isFlipped, onClick}) {
    return(
        <div onClick={onClick} className="card">
            <p>{isFlipped ? answer : question}</p>
        </div>
    )
}

export default Cards