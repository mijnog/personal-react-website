import mySQLLogo from "../../public/my-sql.svg"

function MySQLCard(){
    return(
        <div className="card">
            <img alt="mySQL" className="card-image" src={mySQLLogo}></img>
            <p>mySQL</p>
        </div>
    )
}
export default MySQLCard;