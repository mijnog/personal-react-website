import cLogo from "../../public/c.svg"

function CCard(){
    return(
        <div className="card">
            <img alt="C" className="card-image" src={cLogo}></img>
            <p>C</p>
        </div>
    )
}
export default CCard;