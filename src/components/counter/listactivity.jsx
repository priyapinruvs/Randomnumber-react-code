import Listitem from "./listitem"

function Listactivity(){

    const itemlist =["wakeup @5.30am","Do excersise in the morning", "play with Thian"]



    return(
        <>
        <h1>List of activity</h1>
       {
        itemlist.map(function(item){
            return <Listitem activity={item} />
        
        })
        
       }
        </>
    )
}

export default Listactivity