import { useState } from "react";
import { Card } from "./components/Card";
import { Header } from "./components/Header";

const cardsImage = [
  ...Array.from(Array(12).keys()).map((index) => ({
    imageUrl: "https://via.placeholder.com/200",
    show: false,
    name: `image-${index}`,
    discovered: false,
  })),
  ...Array.from(Array(12).keys()).map((index) => ({
    imageUrl: "https://via.placeholder.com/200",
    show: false,
    name: `image-${index}`,
    discovered: false,
  })),
];

function App() {
  const [cards, setCards] = useState(cardsImage);

  const onToggleShowCards = (index: number) => (show: boolean) => {
    setCards((old) => {
      if (old[index].discovered) {
        return old;
      }

      const newCards = [...old];
      const showedIndexes: number[] = [];

      const hasShowingLimit =
        old.filter((card, index) => {
          if (card?.show) {
            showedIndexes.push(index);
          }
          return card?.show;
        }).length > 2;

      if (
        showedIndexes.length === 2 &&
        cards[showedIndexes[0]]?.name === cards[showedIndexes[1]]?.name
      ) {
        newCards[showedIndexes[0]].discovered = true;
        newCards[showedIndexes[0]].show = false;
        newCards[showedIndexes[1]].discovered = true;
        newCards[showedIndexes[1]].show = false;

        return newCards;
      }

      if (hasShowingLimit) {
        showedIndexes.forEach((i) => {
          newCards[i].show = false;
        });
      }
      newCards[index].show = show;

      return newCards;
    });
  };

  return (
    <Header>
      <div className="grid grid-cols-[repeat(6,200px)] grid-rows-[unset] gap-8 justify-center grid-flow-row auto-rows-[200px] auto-cols-[200px] overflow-auto">
        {cards.map(
          (card, index) =>
            card && (
              <Card
                key={index}
                imageUrl={card.imageUrl}
                show={card.show || card.discovered}
                onToggleShow={onToggleShowCards(index)}
              />
            )
        )}
      </div>
    </Header>
  );
}

export default App;
