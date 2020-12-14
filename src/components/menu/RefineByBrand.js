import React from "react"

function RefineByBrand(props){
  const {
    types,
    valueTitle,
    handleByBrand,
    valueByBrand,
    valueType,
  } = props;

  const handleOnChange = (brand) => {
    const newCheckedBrand = [...valueByBrand];
    const currentBrand = newCheckedBrand.indexOf(brand);

    if(currentBrand === -1){
      newCheckedBrand.push(brand);
    } else{
      newCheckedBrand.splice(currentBrand, 1);
    }
    handleByBrand(newCheckedBrand);
  }

  return(
    <div className="refine-by-brand">
      <ul>
        {types
          .filter((e) => e.title === valueTitle)
          .map((e) =>
            e.subs.filter((e) => e.type === valueType)
            .map((e)=>
              e.subs.map((e) =>(
              <li key={e.id}>
                      <input type="checkbox" id={e.id}
                        checked={valueByBrand.includes(e.brand) ? true : false}
                        onChange={()=> handleOnChange(e.brand)}
                      />
                      <label htmlFor={e.id}>
                        {e.brand}
                      </label>
                    </li>
            ))
          ))
        }
      </ul>
    </div>
  );
}

export default RefineByBrand;
