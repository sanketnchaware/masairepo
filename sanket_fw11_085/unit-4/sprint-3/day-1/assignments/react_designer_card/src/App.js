import "./App.css";
import { MenuCard } from "./components/MenuCard";
function App() {
  return (
    <div id="container">
      <MenuCard
        img_url="https://mcdn.wallpapersafari.com/medium/34/91/kdLzU8.jpg"
        heading="Pepperoni Pizza"
        details="Premium pepperoni pizza and cheese is made with real mozzarella on original hand-tossed crust"
        energy={265}
        temp={53.8}
        date="12/10/31"
        price={23.9}
        discount={29.9}
      />

      <MenuCard
        img_url="https://mcdn.wallpapersafari.com/medium/12/67/547Oa9.jpg"
        heading="Tortellini"
        details="Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon, bolognese or marinara ."
        energy={270}
        temp={42.4}
        date="18/4/41"
        price={17.9}
        discount={22.9}
      />

      <MenuCard
        img_url="https://mcdn.wallpapersafari.com/medium/34/91/kdLzU8.jpg"
        heading="Strawberry Cake"
        details="Three layer strawberry dessert is not only beautiful looking, but also delicious!Perfect dessert for spring and summer."
        energy={346}
        temp={13.9}
        date="6/14/49"
        price={13.9}
        discount={18.9}
      />
    </div>
  );
}

export default App;
