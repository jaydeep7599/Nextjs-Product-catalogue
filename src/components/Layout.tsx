export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
      {children}
    </div>
  );
}