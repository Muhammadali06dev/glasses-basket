import { useDispatch } from "react-redux"
import { increment, decrement, remover } from "../../redux/features/basketSlice"

function Product({ price, name, image, i, amount }) {
   const dispatch = useDispatch()

   return (
      <div className="w-full max-w-4xl mx-auto flex items-center mb-3 bg-[#EADBC8] gap-5 rounded-lg shadow-md">
         <div>
            <img src={image} alt={`${name} glases`} width={200} />
         </div>
         <div className="flex justify-between flex-grow">
            <div>
               <div className="font-semibold mb-1 text-base">{name}</div>
               <div className="font-semibold mb-1 text-base">${price}</div>
               <button onClick={() => dispatch(remover(i))} className="text-red-500 tracking-widest text-base">Remove</button>
            </div>
            <div className="flex items-center mr-5 gap-2.5">
               <button onClick={() => {
                  if (amount === 1) {
                     dispatch(remover(i))
                  } else {
                     dispatch(decrement(i))
                  }
               }} >
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M177.5 414c-8.8 3.8-19 2-26-4.6l-144-136C2.7 268.9 0 262.6 0 256s2.7-12.9 7.5-17.4l144-136c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22l0 72 288 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-288 0 0 72c0 9.6-5.7 18.2-14.5 22z" /></svg>
               </button>
               <div className="font-semibold mb-1 text-base ">{amount}</div>
               <button onClick={() => dispatch(increment(i))} >
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22l0 72L32 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l288 0 0 72c0 9.6 5.7 18.2 14.5 22z" /></svg>
               </button>
            </div>
         </div>
      </div>
   )
}

export default Product