import { useRef } from "react";

const makePriceItems = (items, itemSelect = false) => {
  return items.map((item, index)=>({ 
    itemSelect: itemSelect,
    item: item,
    index: index
  }))
}

const ListItems = ({item, items, index, itemSelect, price, setPrice, handleItemSelect, selected, handleCustomButton, setCustomInput, setIsDisabled}) => {
  
  /* Below code was on the onClick, but because everything was running on the same render
  handleCustomButton only got the current state and not the changed state due to all the functions being
  run on the same render. 
  Therefore, putting the handleCustomButton function within the handleSelectColor function works because the
  style tag likely runs after the onClick attribute. */
  /* handleCustomButton(index, itemSelect, setCustomInput) */

  // setIsDisabled(false); setPromoText("")
  const onClick = () => {
    setPrice(item.price);
    handleItemSelect();
    handleCustomButton(index, setCustomInput);
    setIsDisabled(false);
    console.log(index, itemSelect, item.price)
  }



const priceItems = useRef(makePriceItems(items.current, false));


  
    return (
      <>
      <div style={{backgroundColor: selected ? '#000' : "#fff", color: selected ? "#fff" : "#000"}} onClick={onClick}> 
        <span>{item.price == "Custom" ? `${item.price}` : `$${item.price}.00`}</span>
      
      </div>
      </>
    )
  };



export { makePriceItems, ListItems };

