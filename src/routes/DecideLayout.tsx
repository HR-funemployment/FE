import { JourneyLayout, Navbar } from '../components/Layout';

interface ConditionalLayoutProps {
  component: React.ComponentType;
  routeType: string;
}

export default function DecideLayout({ component: Component, routeType }: ConditionalLayoutProps) {
  if (routeType === 'hosting') {
    return (
      <JourneyLayout>
        <Component />
      </JourneyLayout>
    );
  }
  return (
    <>
      <Navbar />
      <Component />
    </>
  );
}
