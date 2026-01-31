export default function ReviewsSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">Display Marketing</span>
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-gray-800">
            브랜드를 명확하게 각인시킵니다!
          </p>
        </div>

        {/* 4가지 디스플레이 상품 */}
        <div className="space-y-16">
          {/* 네이버 배너 광고 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">01 네이버 배너 광고</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                네이버 모바일과 PC 내 다양한 지면들에 안정적인 노출이 가능합니다
              </p>
              <p className="text-xl font-semibold text-blue-600 leading-relaxed">
                배너광고는 사용자들의 디지털 경험이 집약되는 핵심 거점마다
                <br />
                브랜드를 명확하게 각인시킵니다
              </p>
            </div>
            <div className="order-1 md:order-2 w-full aspect-video bg-gray-300 rounded-xl"></div>
          </div>

          {/* Google GDN */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="w-full aspect-video bg-gray-300 rounded-xl"></div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">02 Google GDN</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                GDN은 구글 애드센스, 애드몹에 등록된 300만개 이상의 사이트, 앱, 유튜브 채널 등을 말합니다.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                구글 애즈로 디스플레이 캠페인 집행시 구글 애드센스와 애드몹에 등록된 사이트와 앱(GDN)에 광고가 노출됩니다
              </p>
            </div>
          </div>

          {/* 카카오모먼트 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">03 카카오모먼트</h3>
              <p className="text-xl font-semibold text-blue-600 leading-relaxed mb-4">
                카카오톡 기반 노출과, 카카오 빅데이터를
                <br />
                활용한 정밀 타겟팅으로,
              </p>
              <p className="text-xl font-semibold text-blue-600 leading-relaxed">
                전환율과 브랜딩 효과를 동시에
                <br />
                극대화할 수 있습니다.
              </p>
            </div>
            <div className="order-1 md:order-2 w-full aspect-video bg-gray-300 rounded-xl"></div>
          </div>

          {/* 당근마켓 배너광고 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="w-full aspect-video bg-gray-300 rounded-xl"></div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">04 당근마켓 배너광고</h3>
              <p className="text-xl font-semibold text-blue-600 leading-relaxed">
                3,900만 당근마켓 사용자들을 대상으로 실행하는
                <br />
                생활밀착형 정보전달 광고 솔루션
              </p>
            </div>
          </div>
        </div>

        {/* 우수 캠페인 사례 */}
        <div className="text-center mt-20 mb-12">
          <div className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-semibold">
            / 우수캠페인 사례
          </div>
        </div>

        {/* 사례 이미지 그리드 */}
        <div className="grid md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-[3/4] bg-gray-300 rounded-xl hover:scale-105 transition-transform cursor-pointer"></div>
          ))}
        </div>
      </div>
    </section>
  );
}
