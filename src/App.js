import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Detail from './components/Detail';

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      productImg: '',
      productPrice: 0,
      cartTotal: 0
    }

    this.addToCart = this.addToCart.bind(this)

  }

  componentDidMount() {
    // The commented out axios pulls data from DevMountain's API. The other axios call is pulling the data from
    // from the server

    // axios.get( 'https://practiceapi.devmountain.com/products' )
    axios.get( 'http://localhost:3005/api/products' )
      .then( res => {
        this.setState({
          products: res.data
        })
      } )
  }

  // This method takes the image URL and price from the item that is clicked, and saves it to state
  handleClick( img, price ) {
    this.setState({
      productImg: img,
      productPrice: price
    })
  }

  // This method adds the price of the currently selected item to the cart total on state
  addToCart() {
    console.log( 'hit!' )
    let total = Number( this.state.cartTotal ) + Number( this.state.productPrice )
    this.setState({
      cartTotal: total
    })
  }
  
  render() {

    // This maps through the array of products, displays their images, and assigns the
    // onClick event to each item
    let products = this.state.products.map( (product, i) => {
      return (
        <div key={i} className='product' onClick={() => this.handleClick(product.image, product.price)}>
          <img src={ product.image } />
        </div>
      )
    } )

    return (
      <div className="App">
        <div className='productContainer'>

          {/* Displays the total cost of items in your cart */}
          <p>CART TOTAL: ${this.state.cartTotal}.00</p>

          {/* Displays the large image when a small image is clicked */}
          <Detail
            productImg={this.state.productImg} // image URL of product
            productPrice={this.state.productPrice} // price of product
            addToCart={this.addToCart} // method passed down that adds the selected product's price to the cart total
          />

          {/* Displays all of the product options */}
          {products}
        </div>
      </div>
    )
  }
}

export default App