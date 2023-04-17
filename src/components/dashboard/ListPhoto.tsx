export default function ListPhoto({ photo }) {
  return (
    <img
      src={photo}
      width="200"
      height="200"
      alt="Photo submitted by reviewer"
      aria-hidden="true"
    />
  );
}
