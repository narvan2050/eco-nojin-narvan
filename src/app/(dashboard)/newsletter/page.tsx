export default function خبرنامهPage() {
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-bold mb-4">خبرنامه</h2>
      <iframe src="http://localhost:8084" className="w-full flex-1 border-0 rounded-lg" style={{ minHeight: "80vh" }} />
    </div>
  );
}
