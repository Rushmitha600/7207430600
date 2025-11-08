import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './PharmacyServices.css';

const PharmacyServices = () => {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'All',
    'Prescription',
    'Over-the-Counter',
    'Wellness',
    'Personal Care',
    'Vitamins'
  ];

  const medications = [
    {
      id: 1,
      name: 'Atorvastatin 20mg',
      category: 'Prescription',
      price: 25.99,
      description: 'Cholesterol medication',
      requiresPrescription: true,
      image: '💊'
    },
    {
      id: 2,
      name: 'Amoxicillin 500mg',
      category: 'Prescription',
      price: 18.50,
      description: 'Antibiotic',
      requiresPrescription: true,
      image: '💊'
    },
    {
      id: 3,
      name: 'Ibuprofen 200mg',
      category: 'Over-the-Counter',
      price: 8.99,
      description: 'Pain reliever and fever reducer',
      requiresPrescription: false,
      image: '💊'
    },
    {
      id: 4,
      name: 'Vitamin D3 1000IU',
      category: 'Vitamins',
      price: 12.99,
      description: 'Vitamin D supplement',
      requiresPrescription: false,
      image: '🧴'
    },
    {
      id: 5,
      name: 'Multivitamin',
      category: 'Vitamins',
      price: 15.99,
      description: 'Daily multivitamin supplement',
      requiresPrescription: false,
      image: '🧴'
    },
    {
      id: 6,
      name: 'Bandages',
      category: 'Wellness',
      price: 5.99,
      description: 'Adhesive bandages for wounds',
      requiresPrescription: false,
      image: '🩹'
    }
  ];

  const filteredMedications = medications.filter(med => {
    const matchesCategory = selectedCategory === 'all' || med.category === selectedCategory;
    const matchesSearch = med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         med.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (medication) => {
    if (medication.requiresPrescription) {
      alert('This medication requires a prescription. Please upload your prescription.');
      return;
    }
    
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === medication.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === medication.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...medication, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity === 0) {
      removeFromCart(id);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    alert(`Order placed successfully! Total: $${getTotalPrice().toFixed(2)}`);
    setCart([]);
  };

  return (
    <div className="pharmacy-services">
        <Navbar />
      <div className="pharmacy-header">
        <h1>Pharmacy Services</h1>
        <p>Order medicines online with doorstep delivery</p>
      </div>

      <div className="pharmacy-container">
        <div className="pharmacy-main">
          <div className="search-filter">
            <div className="search-bar">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Search medications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category.toLowerCase() ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.toLowerCase())}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="medications-grid">
            {filteredMedications.map(medication => (
              <div key={medication.id} className="medication-card">
                <div className="medication-image">
                  {medication.image}
                  {medication.requiresPrescription && (
                    <span className="prescription-badge">Rx</span>
                  )}
                </div>
                
                <div className="medication-info">
                  <h3>{medication.name}</h3>
                  <p className="description">{medication.description}</p>
                  <span className="category">{medication.category}</span>
                </div>

                <div className="medication-actions">
                  <div className="price">${medication.price}</div>
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => addToCart(medication)}
                  >
                    <i className="fas fa-cart-plus"></i>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cart-sidebar">
          <div className="cart-header">
            <h3>Shopping Cart</h3>
            <span className="cart-count">{cart.length} items</span>
          </div>

          <div className="cart-items">
            {cart.length === 0 ? (
              <p className="empty-cart">Your cart is empty</p>
            ) : (
              cart.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-info">
                    <h4>{item.name}</h4>
                    <p>${item.price} each</p>
                  </div>
                  
                  <div className="item-controls">
                    <div className="quantity-controls">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        +
                      </button>
                    </div>
                    
                    <div className="item-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Delivery:</span>
                <span>$5.99</span>
              </div>
              <div className="summary-row total">
                <span>Total:</span>
                <span>${(getTotalPrice() + 5.99).toFixed(2)}</span>
              </div>
              
              <button className="checkout-btn" onClick={handleCheckout}>
                <i className="fas fa-shopping-bag"></i>
                Proceed to Checkout
              </button>
              
              <div className="delivery-info">
                <i className="fas fa-shipping-fast"></i>
                <span>Free delivery on orders over $50</span>
              </div>
            </div>
          )}

          <div className="pharmacy-features">
            <h4>Why Choose Our Pharmacy?</h4>
            <div className="features-list">
              <div className="feature">
                <i className="fas fa-truck"></i>
                <span>Same Day Delivery</span>
              </div>
              <div className="feature">
                <i className="fas fa-shield-alt"></i>
                <span>Authentic Medicines</span>
              </div>
              <div className="feature">
                <i className="fas fa-dollar-sign"></i>
                <span>Best Prices</span>
              </div>
              <div className="feature">
                <i className="fas fa-user-md"></i>
                <span>Pharmacist Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyServices;