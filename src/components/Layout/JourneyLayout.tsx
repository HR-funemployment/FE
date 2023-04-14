interface Props {
  children: React.ReactNode;
}

export default function JourneyLayout({ children }: Props) {
  return (
    <div>
      TESTING
      <br />
      {children}
      <br />
      TESTING
    </div>
  );
}
