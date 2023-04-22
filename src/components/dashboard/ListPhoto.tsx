import { Image } from '@chakra-ui/react';

interface Photo {
  photo: string;
}

export default function ListPhoto({ photo }: Photo) {
  return (
    <Image
      src={photo}
      borderRadius={12}
      width="200"
      height="200"
      alt="Photo submitted by reviewer"
      aria-hidden="true"
    />
  );
}
