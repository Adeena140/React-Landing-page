import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
import SpecialRow from './components/SpecialRow.jsx'
import bakery from './assets/bakery.jpg'
import biscuits from './assets/biscuits.jpg'
import cake from './assets/cake.jpg'
import Hero from './components/Hero.jsx'
import croissant from './assets/croissant.jpg'
import donuts from './assets/donuts.jpg'
import coffee from './assets/coffee.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
       <Hero />
      <div className='container'>
          <Card 
            image={bakery}
            title="Bakery items"
            description="Our bakery is a little place filled with sweetness and love, offering freshly baked treats, delicious cakes, and delightful flavors to make every moment special. ❤️"
          />
          <Card 
            image={biscuits}
            title="Fresh biscuits"
            description="Our biscuits are crispy, crunchy, and full of delicious flavor. Freshly baked with love, they are the perfect treat to enjoy with a cup of tea or coffee and make every little moment sweeter. 🍪"
          />
          <Card 
            image={cake}
            title="Bakery cakes"
            description ="Cakes are delicious sweet treats, made with love and care. They come in different flavors, beautiful designs, and are perfect for making every celebration special.🍰🎂"
          />
      </div>
      <h2 style={{ color:"white" , textAlign:"center" , margin:"40px 0"}}>
         ⭐ Our Special Items
      </h2>

      <SpecialRow
        image={croissant}
        title= "Chocolate Truffle croissant"
        description="Croissants are made from dough layered with butter, then carefully rolled, folded, and shaped into crescents. They are baked until golden brown, creating a crispy outside and a soft, fluffy inside"
      />
      <SpecialRow 
        image={donuts}
        title="Glazed Donuts "
        description="Donuts are made from soft, sweet dough that is shaped into rings, fried until golden brown, and topped with delicious chocolate, sugar, or colorful sprinkles. They are a delightful treat for every sweet lover! 🍩"
        reverse={true}
      />
      <SpecialRow
        image={coffee}
        title="A Perfect Cup of Coffee"
        description="Our coffee is freshly brewed with rich aroma and a smooth, delicious taste. Made from carefully selected coffee beans, every sip brings warmth, comfort, and happiness. ☕"
      />
    </>
  )
}

export default App
