export default function PromiseSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">Hogang NONO Marketing</span>
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
            호갱노노 채널톡은 독보적입니다.
          </p>
        </div>

        {/* Korea No.1 프롭테크 강조 박스 */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12 mb-16 text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Korea No.1 프롭테크 기업, 직방
          </h3>
          <p className="text-lg md:text-xl text-center leading-relaxed">
            메타 플랫폼에 최적화된 간결한 영상 콘텐츠로 고객의 시선을 사로잡고,
            <br />
            타겟에게 정확히 도달하는 고효율 숏폼 광고를 제공합니다.
          </p>
        </div>

        {/* 유저 데모그래픽 */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">유저 데모그래픽</h3>
          <div className="w-full aspect-[16/9] bg-gray-300 rounded-2xl max-w-4xl mx-auto"></div>
        </div>

        {/* 3가지 상품 */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* 채널톡 */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="w-full aspect-square bg-gray-300 rounded-lg mb-6"></div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">01 채널톡</h3>
            <p className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
              읽고, 반응하고, 계약까지 연결되는 분양 광고는
            </p>
            <p className="text-xl font-bold text-blue-600">
              호갱노노 채널톡이 독보적!
            </p>
          </div>

          {/* 분양상담사 PRO */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="w-full aspect-square bg-gray-300 rounded-lg mb-6"></div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">02 분양상담사 PRO</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              분양상담사와 직접 연결되는 기능을 통해
              <br />
              고객과의 즉각적인 소통을 기대할 수 있습니다.
            </p>
            <p className="text-sm text-gray-600">
              최대 4개 매물이 노출되어 분양 매물에 대한 최대한의 가시성을 제공합니다.
            </p>
          </div>

          {/* 단지마커 */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="w-full aspect-square bg-gray-300 rounded-lg mb-6"></div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">03 단지마커</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              지도 기반 탐색에 최적화된 고시인성 광고 상품으로,
              <br />
              <strong>시각적 주목도가 높아</strong>
              <br />
              클릭 유도 효과가 탁월합니다.
            </p>
          </div>
        </div>

        {/* 우수 캠페인 사례 */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-semibold">
            / 우수캠페인 사례 (채널톡, 단지마커, APP PUSH)
          </div>
        </div>

        {/* 사례 이미지 그리드 */}
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-[4/3] bg-gray-300 rounded-xl hover:scale-105 transition-transform cursor-pointer"></div>
          ))}
        </div>
      </div>
    </section>
  );
}
