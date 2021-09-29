const ListItems = ({item, index, itemSelect, setPrice, handleSelectColor, handleItemSelect, handleCustomButton, setCustomInput}) => {
  
    return (
      <>
      <div style={handleSelectColor(index, itemSelect, setCustomInput)} 
           onClick={ () => { setPrice(item.price);  handleItemSelect(index);  } }> 
        {/* Below code was on the onClick, but because everything was running on the same render
        handleCustomButton only got the current state and not the changed state due to all the functions being
        run on the same render. 
        Therefore, putting the handleCustomButton function within the handleSelectColor function works because the
        style tag likely runs after the onClick attribute. */}
        {/* handleCustomButton(index, itemSelect, setCustomInput) */}
        <span>{item.price == "Custom" ? `${item.price}` : `$${item.price}.00`}</span>
        
      
      </div>
      </>
    )
  };
  
const makePriceItems = (items, itemSelect = false) => {
    let priceItems = items.map((item, index)=>{
        return { 
        itemSelect: itemSelect,
        item: item,
        index: index
        }
    })
    return priceItems
}
export { makePriceItems, ListItems };
