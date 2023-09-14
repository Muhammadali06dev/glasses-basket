import { useSelector } from "react-redux"
import Product from "../product/Product"



function Products() {
   const { basket, total, products, amount } = useSelector((state) => state.basket)

   if (!amount) {
      return (
         <div className="text-center text-xl my-5 font-bold">Your basket is empty! 😢</div>
      )
   }
   return (
      <div className="container mt-12">
         {products.map((item, i) => {
            const { price, amount, name, image, id } = item
            return (
               <Product
                  price={price}
                  amount={amount}
                  name={name}
                  image={image}
                  i={i}
                  key={id}
               />
            )
         })}
         <div className="flex items-center justify-between max-w-xl mx-auto w-full ">
            <div className="text-xl font-semibold">
               Total:
            </div>
            <div className="text-xl font-semibold">${basket ? total.toFixed(2) : 0}</div>
         </div>
      </div>
   )
}

export default Products