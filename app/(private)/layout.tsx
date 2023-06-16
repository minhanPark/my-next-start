export const metadata = {
  title: "My Next App",
  description: "My next app",
};

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
