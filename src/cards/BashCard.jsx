import bashLogo from "../../public/bash.svg"

function BashCard(){
    return(
        <div className="card">
            <img alt="bash" className="card-image" src={bashLogo}></img>
            <p>Bash</p>
        </div>
    )
}
export default BashCard;