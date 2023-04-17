// import { useState} from 'react';
import ListPhoto from './ListPhoto';

interface ListProps {
  name: string;
  neighborhood: string;
  photo: string;
  rating: number;
}

export default function ListItem(props: ListProps) {
  return (
    <>
      <div>This is a List Item</div>
      <ListPhoto photo={props.photo} />
      <div>{props.name}</div>
      <div>{props.neighborhood}</div>
      <div>{props.price}</div>
      <div>{props.rating}</div>
    </>
  );
}
