export default function اسنادPage() {
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-bold mb-4">اسناد</h2>
      <iframe src="http://localhost:8090" className="w-full flex-1 border-0 rounded-lg" style={{ minHeight: "80vh" }} />
    </div>
  );
}
