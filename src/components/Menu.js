import React from 'react';

function Menu() {
  const menuItems = [
    {
      category: "Starters",
      items: [
        { name: "Greek Salad", price: "12.99", description: "Fresh vegetables, feta cheese, olives with our house dressing" },
        { name: "Bruschetta", price: "9.99", description: "Grilled bread with tomatoes, garlic, and fresh basil" }
      ]
    },
    {
      category: "Main Courses",
      items: [
        { name: "Grilled Fish", price: "28.99", description: "Catch of the day with lemon-butter sauce" },
        { name: "Mediterranean Pasta", price: "22.99", description: "Fresh pasta with olive oil, garlic, and Mediterranean vegetables" }
      ]
    },
    {
      category: "Desserts",
      items: [
        { name: "Lemon Dessert", price: "8.99", description: "Our famous lemon cake with vanilla ice cream" },
        { name: "Baklava", price: "7.99", description: "Traditional phyllo pastry with nuts and honey" }
      ]
    }
  ];

  return (
    <div className="menu-section">
      <h1>Our Menu</h1>
      <div className="menu-container">
        {menuItems.map((category, index) => (
          <div key={index} className="menu-category">
            <h2>{category.category}</h2>
            <div className="menu-items">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="menu-item">
                  <div className="menu-item-header">
                    <h3>{item.name}</h3>
                    <span className="menu-item-price">${item.price}</span>
                  </div>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;