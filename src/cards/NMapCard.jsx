import nMapLogo from "../../public/nmap.svg"

function NMapCard(){
    return(
        <div className="card">
            <img alt="Nmap" className="card-image" src={nMapLogo}></img>
            <p>Nmap</p>
        </div>
    )
}
export default NMapCard;