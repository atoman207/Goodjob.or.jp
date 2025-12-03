const MapSection = () => {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-center mb-8">
          アクセス
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-6 md:p-8 border border-gray-200">
            <div className="space-y-2 text-center">
              <p className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
                所在地
              </p>
              <p className="text-base md:text-lg text-gray-700">
                〒103-0022
              </p>
              <p className="text-base md:text-lg text-gray-700">
                東京都中央区日本橋室町1丁目11番12号
              </p>
              <p className="text-base md:text-lg text-gray-700">
                日本橋水野ビル7F
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
