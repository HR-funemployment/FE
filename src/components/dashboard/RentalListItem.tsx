import ListPhoto from './ListPhoto';

interface ListProps {
  name: string;
  neighborhood: string;
  price: string;
  photo: string;
  rating: number;
}

export default function RentalListItem({ name, neighborhood, price, photo, rating }: ListProps) {
  return (
    <>
      <ListPhoto photo={photo} />
      <div>{name}</div>
      <div>{neighborhood}</div>
      <div>{price}</div>
      <div>{rating}</div>
    </>
  );
}
