import Header from './components/header/Header'
import Products from './components/products/Products'
import { useEffect } from 'react'
import { updateTotal } from './redux/features/basketSlice'
import { useDispatch, useSelector } from 'react-redux'

import './App.css'

function App() {
  const basket = useSelector((state) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(updateTotal())
  }, [basket])

  return (
    <>
      <Header></Header>
      <main>
        <Products></Products>
      </main>
      <footer></footer>
    </>
  )
}

export default App
