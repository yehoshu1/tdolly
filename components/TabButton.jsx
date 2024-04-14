/* eslint-disable react/prop-types */
const TabButton = ({children, filterItems, condition, active}) => {
  const classNameNormal = "flex justify-center px-4 py-1 mx-2 my-2 text-white transition-transform duration-300 ease-in-out border rounded-lg shadow-md place-items-center bg-black/70 hover:bg-black/85 hover:translate-x-1"
  const classNameActive = "flex justify-center px-4 py-1 mx-2 my-2 text-white transition-transform duration-300 ease-in-out border rounded-lg shadow-md place-items-center bg-black/90 hover:bg-black/95 hover:translate-x-1"
  return (
    <button  
    onClick={()=>filterItems(condition)}
    className={active ? classNameActive : classNameNormal}>
    {children}
  </button>
  )
}

export default TabButton