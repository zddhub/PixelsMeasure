import { measurements, workflowSteps } from "./landing-sections";

export default {
  nav: ["操作流程", "測量工具", "下載"],
  language: "網站語言", siteNav: "網站導覽", footerNav: "頁尾導覽", englishOnly: "英文",
  pageTitle: "Mac、iPhone 和 iPad 的像素測量工具",
  store: "在 App Store 下載", watchPreview: "觀看操作示範",
  previewTitle: "PixelsMeasure 操作示範", closePreview: "關閉預覽",
  previewDescription: "示範如何測量間距和物件，以及讓參考線貼齊邊緣。",
  hero: ["畫面上的尺寸，", "精確到每個像素。"],
  intro: "檢查螢幕截圖與照片中的尺寸、間距和對齊。",
  platformNote: "適用於 Mac、iPhone 和 iPad", freeNote: "免費下載",
  proLink: "比較免費版與 Pro", tryProbe: "試用間距探針",
  spacingAlt: "薄荷綠、粉紅與蜜桃色樣卡，前兩張相隔 18 像素。",
  tools: "看清每一處細節", toolsIntro: "找出肉眼不容易察覺的邊緣、對齊偏差和低對比細節。",
  tolerance: "容差", probeHint: "移動指標即可測量", probeTouchHint: "點一下色塊或空隙即可測量",
  pauseMotion: "暫停示範", resumeMotion: "播放示範",
  measurements: measurements([
    ["物件偵測", "框住圖示或其他元素，即可測出可見範圍的尺寸。", "紅框標出紙飛機的尺寸：156 × 110 像素。"],
    ["參考線吸附", "讓參考線貼齊設計稿的邊緣，直接讀取兩條線之間的距離。", "兩條藍色參考線貼齊封面兩側，相隔 216 像素。"],
    ["十字線", "同時檢查水平和垂直對齊，透過指標座標找出只差幾個像素的元件。", "十字線穿過 Card 選項，顯示相鄰元件偏移了 5 像素。"],
    ["邊緣偵測容差", "調整偵測靈敏度，避免把陰影或低對比的分隔線當成外框。", "容差從 8 調到 32 後，探針從 336 像素處的分隔線移到 480 像素處的外緣。"]
  ]),
  workflow: "從螢幕截圖到附標註的 PNG",
  workflowSteps: workflowSteps([
    ["開啟圖片", "在 Mac、iPhone 或 iPad 上開啟螢幕截圖、照片或設計稿。", "尚未標註的字體排印工作坊報名頁設計稿。"],
    ["固定測量結果", "把尺寸和間距標在圖片上，儲存成可編輯的文件，日後可以繼續調整。", "圖釘表示設計稿上的兩筆測量已固定。"],
    ["分享附標註的 PNG", "把圖片和測量結果一起輸出。圖中的報名按鈕是 240 × 56 px，字體樣張上方留了 26 px。", "分享預覽顯示兩筆測量標註。"]
  ]),
  workflowExtra: ["可將原圖與測量圖層儲存為 ", " 文件，也能將數值複製為 CSS、JSON 或純文字。"],
  live: {
    title: "直接測量 Mac 畫面",
    body: "從選單列開始測量，固定要保留的數值。選擇「以文件打開」，就能繼續編輯擷取的影像和測量結果。",
    permission: "螢幕測量需要 macOS 的螢幕錄製權限。",
    alt: "Mac 選單列上的 PixelsMeasure 選單，反白顯示開始測量選項。"
  },
  planScope: "每份文件或每次螢幕測量",
  plans: [
    { name: "免費版", limit: "最多固定 3 筆測量", features: ["達到上限後，仍可使用探針和十字線測量", "儲存與分享文件"] },
    { name: "Pro", limit: "不限固定筆數", features: ["物件偵測與參考線吸附", "批次複製、裁切和旋轉"], note: "可在內建範例文件中試用 Pro 工具。" }
  ],
  download: "下載 PixelsMeasure",
  requirements: "需要 macOS 14、iOS 17、iPadOS 17 或以上版本。",
  footer: ["隱私權政策", "服務條款", "聯絡我們", "GitHub", "部落格"]
};
