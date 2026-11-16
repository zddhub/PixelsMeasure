export const storeURL = "https://apps.apple.com/app/pixelsmeasure/id1638740542";
export const imageBase = process.env.BASE_URL + "img/v5/";

export const landingCopy = {
  en: {
    nav: ["Workflow", "Tools", "Download"],
    language: "Language",
    store: "Download on the App Store",
    watchPreview: "Watch the preview",
    previewTitle: "PixelsMeasure App Store Preview",
    closePreview: "Close preview",
    previewDescription: "A 30-second demonstration of measuring spacing and objects, snapping guides, and opening live measurements as a document.",
    hero: ["Measure what you see.", "To the pixel."],
    intro: "Measure your Mac screen live, or open an image as an editable measurement document on Mac, iPhone, and iPad.",
    spacingAlt: "Mint, Bubblegum, and Peach swatches with measurements for a 162 by 94 pixel swatch and an 18 pixel gap between the card borders.",
    tools: "Measure the details.",
    toolsIntro: "Inspect the edges, alignment, and low-contrast details that are easy to miss by eye.",
    tolerance: "Tolerance",
    probeHint: "Move the pointer to measure",
    pauseMotion: "Pause demos",
    resumeMotion: "Play demos",
    measurements: [
      { mode: "object", title: "Find an object’s edges.", body: "Draw around an icon or element to measure its visible bounds.", alt: "A red bounding box measures a paper plane at 156 by 110 pixels." },
      { mode: "guides", title: "Snap guides to edges.", body: "Line up guides with the edges of your design and read the distance between them.", alt: "Two blue guides snap to the cover edges, 216 pixels apart." },
      { mode: "cross", title: "Check alignment with Cross.", body: "Compare two axes at once and read the pointer coordinates to spot controls that are a few pixels off.", alt: "Crosshair lines through the Card option reveal a five-pixel offset in neighboring controls." },
      { mode: "tolerance", title: "Find the edge you need.", body: "Adjust detection sensitivity to look past shadows and low-contrast seams.", alt: "Changing tolerance from 8 to 32 moves the probe from a 336-pixel seam to the outer 480-pixel edge." }
    ],
    workflow: "Two ways to start measuring.",
    live: {
      title: "Measure right on your Mac.",
      body: "Start from the menu bar and pin the gaps and dimensions you need. Choose Open as Document to keep your measurements and refine them with layers and the inspector.",
      permission: "Live screen measurement uses macOS Screen Recording permission.",
      alt: "Mac measurement document with pinned dimensions, layers, and an inspector."
    },
    image: {
      title: "Open an image. Start measuring.",
      body: "Open a screenshot, photo, or mockup as an editable document. Zoom down to the pixel grid, export an annotated PNG, or save a .pixelsmeasure file in iCloud Drive to continue on another device.",
      alt: "PixelsMeasure on iPhone measuring a weather card and the gap between forecast tiles."
    },
    handoff: {
      title: "From measurements to handoff.",
      intro: "Keep the original image, the measurements, and the context together in one document.",
      features: [
        ["Layers and inspector", "Group, hide, and lock pins in layers. Set exact positions and sizes in the inspector, or zoom in to the pixel grid."],
        ["Copy for development", "Measure in pixels, points, em, rem, or aspect ratio. Copy values as CSS, JSON, or plain text."],
        ["Share a document or PNG", "Send an editable .pixelsmeasure file or export an annotated PNG for a design review or bug report."]
      ]
    },
    plans: [
      ["Free", "Measure with Probe and Cross, save and share documents, and add up to three measurements per document or live session."],
      ["Pro", "Add unlimited measurements, detect object bounds, snap guides, batch copy, crop, and rotate. Try Pro tools in the sample document."]
    ],
    download: "Download PixelsMeasure.",
    requirements: "For macOS 14, iOS 17, and iPadOS 17 or later.",
    footer: ["Privacy", "Terms of Service", "Contact", "GitHub", "Blog"]
  },
  cn: {
    nav: ["操作流程", "测量工具", "下载"],
    language: "语言",
    store: "在 App Store 下载",
    watchPreview: "观看产品预览",
    previewTitle: "PixelsMeasure App Store 预览",
    closePreview: "关闭预览",
    previewDescription: "30 秒演示，展示间距和对象测量、参考线吸附，以及将实时测量打开为文档。",
    hero: ["所见皆可测。", "精确到像素。"],
    intro: "在 Mac 上实时测量屏幕，或在 Mac、iPhone 和 iPad 上直接打开图片，创建可编辑的测量文档。",
    spacingAlt: "彩色样卡的测量示例，标出 162 × 94 像素的尺寸和 卡片外框之间 18 像素的间距。",
    tools: "测量每一处细节。",
    toolsIntro: "检查容易被肉眼忽略的边界、对齐和低对比度细节。",
    tolerance: "容差",
    probeHint: "移动指针即可测量",
    pauseMotion: "暂停演示",
    resumeMotion: "播放演示",
    measurements: [
      { mode: "object", title: "找到对象的边界。", body: "框选图标或元素，测量可见边界的尺寸。", alt: "红色选框标出纸飞机的尺寸为 156 × 110 像素。" },
      { mode: "guides", title: "让参考线吸附到边缘。", body: "将参考线对齐到设计稿的边缘，直接读取两条线之间的距离。", alt: "两条蓝色参考线吸附到封面两侧，间距为 216 像素。" },
      { mode: "cross", title: "用十字准线检查对齐。", body: "同时检查水平和垂直对齐，并读取指针坐标，发现相差几个像素的控件。", alt: "十字准线穿过 Card 选项，显示附近控件相差 5 像素。" },
      { mode: "tolerance", title: "找到需要的边界。", body: "调整边缘检测容差，让测量跨过阴影或低对比度的分隔线。", alt: "容差从 8 调到 32 后，探针从 336 像素的分隔线移至 480 像素的外边界。" }
    ],
    workflow: "两种方式开始测量。",
    live: {
      title: "直接测量 Mac 屏幕。",
      body: "从菜单栏开始测量，固定需要的间距和尺寸。选择「打开为文档」保留测量，再用图层和检查器继续编辑。",
      permission: "实时测量需要 macOS 屏幕录制权限。",
      alt: "Mac 上的测量文档，显示已固定的尺寸、图层和检查器。"
    },
    image: {
      title: "打开图片，立即测量。",
      body: "直接打开截图、照片或设计稿，放大到像素网格。可导出带标注的 PNG，或将 .pixelsmeasure 文件存入 iCloud 云盘，在另一台设备继续编辑。",
      alt: "iPhone 上的 PixelsMeasure 正在测量天气卡片及预报卡片之间的间距。"
    },
    handoff: {
      title: "从测量到交付。",
      intro: "在一份可编辑文档中保留原图和测量结果。",
      features: [
        ["图层与检查器", "将测量分组、隐藏或锁定。在检查器中输入精确的位置和尺寸，也可以放大查看像素网格。"],
        ["复制给开发使用", "支持像素、点、em、rem 和宽高比，并可将数值复制为 CSS、JSON 或纯文本。"],
        ["分享文档或 PNG", "发送可编辑的 .pixelsmeasure 文件，也可导出带标注的 PNG，用于设计评审或问题报告。"]
      ]
    },
    plans: [
      ["免费版", "使用探针和十字准线，保存或分享文档，每份文档或每次实时测量最多新增三条测量。"],
      ["Pro", "不限测量数量，支持对象边界检测、参考线吸附、批量复制、裁剪和旋转。可在随附的示例文档中体验。"]
    ],
    download: "下载 PixelsMeasure。",
    requirements: "适用于 macOS 14、iOS 17、iPadOS 17 或更高版本。",
    footer: ["隐私政策", "服务条款", "联系", "GitHub", "博客"]
  }
};

export function copyFor(locale) {
  return landingCopy[locale] || landingCopy.en;
}
