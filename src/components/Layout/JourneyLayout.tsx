interface Props {
  children: React.ReactNode;
}

export default function JourneyLayout({ children }: Props) {
  return (
    <div>
      This is navbar for the form journey
      <br />
      {children}
      <br />
      This is the footer for the form journey
    </div>
  );
}
