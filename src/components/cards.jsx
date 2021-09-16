import './css/cards.css';
const Card = ({ flag, name, population, region, capital}) => {
    return (
        <>      
                <div className="card">
                    <div className ="card-body">
                    <h4 className="card-name">
                        {name}
                    </h4>
                </div>
                <div className="card-image">
                    <img src={flag} alt={name} width="220px" height="170px" />
                </div>
                </div>
        </>
    )
}

export default Card
