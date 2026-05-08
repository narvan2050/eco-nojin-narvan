export default function نظرسنجیPage() {
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-bold mb-4">نظرسنجی</h2>
      <iframe src="http://localhost:8086" className="w-full flex-1 border-0 rounded-lg" style={{ minHeight: "80vh" }} />
    </div>
  );
}
