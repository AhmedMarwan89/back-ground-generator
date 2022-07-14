import './card-list.component.css'
import Card from '../card/card.components.jsx'
const CardList =({monsters})=>{
        return(
        <div className="card-list">

            {monsters.map((monster)=>{
            
            return ( <Card monster={monster}/>     )
            }   
            )}

        </div>    
        )
    
}

export default CardList;