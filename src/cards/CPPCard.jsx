import cppLogo from "../../public/cpp.svg"

function CPPCard(){
    return(
        <div className="card">
            <img alt="C++" className="card-image" src={cppLogo}></img>
            <p>C++</p>
        </div>
    )
}
export default CPPCard;