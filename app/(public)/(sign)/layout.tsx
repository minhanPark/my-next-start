export const metadata = {
  title: "My Next App",
  description: "My next app",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-1/2 bg-[#ff6b6b] flex justify-center items-center">
        <h1 className="text-white font-bold text-center text-8xl">
          이용해보세요
        </h1>
      </div>
      <div className="w-1/2 bg-[#c8d6e5] flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}
