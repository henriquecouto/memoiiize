import { useState } from "react";
import { Card } from "./components/Card";
import { Header } from "./components/Header";

const cardsImage = Array.from(Array(24).keys()).map(() => ({
  imageUrl: "https://via.placeholder.com/200",
  show: false,
}));

function App() {
  const [cards, setCards] = useState(cardsImage);

  return (
    <Header>
      <div className="grid grid-cols-[repeat(6,200px)] grid-rows-[unset] gap-4 justify-center grid-flow-row auto-rows-[200px] auto-cols-[200px] overflow-auto">
        {cards.map((card, index) => (
          <Card
            imageUrl={card.imageUrl}
            show={card.show}
            onToggleShow={(show) =>
              setCards((old) => {
                const newCards = [...old];
                newCards[index].show = show;
                return newCards;
              })
            }
          />
        ))}
      </div>
    </Header>
  );
}

export default App;
