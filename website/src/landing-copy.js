import traditionalChinese from "./locales/zh-Hant.js";
import french from "./locales/fr-FR.js";
import german from "./locales/de-DE.js";
import italian from "./locales/it.js";
import japanese from "./locales/ja.js";
import korean from "./locales/ko.js";
import russian from "./locales/ru.js";
import mexicanSpanish from "./locales/es-MX.js";

export const storeURL = "https://apps.apple.com/app/pixelsmeasure/id1638740542";
export const imageBase = process.env.BASE_URL + "img/v5/";

export const landingCopy = {
  "en-US": {
    nav: ["Workflow", "Tools", "Download"],
    language: "Site language",
    siteNav: "Site navigation",
    footerNav: "Footer navigation",
    guide: "Product guide",
    englishOnly: "English",
    pageTitle: "Pixel ruler for Mac, iPhone, and iPad",
    store: "Download on the App Store",
    watchPreview: "Watch video",
    previewTitle: "PixelsMeasure",
    closePreview: "Close preview",
    previewDescription: "PixelsMeasure product video",
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
        limit: "Pin up to 3 measurements",
        features: ["Keep measuring with Probe and Cross after reaching the pin limit", "Save and share documents"]
      },
      {
        name: "Pro",
        limit: "Pin unlimited measurements",
        features: ["Object detection and guide snapping", "Batch copy, crop, and rotate"],
        note: "Try Pro tools in the sample document."
      }
    ],
    download: "Download PixelsMeasure.",
    requirements: "For macOS 14, iOS 17, and iPadOS 17 or later.",
    footer: ["Privacy", "Terms of Service", "Contact", "GitHub", "Blog"]
  },
  "zh-Hans": {
    nav: ["操作流程", "测量工具", "下载"],
    language: "网站语言",
    siteNav: "网站导航",
    footerNav: "页脚导航",
    guide: "产品指南",
    englishOnly: "英文",
    pageTitle: "适用于 Mac、iPhone 和 iPad 的像素测量工具",
    store: "在 App Store 下载",
    watchPreview: "观看视频",
    previewTitle: "PixelsMeasure",
    closePreview: "关闭预览",
    previewDescription: "PixelsMeasure 产品宣传片",
    intro: "精确检查截图和照片里的尺寸、间距与对齐。",
    platformNote: "适用于 Mac、iPhone 和 iPad",
    freeNote: "免费下载",
    proLink: "对比免费版与 Pro",
    tryProbe: "试试间距探针",
    spacingAlt: "彩色样卡的测量示例，标出前两张卡片之间 18 像素的间距。",
    tools: "测量每一处细节。",
    toolsIntro: "找出肉眼不易察觉的边界、对齐偏差和低对比度细节。",
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
        limit: "最多固定 3 条测量结果",
        features: ["达到固定上限后，仍可用探针和十字准线测量", "保存与分享文档"]
      },
      {
        name: "Pro",
        limit: "固定测量结果数量不限",
        features: ["对象边界检测与参考线吸附", "批量复制、裁剪和旋转"],
        note: "可在 App 内的示例文档中体验 Pro 工具。"
      }
    ],
    download: "下载 PixelsMeasure。",
    requirements: "适用于 macOS 14、iOS 17、iPadOS 17 或更高版本。",
    footer: ["隐私政策", "服务条款", "联系", "GitHub", "博客"]
  },
  "zh-Hant": traditionalChinese,
  "fr-FR": french,
  "de-DE": german,
  it: italian,
  ja: japanese,
  ko: korean,
  ru: russian,
  "es-MX": mexicanSpanish
};

export function copyFor(locale) {
  return Object.prototype.hasOwnProperty.call(landingCopy, locale)
    ? landingCopy[locale]
    : landingCopy["en-US"];
}
