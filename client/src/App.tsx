import { Fragment } from "react/jsx-runtime"
const products = [
  { name:'product1', price:'100.00'},
  { name:'product2', price:'200.00'}
]

function App() {

  return (
    <Fragment>
      <h1 style={{color: "blueviolet"}}>Re-store</h1>
      <ul>
        {products.map((item, index) => ( // () implicit return, {} explicit return
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
    </Fragment>
  )
}

export default App
