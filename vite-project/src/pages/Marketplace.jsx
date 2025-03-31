import React, { useState, useEffect } from "react";
import "../styles/marketplace.css";

const cropsData = {
  fruits: [
    { name: "Apple", price: "160INR/kg", vendor: "Farm Fresh", rating: 4, image: "https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGV8ZW58MHx8MHx8fDA%3D" },
    { name: "Banana", price: "75INR/kg", vendor: "Green Farms", rating: 5, image: "https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2018/08/bananas-1354785_1920.jpg" },
    { name: "Mango", price: "245INR/kg", vendor: "Tropical Harvest", rating: 4, image: "https://ichef.bbci.co.uk/images/ic/1920x1080/p06hk0h6.jpg" },
    { name: "Grapes", price: "200INR/kg", vendor: "Vineyard Farms", rating: 3, image: "https://media.istockphoto.com/id/184099853/photo/fresh-grapes.jpg?s=612x612&w=0&k=20&c=IxIcZ4M8c4-ksK4bvmtKUp03jaZwRMBcxplyZB-iZ0A=" },
    { name: "Orange", price: "165INR/kg", vendor: "Citrus Growers", rating: 4, image: "https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg" },
    { name: "Pineapple", price: "340INR/kg", vendor: "Exotic Farms", rating: 5, image: "https://media.self.com/photos/5b4371cc4d0c3c282a8878d3/4:3/w_2560%2Cc_limit/pineapple.jpg" }
  ],
  vegetables: [
    { name: "Tomato", price: "128INR/kg", vendor: "Local Harvest", rating: 4, image: "https://img.freepik.com/free-photo/close-up-view-tomatoes-wooden-table_141793-10767.jpg?semt=ais_hybrid", link: "/tomato" },
    { name: "Potato", price: "85INR/kg", vendor: "Organic Fields", rating: 5, image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90YXRvfGVufDB8fDB8fHww" },
    { name: "Carrot", price: "128INR/kg", vendor: "Green Basket", rating: 4, image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fycm90fGVufDB8fDB8fHww" },
    { name: "Onion", price: "154INR/kg", vendor: "Root Farms", rating: 3, image: "https://images.immediate.co.uk/production/volatile/sites/30/2019/08/Onion-72ea178.jpg" },
    { name: "Cabbage", price: "102INR/kg", vendor: "Fresh Picks", rating: 4, image: "https://cdn.pixabay.com/photo/2018/10/03/22/08/kohl-3722517_1280.jpg" },
    { name: "Spinach", price: "171INR/kg", vendor: "Leafy Greens", rating: 5, image: "https://media.post.rvohealth.io/wp-content/uploads/2019/05/spinach-732x549-thumbnail.jpg" }
  ],
  grains: [
    { name: "Wheat", price: "240INR/kg", vendor: "Golden Fields", rating: 4, image: "https://5.imimg.com/data5/ST/QW/MY-38700875/fresh-wheat-crop.jpg" },
    { name: "Rice", price: "200INR/kg", vendor: "Paddy Farms", rating: 5, image: "https://media.istockphoto.com/id/153737841/photo/rice.jpg?s=612x612&w=0&k=20&c=lfO7iLT0UsDDzra0uBOsN1rvr2d5OEtrG2uwbts33_c=" },
    { name: "Barley", price: "170INR/kg", vendor: "Grain Hub", rating: 4, image: "https://upaj.ag/cdn/shop/articles/Barley.png?v=1724838064&width=1100" },
    { name: "Corn", price: "255INR/kg", vendor: "Maize Masters", rating: 3, image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/6/28/fresh-corn-on-the-cob-partially-shucked-on-dark-background.jpg.rend.hgtvcom.1280.1280.85.suffix/1687987003387.webp" },
    { name: "Oats", price: "320INR/kg", vendor: "Healthy Harvest", rating: 4, image: "https://plus.unsplash.com/premium_photo-1671130295244-b058fc8d86fe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2F0c3xlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Millet", price: "300INR/kg", vendor: "Ancient Grains", rating: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbQdGu9vUMIp27lVvLvVALZxd8ExmC166Tg&s" }
],
dryFruits: [
    { name: "Almonds", price: "700INR/kg", vendor: "Nutty Farms", rating: 5, image: "https://plus.unsplash.com/premium_photo-1675237626334-5cf9d9d8b30c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWxtb25kc3xlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Cashews", price: "1000INR/kg", vendor: "Premium Nuts", rating: 4, image: "https://m.media-amazon.com/images/I/51Q7YhyeNOL._AC_UF1000,1000_QL80_.jpg" },
    { name: "Walnuts", price: "1200INR/kg", vendor: "Organic Nuts", rating: 5, image: "https://mdpiblog.wordpress.sciforum.net/wp-content/uploads/sites/4/2023/01/walnuts.jpg" },
    { name: "Pistachios", price: "1100INR/kg", vendor: "Pista Farms", rating: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvg5lxCNC8M-NCztj4FffkoyFubIKcNSZgYw&s" },
    { name: "Raisins", price: "680INR/kg", vendor: "Sweet Harvest", rating: 3, image: "https://plus.unsplash.com/premium_photo-1669205434519-a042ba09fbdd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpc2lufGVufDB8fDB8fHww" },
    { name: "Dates", price: "770INR/kg", vendor: "Desert Delights", rating: 4, image: "https://idsb.tmgrup.com.tr/ly/uploads/images/2020/05/19/36609.jpg" }
]
};

const Marketplace = () => {
  const [category, setCategory] = useState("fruits");
  const [cart, setCart] = useState({});

  const filterCategory = (newCategory) => {
    setCategory(newCategory);
  };

  const toggleCart = (itemName) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[itemName]) {
        delete newCart[itemName];
      } else {
        newCart[itemName] = 0.25;
      }
      return newCart;
    });
  };

  const updateCart = (itemName, quantity) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (!newCart[itemName]) {
        newCart[itemName] = 0.25;
      }
      newCart[itemName] += quantity;
      if (newCart[itemName] < 0.25) {
        delete newCart[itemName];
      }
      return newCart;
    });
  };

  useEffect(() => {
    let index = 0;
    const marqueeWrapper = document.querySelector(".marquee-wrapper");
    const marqueeItems = document.querySelectorAll(".marquee-item");
    const totalItems = marqueeItems.length - 1;
    const itemWidth = 100;

    const showNextItem = () => {
      index++;
      if (marqueeWrapper) {
        marqueeWrapper.style.transition = "transform 1s ease-in-out";
        marqueeWrapper.style.transform = `translateX(-${index * itemWidth}%)`;
      }
      if (index === totalItems) {
        setTimeout(() => {
          if (marqueeWrapper) {
            marqueeWrapper.style.transition = "none";
            marqueeWrapper.style.transform = "translateX(0)";
          }
          index = 0;
        }, 1000);
      }
    };

    const interval = setInterval(showNextItem, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div>
      <div className="header">
        <div className="header-content">
          <h1>Welcome to <br /> KisaanVerse Marketplace</h1>
          <p>Buy, sell, and bid for crops securely with AI-driven insights and blockchain technology.</p>
        </div>
      </div>

      <div className="market">
        <div className="category-bar">
          {["fruits", "vegetables", "grains", "dryFruits"].map((cat) => (
            <button
              key={cat}
              className={`category ${category === cat ? "active" : ""}`}
              onClick={() => filterCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="crop-container">
          {cropsData[category].map((crop) => (
            <div key={crop.name} className="crop-item">
              <a href={crop.link || "#"}>
                <img src={crop.image} alt={crop.name} />
              </a>
              <h3>
                {crop.name} <span className="price">{crop.price}</span>
              </h3>
              <p>Vendor: {crop.vendor}</p>
              <p className="stars">{"⭐".repeat(crop.rating)}</p>
              <button className="cart-btn" onClick={() => toggleCart(crop.name)}>🛒</button>
              {cart[crop.name] && (
                <div className="cart-counter">
                  <button onClick={() => updateCart(crop.name, -0.25)}>-</button>
                  <span>{cart[crop.name].toFixed(2)}</span> kg
                  <button onClick={() => updateCart(crop.name, 0.25)}>+</button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="custom-container">
          <h2 className="custom-heading">Special Summer Lot</h2>
          <div className="marquee-box">
            <div className="marquee-wrapper">
              <div className="marquee-item">
                <img src="https://cdn.mos.cms.futurecdn.net/SxQpyZbdPoWZuXmxKiJ3uF.jpg" alt="Watermelon" />
                <div className="marquee-text"><p>Watermelon</p></div>
              </div>
              <div className="marquee-item">
                <img src="https://ichef.bbci.co.uk/images/ic/1920x1080/p06hk0h6.jpg" alt="Mango" />
                <div className="marquee-text"><p>Mango</p></div>
              </div>
              <div className="marquee-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShoWdSHinHRGftyKlR-C9uRHH1Z3PaWOOa3g&s" alt="Corn" />
                <div className="marquee-text"><p>Corn</p></div>
              </div>
              <div className="marquee-item">
                <img src="https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?cs=srgb&dl=pexels-julia-nagy-568948-1327838.jpg&fm=jpg" alt="Tomato" />
                <div className="marquee-text"><p>Tomato</p></div>
              </div>
            </div>
          </div>
        </div>

      </div>
      
      {Object.keys(cart).length > 0 && (
        <div id="cart-section">
          <h2>Cart</h2>
          {Object.entries(cart).map(([item, qty]) => (
            <p key={item}>{item}: {qty.toFixed(2)} kg</p>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default Marketplace;
