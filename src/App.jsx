import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './components/products/ProductList'

const dummyProducts = ['Apple', 'Samsung', 'Huawei', 'Redmi']

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>ReactJS Concepts 2024</h1>
      <ProductList listOfProducts={dummyProducts} />
    </>
  )
}

export default App
