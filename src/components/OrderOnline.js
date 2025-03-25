import React, { useState } from 'react';

function OrderOnline({ addToCart }) {
  // Add menu items with categories
  const menuItems = [
    // Starters
    {
      name: "Greek Salad",
      price: "12.99",
      description: "Fresh cucumbers, tomatoes, olives, red onions, and feta cheese with oregano vinaigrette",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800",
      category: "Starters"
    },
    {
      name: "Bruschetta",
      price: "8.99",
      description: "Grilled bread rubbed with garlic and topped with diced tomatoes, fresh basil, and olive oil",
      image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800",
      category: "Starters"
    },
    {
      name: "Crispy Calamari",
      price: "14.99",
      description: "Lightly fried squid served with marinara sauce and lemon wedges",
      image: "https://www.seriouseats.com/thmb/JjcZct57JabjWpRwVjzFYDlag0I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__11__20201125-fried-calamari-vicky-wasik-9-9ac8f70e7c0441f895847a5e53d5c278.jpg",
      category: "Starters"
    },
    // Main Dishes
    {
      name: "Mediterranean Pasta",
      price: "18.99",
      description: "Fresh linguine with cherry tomatoes, olives, capers, and garlic in white wine sauce",
      image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800",
      category: "Main Dishes"
    },
    {
      name: "Grilled Lamb Chops",
      price: "28.99",
      description: "Herb-crusted lamb chops served with roasted vegetables and mint sauce",
      image: "https://www.seriouseats.com/thmb/7krlJdfnpXB53aqHg-vBSHjiDPc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/perfectly-grilled-lamb-rib-or-loin-chops-recipe-hero-03-262fe2defc7c491688cb2d363dad3446.JPG",
      category: "Main Dishes"
    },
    {
      name: "Seafood Paella",
      price: "24.99",
      description: "Traditional Spanish rice dish with mixed seafood, saffron, and vegetables",
      image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=800",
      category: "Main Dishes"
    },
    // Desserts
    {
      name: "Baklava",
      price: "7.99",
      description: "Layered phyllo pastry filled with chopped nuts and sweetened with honey",
      image: "https://cleobuttera.com/wp-content/uploads/2018/03/lifted-baklava-720x540.jpg",
      category: "Desserts"
    },
    {
      name: "Tiramisu",
      price: "8.99",
      description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800",
      category: "Desserts"
    },
    // Drinks
    {
      name: "Mediterranean Sangria",
      price: "9.99",
      description: "Red wine blend with fresh citrus fruits and Mediterranean herbs",
      image: "https://www.themediterraneandish.com/wp-content/uploads/2022/11/red-sangria-recipe-10-500x375.jpg",
      category: "Drinks"
    },
    {
      name: "Fresh Mint Lemonade",
      price: "4.99",
      description: "Homemade lemonade with fresh mint leaves and honey",
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800",
      category: "Drinks"
    }
  ];

  // Add state for active category
  const [activeCategory, setActiveCategory] = useState("All");
  const [deliveryType, setDeliveryType] = useState("Delivery");

  // Filter menu items based on selected category
  const filteredItems = menuItems.filter(item => 
    activeCategory === "All" || item.category === activeCategory
  );

  // Add helper function to calculate price
  const calculatePrice = (basePrice) => {
    const price = parseFloat(basePrice);
    return deliveryType === "Pickup" ? 
      (price * 1.2).toFixed(2) : 
      price.toFixed(2);
  };

  const handleAddToCart = (item) => {
    const itemWithFinalPrice = {
      ...item,
      finalPrice: calculatePrice(item.price)
    };
    addToCart(itemWithFinalPrice);
  };

  return (
    <section className="order-online-section">
      <div className="order-container">
        <h1>Order Online</h1>
        
        <div className="delivery-options">
          <div className="slider-container">
            <div className={`slider-button ${deliveryType === "Pickup" ? "slide-right" : ""}`}></div>
            <button 
              className={`option ${deliveryType === "Delivery" ? "active" : ""}`}
              onClick={() => setDeliveryType("Delivery")}
            >
              Delivery
            </button>
            <button 
              className={`option ${deliveryType === "Pickup" ? "active" : ""}`}
              onClick={() => setDeliveryType("Pickup")}
            >
              Pickup
            </button>
          </div>
          {deliveryType === "Pickup" && (
            <small className="price-notice">*Pickup orders include 20% service charge</small>
          )}
        </div>

        <div className="menu-categories">
          {["All", "Starters", "Main Dishes", "Desserts", "Drinks"].map(category => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="online-menu-grid">
          {filteredItems.map((item, index) => (
            <div className="online-menu-item" key={index}>
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <div className="item-header">
                  <h3>{item.name}</h3>
                  <span className="price">${calculatePrice(item.price)}</span>
                </div>
                <p>{item.description}</p>
                <button 
                  className="add-to-cart"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OrderOnline;