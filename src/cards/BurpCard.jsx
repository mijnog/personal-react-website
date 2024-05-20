import burpLogo from "../../public/burp.svg"

function BurpCard(){
    return(
        <div className="card">
            <img alt="burp" className="card-image" src={burpLogo}></img>
            <p>Burp</p>
        </div>
    )
}
export default BurpCard;