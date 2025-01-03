import Card, { CardType } from "./Card";

type GridContainerWithTitleProps = {
  title: string;
  cards: CardType[];
};

function GridContainerWithTitle({ title, cards }: GridContainerWithTitleProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      <h2 className="col-span-2 text-lg mb-1 font-bold text-gray-400 md:col-span-3 lg:col-span-4 py-6 ps-3">
        {title}
      </h2>
      {cards.map((card) => (
        <Card
          key={card.title}
          description={card.description}
          title={card.title}
          icon={card.icon}
          href={card.href}
        />
      ))}
    </div>
  );
}

export default GridContainerWithTitle;
