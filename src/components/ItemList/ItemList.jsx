import './itemlist.css'
import Item from "../Item/Item";

const ItemList = ({productos=[]}) => {
  return (
    <>
        <h1>You are a Tarnished, I can see it. And I can also see... That you're not after my throat. Then why not purchase a little something?</h1>
        <div className='fila'>
            {
                productos.length > 0 &&
                productos.map((item) => {
                    return (
                      <Item {...item} key={item.id}/>
                    )
                })
            }
        </div>
    </>
  )
}
export default ItemList;