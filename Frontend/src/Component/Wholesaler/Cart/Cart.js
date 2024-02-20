import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Cart() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/addProducts/');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
    // Set initial quantity and total price when adding to cart
    setQuantity(1);
    setTotalPrice(product.price);
  };

  const handleQuantityChange = (value) => {
    setQuantity(value);
    // Calculate total price based on quantity and unit price
    setTotalPrice(selectedProduct.price * value);
  };

  const handleCheckout = () => {
    // Calculate the price based on quantity and selected product
    const calculatedPrice = quantity * selectedProduct.price;

    // Proceed to checkout logic
    console.log(`Checkout: ${quantity} ${selectedProduct.productName}`);
    setShowModal(false);

    // Redirect to the checkout page with the calculated price as state
    navigate('/checkout', { state: { price: calculatedPrice } });
  };

  return (
    <div className="row m-5">
      {products.map((product, index) => (
        <div key={index} className="col-md-3 mb-4">
          <div className="card" style={{ width: '18rem' }}>
            <img
              className="card-img-top"
              style={{ height: '15rem' }}
              src={product.image}
              alt="Product"
            />
            <div className="card-body">
              <h5 className="card-title">{product.productName}</h5>
              <h5 className="card-title">₹ {product.price}</h5>
              <small className="card-text">{product.description}</small>
              <br/><br/>
              <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          </div>
        </div>
      ))}


      {selectedProduct && (
        <div className={`modal ${showModal ? 'd-block' : ''}`} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Adjust Quantity</h5>
                <button type="button" className="close" onClick={() => setShowModal(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>{selectedProduct.productName}</p>
                <input type="number" value={quantity} onChange={(e) => handleQuantityChange(e.target.value)} />
                <p>Total Price: ₹ {totalPrice}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                <button type="button" className="btn btn-primary" onClick={handleCheckout}>Checkout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
