const blogPosts = [
  {
    id: 1,
    title: "درک عمیق Closure در جاوااسکریپت",
    slug: "deep-understanding-of-javascript-closures",
    excerpt:
      "Closure یکی از مهم‌ترین مفاهیم جاوااسکریپت است که هر فرانت‌اند دولوپری باید آن را بلد باشد.",
    content: `
Closure یکی از بنیادی‌ترین و در عین حال قدرتمندترین مفاهیم در جاوااسکریپت است. زمانی که یک تابع داخلی به متغیرهای تعریف‌شده در محدوده (Scope) تابع بیرونی خود دسترسی داشته باشد، حتی بعد از پایان اجرای آن تابع بیرونی، ما با Closure مواجه هستیم. این رفتار به لطف ساختار lexical scope در جاوااسکریپت اتفاق می‌افتد.

درک Closure برای ساخت ماژول‌ها، مدیریت state خصوصی، پیاده‌سازی الگوهای طراحی مانند Module Pattern و حتی درک درست رفتار هوک‌ها در React ضروری است. بسیاری از باگ‌های رایج در پروژه‌های فرانت‌اند، مخصوصاً در حلقه‌ها و callbackها، به درک ناقص Closure برمی‌گردد.

اگر می‌خواهید در سطح حرفه‌ای جاوااسکریپت کار کنید، تسلط بر Closure یک مهارت حیاتی است.

`,
    example: `
مثال ساده:

function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2

در اینجا متغیر count حذف نمی‌شود چون توسط تابع داخلی نگه داشته شده است.`,

    category: "JavaScript",
    tags: ["جاوااسکریپت", "Closure", "مفاهیم پیشرفته"],
    author: "نام شما",
    date: "1404-11-05",
    readingTime: "۵ دقیقه",
    featured: true,
  },

  {
    id: 2,
    title: "تفاوت let و var و const در جاوااسکریپت",
    slug: "difference-between-let-var-const",
    excerpt:
      "یکی از سوالات پرتکرار مصاحبه‌های فرانت‌اند تفاوت let و var و const است.",
    content: `
با معرفی ES6، نحوه تعریف متغیرها در جاوااسکریپت متحول شد. پیش از آن تنها از var استفاده می‌شد که مشکلاتی مانند hoisting غیرقابل‌پیش‌بینی و نداشتن block scope را ایجاد می‌کرد.

let و const برای رفع همین مشکلات معرفی شدند. این دو دارای block scope هستند، رفتار قابل پیش‌بینی‌تری در hoisting دارند و باعث کاهش باگ‌های ناخواسته می‌شوند. const نیز برای تعریف مقادیری استفاده می‌شود که نباید دوباره مقداردهی شوند.

در پروژه‌های مدرن، استفاده از var تقریباً منسوخ شده و در مصاحبه‌های فنی نیز تفاوت دقیق این سه کلمه کلیدی یکی از سوالات پرتکرار است. درک صحیح آن‌ها باعث نوشتن کد تمیزتر و امن‌تر می‌شود.

`,
    example: `
    
مثال:

if (true) {
  var a = 10;
  let b = 20;
}

console.log(a); // 10
console.log(b); // Error

همچنین const قابل reassignment نیست:

const x = 5;
x = 10; // Error
`,

    category: "JavaScript",
    tags: ["جاوااسکریپت", "ES6"],
    author: "نام شما",
    date: "1404-10-30",
    readingTime: "۴ دقیقه",
    featured: false,
  },

  {
    id: 3,
    title: "شروع کار با Tailwind CSS",
    slug: "getting-started-with-tailwind-css",
    excerpt:
      "Tailwind CSS یک فریمورک utility-first است که سرعت توسعه UI را بالا می‌برد.",
    content: `
Tailwind CSS یک فریمورک utility-first است که رویکرد متفاوتی نسبت به فریمورک‌های سنتی مانند Bootstrap دارد. در Tailwind به جای استفاده از کلاس‌های آماده‌ی کامپوننتی، از کلاس‌های کوچک و ترکیبی برای ساختن UI استفاده می‌شود.

این رویکرد باعث می‌شود توسعه‌دهنده کنترل کامل‌تری روی طراحی داشته باشد و نیاز به نوشتن فایل‌های CSS جداگانه به حداقل برسد. همچنین با استفاده از JIT compiler، فقط کلاس‌های استفاده‌شده در خروجی نهایی قرار می‌گیرند که منجر به کاهش حجم فایل CSS می‌شود.

اگر به دنبال سرعت توسعه بالا، انعطاف‌پذیری و طراحی مدرن هستید، Tailwind یکی از بهترین انتخاب‌ها در دنیای فرانت‌اند امروز است.

`,
    example: `
مثال ساخت دکمه:

<button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
  کلیک کن
</button>

بدون نوشتن حتی یک فایل CSS جداگانه می‌توان UI حرفه‌ای ساخت.`,

    category: "CSS",
    tags: ["Tailwind", "CSS", "UI"],
    author: "نام شما",
    date: "1404-10-25",
    readingTime: "۴ دقیقه",
    featured: true,
  },

  {
    id: 4,
    title: "Flexbox یا Grid؟ کدام بهتر است؟",
    slug: "flexbox-vs-grid",
    excerpt:
      "در طراحی لایوت همیشه این سوال وجود دارد که از Flexbox استفاده کنیم یا Grid.",
    content: `
یکی از سوالات رایج در طراحی لایوت وب این است که از Flexbox استفاده کنیم یا CSS Grid؟ پاسخ کوتاه این است: بستگی دارد.

Flexbox برای طراحی‌های یک‌بعدی (چیدمان در یک ردیف یا ستون) بسیار مناسب است. در مقابل، Grid برای طراحی‌های دو‌بعدی که نیاز به کنترل همزمان ردیف‌ها و ستون‌ها دارند، قدرتمندتر عمل می‌کند.

در پروژه‌های واقعی معمولاً ترکیبی از هر دو استفاده می‌شود. Flexbox برای کامپوننت‌های داخلی و Grid برای ساختار کلی صفحه انتخاب هوشمندانه‌ای است. شناخت تفاوت‌ها و کاربردهای هرکدام باعث می‌شود تصمیمات بهتری در طراحی بگیرید.

`,
    example: `

مثال Flexbox:

.container {
  display: flex;
  justify-content: space-between;
}

مثال Grid:

.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

انتخاب بین این دو بستگی به نوع طراحی شما دارد.
`,

    category: "CSS",
    tags: ["Flexbox", "Grid", "Layout"],
    author: "نام شما",
    date: "1404-10-20",
    readingTime: "۶ دقیقه",
    featured: false,
  },

  {
    id: 5,
    title: "هوک useEffect در ری‌اکت به زبان ساده",
    slug: "react-useeffect-simple",
    excerpt:
      "هوک useEffect برای مدیریت side effect ها در کامپوننت‌های تابعی استفاده می‌شود.",
    content: `
هوک useEffect یکی از مهم‌ترین ابزارها در کامپوننت‌های تابعی React است. این هوک برای مدیریت side effectها مانند دریافت داده از API، کار با تایمرها، event listenerها و عملیات وابسته به lifecycle استفاده می‌شود.

dependency array تعیین می‌کند که effect چه زمانی اجرا شود؛ بدون آن در هر render اجرا می‌شود، با آرایه خالی فقط یک بار و با مقادیر مشخص هنگام تغییر آن‌ها.

درک صحیح useEffect برای جلوگیری از رندرهای اضافی، حلقه‌های بی‌نهایت و باگ‌های مربوط به داده‌های قدیمی (stale state) ضروری است. تسلط بر این هوک یکی از نقاط عطف در مسیر حرفه‌ای شدن در React است.

`,
    example: `

مثال:

import { useEffect, useState } from "react";

function Example() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return <div>{data.length}</div>;
}

آرایه خالی باعث می‌شود فقط یکبار اجرا شود.
`,

    category: "React",
    tags: ["React", "Hooks"],
    author: "نام شما",
    date: "1404-10-15",
    readingTime: "۶ دقیقه",
    featured: true,
  },

  {
    id: 6,
    title: "مدیریت State در ری‌اکت",
    slug: "state-management-in-react",
    excerpt: "State قلب تپنده کامپوننت‌های ری‌اکت است.",
    content: `
State قلب تپنده هر کامپوننت React است. هر زمان که state تغییر کند، کامپوننت دوباره render می‌شود و UI بروزرسانی می‌گردد. مدیریت صحیح state نقش بسیار مهمی در عملکرد، خوانایی و مقیاس‌پذیری پروژه دارد.

در پروژه‌های کوچک از useState استفاده می‌شود، اما با بزرگ‌تر شدن پروژه ممکن است نیاز به بالا بردن state (Lifting State Up)، استفاده از Context API یا کتابخانه‌هایی مانند Redux یا Zustand باشد.

درک معماری مدیریت state باعث می‌شود اپلیکیشن‌های قابل نگهداری‌تر و حرفه‌ای‌تری بسازید.

`,
    example: `

مثال:

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

هر بار setCount اجرا شود، کامپوننت re-render می‌شود.
`,

    category: "React",
    tags: ["React", "State"],
    author: "نام شما",
    date: "1404-10-10",
    readingTime: "۵ دقیقه",
    featured: false,
  },

  {
    id: 7,
    title: "ساخت فرم حرفه‌ای با اعتبارسنجی در جاوااسکریپت",
    slug: "form-validation-in-javascript",
    excerpt:
      "فرم‌ها بخش مهمی از هر وبسایتی هستند و باید به درستی اعتبارسنجی شوند.",
    content: `
فرم‌ها یکی از حیاتی‌ترین بخش‌های هر وب‌سایت هستند. ثبت‌نام، ورود، خرید و ارسال اطلاعات همگی وابسته به فرم‌ها هستند. اگر اعتبارسنجی به درستی انجام نشود، هم تجربه کاربری ضعیف می‌شود و هم امنیت سیستم به خطر می‌افتد.

اعتبارسنجی می‌تواند در سمت کاربر (Client-side) و سمت سرور (Server-side) انجام شود. استفاده از Regex، مدیریت خطاها و نمایش پیام‌های مناسب به کاربر از اصول مهم طراحی فرم حرفه‌ای است.

یک فرم خوب باید سریع، واضح، امن و کاربرپسند باشد.

`,
    example: `

مثال اعتبارسنجی ایمیل:

function validateEmail(email) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}

console.log(validateEmail("test@gmail.com")); // true

اعتبارسنجی مناسب تجربه کاربری را بهبود می‌دهد.
`,

    category: "JavaScript",
    tags: ["Form", "Validation"],
    author: "نام شما",
    date: "1404-10-05",
    readingTime: "۷ دقیقه",
    featured: false,
  },

  {
    id: 8,
    title: "بهینه‌سازی سرعت سایت در فرانت‌اند",
    slug: "frontend-performance-optimization",
    excerpt: "سرعت سایت تاثیر مستقیم بر تجربه کاربری و سئو دارد.",
    content: `
سرعت بارگذاری سایت تاثیر مستقیم بر تجربه کاربری، نرخ تبدیل و سئو دارد. کاربران معمولاً بیش از چند ثانیه برای لود شدن صفحه صبر نمی‌کنند.

تکنیک‌هایی مانند Lazy Loading، Code Splitting، بهینه‌سازی تصاویر، کاهش حجم باندل جاوااسکریپت و استفاده از CDN می‌توانند عملکرد سایت را به شکل قابل توجهی بهبود دهند.

بهینه‌سازی یک فرآیند مستمر است، نه یک کار یک‌باره. توسعه‌دهندگان حرفه‌ای همیشه performance را به عنوان یک اولویت در نظر می‌گیرند.

`,
    example: `
1- Lazy Loading
2- Code Splitting
3- بهینه‌سازی تصاویر

مثال Lazy Loading در React:

const Page = React.lazy(() => import("./Page"));

این کار باعث کاهش حجم اولیه سایت می‌شود.
`,

    category: "Performance",
    tags: ["Optimization", "Web Performance"],
    author: "نام شما",
    date: "1404-09-28",
    readingTime: "۸ دقیقه",
    featured: true,
  },

  {
    id: 9,
    title: "آشنایی با REST API برای فرانت‌اند",
    slug: "introduction-to-rest-api",
    excerpt: "برای ارتباط با بک‌اند باید مفاهیم REST API را بدانیم.",
    content: `
در دنیای مدرن وب، فرانت‌اند و بک‌اند از طریق API با یکدیگر ارتباط برقرار می‌کنند. REST یکی از رایج‌ترین معماری‌های طراحی API است که بر پایه متدهای HTTP مانند GET، POST، PUT و DELETE کار می‌کند.

درک نحوه ارسال درخواست، مدیریت پاسخ‌ها، هندل کردن خطاها و کار با JSON برای هر فرانت‌اند دولوپر ضروری است. بدون درک API، ساخت اپلیکیشن‌های داینامیک تقریباً غیرممکن است.

تسلط بر REST API شما را یک قدم به توسعه‌دهنده فول‌استک شدن نزدیک‌تر می‌کند.

`,
    example: `

GET - دریافت داده
POST - ارسال داده
PUT - بروزرسانی
DELETE - حذف

مثال fetch:

fetch("https://api.example.com/users")
  .then(res => res.json())
  .then(data => console.log(data));
`,

    category: "API",
    tags: ["REST", "HTTP", "Fetch"],
    author: "نام شما",
    date: "1404-09-20",
    readingTime: "۶ دقیقه",
    featured: false,
  },

  {
    id: 10,
    title: "مسیر یادگیری فرانت‌اند در سال ۱۴۰۵",
    slug: "frontend-roadmap-1405",
    excerpt:
      "اگر می‌خواهید فرانت‌اند دولوپر شوید، این نقشه راه به شما کمک می‌کند.",
    content: `
فرانت‌اند یکی از پرتقاضاترین حوزه‌های برنامه‌نویسی است، اما مسیر یادگیری آن می‌تواند برای مبتدیان گیج‌کننده باشد. شروع با HTML و CSS پایه، سپس یادگیری عمیق JavaScript، کار با Git و در نهایت ورود به یک فریمورک مانند React مسیر استانداردی است که اکثر توسعه‌دهندگان حرفه‌ای طی کرده‌اند.

پس از آن، مفاهیمی مانند Performance Optimization، تست‌نویسی، معماری پروژه و الگوهای طراحی اهمیت پیدا می‌کنند.

کلید موفقیت در این مسیر، تمرین مستمر، ساخت پروژه‌های واقعی و یادگیری مداوم است.

`,
    example: `
1- HTML
2- CSS
3- JavaScript
4- Git
5- React
6- Performance & Testing

مثال مسیر یادگیری:
ابتدا یک سایت ساده با HTML/CSS بساز،
سپس با JavaScript تعاملی‌اش کن،
بعد وارد React شو.

تمرین مداوم مهم‌ترین عامل موفقیت است.
`,

    category: "Career",
    tags: ["Roadmap", "Frontend Developer"],
    author: "نام شما",
    date: "1404-09-10",
    readingTime: "۹ دقیقه",
    featured: true,
  },
];

export default blogPosts;
