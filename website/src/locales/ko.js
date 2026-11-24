import { measurements, workflowSteps } from "./landing-sections";

export default {
  nav: ["사용 방법", "측정 도구", "다운로드"],
  language: "사이트 언어", siteNav: "주 메뉴", footerNav: "하단 링크", englishOnly: "영문",
  pageTitle: "Mac, iPhone, iPad용 픽셀 측정 도구",
  store: "App Store에서 다운로드", watchPreview: "영상 보기",
  previewTitle: "PixelsMeasure", closePreview: "미리보기 닫기",
  previewDescription: "PixelsMeasure 제품 소개 영상",
  intro: "스크린샷과 사진 속 크기, 간격, 정렬을 확인하세요.",
  platformNote: "Mac, iPhone, iPad 지원", freeNote: "무료 다운로드",
  proLink: "무료 버전과 Pro 비교", tryProbe: "프로브로 간격 재보기",
  spacingAlt: "민트색, 분홍색, 복숭아색 카드가 나란히 있고, 첫 두 카드의 간격은 18픽셀입니다.",
  tools: "작은 차이까지 한눈에", toolsIntro: "눈으로 확인하기 어려운 정렬 오차와 대비가 낮은 경계도 찾아낼 수 있습니다.",
  tolerance: "허용 오차", probeHint: "포인터를 움직여 측정하세요", probeTouchHint: "색상 카드나 빈 공간을 탭해 측정하세요",
  pauseMotion: "데모 일시 정지", resumeMotion: "데모 재생",
  measurements: measurements([
    ["객체 감지", "아이콘이나 요소를 둘러싸면 눈에 보이는 영역의 크기를 측정할 수 있습니다.", "빨간 테두리로 종이비행기의 크기인 156 × 110픽셀을 표시합니다."],
    ["가장자리에 붙는 안내선", "안내선을 시안의 가장자리에 맞추고 두 선 사이의 거리를 바로 확인하세요.", "파란 안내선 두 개가 표지 양쪽 가장자리에 붙어 있으며, 간격은 216픽셀입니다."],
    ["십자", "가로와 세로 정렬을 한 번에 확인하세요. 포인터 좌표로 몇 픽셀씩 어긋난 요소도 찾을 수 있습니다.", "Card 옵션을 지나는 십자선에 주변 요소가 5픽셀 어긋나 있는 모습이 표시됩니다."],
    ["가장자리 감지 허용 오차", "감지 민감도를 조절해 그림자나 대비가 낮은 구분선을 건너뛰고 측정할 수 있습니다.", "허용 오차를 8에서 32로 높이면 프로브가 336픽셀 지점의 구분선을 넘어 480픽셀 지점의 바깥쪽 가장자리까지 측정합니다."]
  ]),
  workflow: "스크린샷을 측정값이 담긴 PNG로",
  workflowSteps: workflowSteps([
    ["이미지 열기", "Mac, iPhone, iPad에서 스크린샷, 사진 또는 시안을 엽니다.", "측정값을 표시하기 전 타이포그래피 워크숍 신청 페이지 시안."],
    ["측정값 고정하기", "크기와 간격을 이미지에 표시하세요. 편집 가능한 문서로 저장해 두면 나중에 이어서 작업할 수 있습니다.", "핀 아이콘은 시안에서 측정값 두 개가 고정되었음을 나타냅니다."],
    ["측정값을 담은 PNG 공유하기", "측정값을 포함해 이미지를 내보내세요. 예시에서 신청 버튼은 240 × 56 px, 글꼴 견본 위 간격은 26 px입니다.", "두 측정값이 보이는 PNG 공유 미리보기."]
  ]),
  workflowExtra: ["측정 레이어를 유지한 채 ", " 문서로 저장하거나, 측정값을 CSS, JSON 또는 일반 텍스트로 복사할 수 있습니다."],
  live: {
    title: "Mac 화면에서 바로 측정",
    body: "메뉴 막대에서 측정을 시작하고 필요한 값을 고정하세요. ‘문서로 열기’를 선택하면 캡처한 이미지와 측정값을 계속 편집할 수 있습니다.",
    permission: "화면 측정에는 macOS의 화면 기록 권한이 필요합니다.",
    alt: "Mac 메뉴 막대의 PixelsMeasure 메뉴에서 측정 시작 항목이 강조되어 있습니다."
  },
  planScope: "문서 또는 화면 측정 세션당",
  plans: [
    { name: "무료", limit: "측정값 최대 3개 고정", features: ["고정 한도에 도달해도 프로브와 십자로 계속 측정", "문서 저장 및 공유"] },
    { name: "Pro", limit: "측정값 고정 개수 무제한", features: ["객체 감지 및 안내선 맞추기", "일괄 복사, 자르기 및 회전"], note: "샘플 문서에서 Pro 도구를 체험해 보세요." }
  ],
  download: "PixelsMeasure 다운로드",
  requirements: "macOS 14, iOS 17, iPadOS 17 이상에서 사용할 수 있습니다.",
  footer: ["개인정보 처리방침", "서비스 이용약관", "문의", "GitHub", "블로그"]
};
