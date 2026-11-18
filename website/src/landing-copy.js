export const storeURL = "https://apps.apple.com/app/pixelsmeasure/id1638740542";
export const imageBase = process.env.BASE_URL + "img/v5/";

export const landingCopy = {
  en: {
    nav: ["Workflow", "Tools", "Download"],
    language: "Language",
    store: "Download on the App Store",
    watchPreview: "See how it works",
    previewTitle: "PixelsMeasure demo",
    closePreview: "Close preview",
    previewDescription: "A short demonstration of measuring spacing and objects and snapping guides.",
    hero: ["Measure what you see.", "To the pixel."],
    intro: "Check sizes, spacing, and alignment in screenshots and photos.",
    platformNote: "For Mac, iPhone, and iPad",
    freeNote: "Free to download",
    proLink: "Compare Free and Pro",
    tryProbe: "Try the spacing probe",
    spacingAlt: "Mint, Bubblegum, and Peach swatches with an 18-pixel gap marked between the first two cards.",
    tools: "Measure the details.",
    toolsIntro: "Inspect the edges, alignment, and low-contrast details that are easy to miss by eye.",
    tolerance: "Tolerance",
    probeHint: "Move the pointer to measure",
    probeTouchHint: "Tap a swatch or gap to measure",
    pauseMotion: "Pause demos",
    resumeMotion: "Play demos",
    measurements: [
      { mode: "object", title: "Object detection", body: "Draw around an icon or element to measure its visible bounds.", alt: "A red bounding box measures a paper plane at 156 by 110 pixels." },
      { mode: "guides", title: "Guide snapping", body: "Line up guides with the edges of your design and read the distance between them.", alt: "Two blue guides snap to the cover edges, 216 pixels apart." },
      { mode: "cross", title: "Cross", body: "Compare two axes at once and read the pointer coordinates to spot controls that are a few pixels off.", alt: "Crosshair lines through the Card option reveal a five-pixel offset in neighboring controls." },
      { mode: "tolerance", title: "Edge detection tolerance", body: "Adjust detection sensitivity to look past shadows and low-contrast seams.", alt: "Changing tolerance from 8 to 32 moves the probe from a 336-pixel seam to the outer 480-pixel edge." }
    ],
    workflow: "From a screenshot to an annotated PNG.",
    workflowSteps: [
      {
        title: "Open a screenshot",
        body: "Bring a screenshot, photo, or mockup into PixelsMeasure on any supported device.",
        image: "workflow-workshop.png", width: 720, height: 424,
        alt: "An unmarked mockup of a typography workshop signup page."
      },
      {
        title: "Pin what you measure",
        body: "Mark dimensions and gaps. Save the editable document to keep refining your measurements.",
        image: "workflow-workshop-measure.png", width: 720, height: 488,
        alt: "A pin icon identifies two saved measurements on the workshop mockup."
      },
      {
        title: "Share an annotated PNG",
        body: "Export the image with your measurements. Here, the signup button is 240 × 56 px and the gap above the type specimen is 26 px.",
        image: "workflow-workshop-annotated.png", width: 720, height: 488,
        alt: "A share preview of workshop-annotated.png with both measurements visible."
      }
    ],
    workflowExtra: ["Keep a layered ", " document for later, or copy values as CSS, JSON, or plain text."],
    live: {
      title: "Measure the live screen on Mac.",
      body: "Start from the menu bar. Pin what you find, then choose Open as Document to keep working with the captured image and measurements.",
      permission: "Live measurement uses macOS Screen Recording permission.",
      alt: "The PixelsMeasure menu in the Mac menu bar, with Start Measure highlighted."
    },
    planScope: "Per document or live session",
    plans: [
      {
        name: "Free",
        limit: "Up to 3 measurements",
        features: ["Probe and Cross", "Save and share documents"]
      },
      {
        name: "Pro",
        limit: "Unlimited measurements",
        features: ["Object detection and guide snapping", "Batch copy, crop, and rotate"],
        note: "Try Pro tools in the sample document."
      }
    ],
    download: "Download PixelsMeasure.",
    requirements: "For macOS 14, iOS 17, and iPadOS 17 or later.",
    footer: ["Privacy", "Terms of Service", "Contact", "GitHub", "Blog"]
  },
  cn: {
    nav: ["操作流程", "测量工具", "下载"],
    language: "语言",
    store: "在 App Store 下载",
    watchPreview: "查看实际操作",
    previewTitle: "PixelsMeasure 产品演示",
    closePreview: "关闭预览",
    previewDescription: "简短演示，展示间距测量、对象边界检测和参考线吸附。",
    hero: ["所见皆可测。", "精确到像素。"],
    intro: "精确检查截图和照片里的尺寸、间距与对齐。",
    platformNote: "适用于 Mac、iPhone 和 iPad",
    freeNote: "免费下载",
    proLink: "对比免费版与 Pro",
    tryProbe: "试试间距探针",
    spacingAlt: "彩色样卡的测量示例，标出前两张卡片之间 18 像素的间距。",
    tools: "测量每一处细节。",
    toolsIntro: "检查容易被肉眼忽略的边界、对齐和低对比度细节。",
    tolerance: "容差",
    probeHint: "移动指针即可测量",
    probeTouchHint: "轻点色块或间隙即可测量",
    pauseMotion: "暂停演示",
    resumeMotion: "播放演示",
    measurements: [
      { mode: "object", title: "对象边界检测", body: "框选图标或元素，测量可见边界的尺寸。", alt: "红色选框标出纸飞机的尺寸为 156 × 110 像素。" },
      { mode: "guides", title: "参考线吸附", body: "将参考线对齐到设计稿的边缘，直接读取两条线之间的距离。", alt: "两条蓝色参考线吸附到封面两侧，间距为 216 像素。" },
      { mode: "cross", title: "十字准线", body: "同时检查水平和垂直对齐，并读取指针坐标，发现相差几个像素的控件。", alt: "十字准线穿过 Card 选项，显示附近控件相差 5 像素。" },
      { mode: "tolerance", title: "边缘检测容差", body: "调整边缘检测容差，让测量跨过阴影或低对比度的分隔线。", alt: "容差从 8 调到 32 后，探针从 336 像素的分隔线移至 480 像素的外边界。" }
    ],
    workflow: "从截图到带标注的 PNG。",
    workflowSteps: [
      {
        title: "打开截图",
        body: "在 Mac、iPhone 或 iPad 上打开截图、照片或设计稿。",
        image: "workflow-workshop.png", width: 720, height: 424,
        alt: "尚未添加测量标注的字体工作坊报名页设计稿。"
      },
      {
        title: "固定测量结果",
        body: "把尺寸和间距标在图上，保存为可编辑文档，方便随时继续测量。",
        image: "workflow-workshop-measure.png", width: 720, height: 488,
        alt: "图钉图标表示工作坊设计稿上的两处测量已固定。"
      },
      {
        title: "分享带标注的 PNG",
        body: "将原图和测量结果一起导出。图中报名按钮为 240 × 56 px，字体样张上方的间距为 26 px。",
        image: "workflow-workshop-annotated.png", width: 720, height: 488,
        alt: "分享预览中的 workshop-annotated.png，保留了两处测量标注。"
      }
    ],
    workflowExtra: ["将原图和标注保存为可编辑的 ", " 文档，也可以将读数复制为 CSS、JSON 或纯文本。"],
    live: {
      title: "在 Mac 上实时测量屏幕。",
      body: "从菜单栏开始，固定所需的读数。选择「打开为文档」，就能继续编辑捕获的图像和测量结果。",
      permission: "实时测量需要 macOS 屏幕录制权限。",
      alt: "Mac 菜单栏中的 PixelsMeasure 菜单，突出显示开始测量选项。"
    },
    planScope: "每份文档或每次实时会话",
    plans: [
      {
        name: "免费版",
        limit: "最多 3 条测量",
        features: ["探针和十字准线", "保存与分享文档"]
      },
      {
        name: "Pro",
        limit: "不限测量数量",
        features: ["对象边界检测与参考线吸附", "批量复制、裁剪和旋转"],
        note: "可在 App 内的示例文档中体验 Pro 工具。"
      }
    ],
    download: "下载 PixelsMeasure。",
    requirements: "适用于 macOS 14、iOS 17、iPadOS 17 或更高版本。",
    footer: ["隐私政策", "服务条款", "联系", "GitHub", "博客"]
  }
};

export function copyFor(locale) {
  return landingCopy[locale] || landingCopy.en;
}
