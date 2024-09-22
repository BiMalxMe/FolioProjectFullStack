


export function Card({card}){
return <div>
    {card.map(function(singlecard){
        console.log(singlecard.linkedIn)
        return (
            <div style={{border:"1px solid black"}}>
                <h2 style={{magin:10,padding:10}}>{singlecard.name}</h2>
                <h2  style={{magin:10,padding:10}}>{singlecard.description}</h2>
                <a target="_blank" href={singlecard.linkedIn} ><button  style={{margin:10, padding:10}}>linkedIn</button></a>
                <a target="_blank" href={singlecard.Twitter} ><button  style={{margin:10, padding:10}}>Twitter</button></a>
            </div>
        )
    })}
        </div>
}