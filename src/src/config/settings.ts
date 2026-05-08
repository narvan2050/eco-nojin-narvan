// config/settings.ts - تایپ‌اسکریپت با any و مشکلات ساختاری
const appConfig: any = {   // ❌ استفاده از any به جای type مشخص
  apiUrl: "https://api.econojin.ir",
  timeout: "5000",        // ❌ timeout باید عدد باشد نه رشته
  debug: true
};

function initializeApp(config: any) {   // ❌ any دوباره
  console.log("Starting app with config: " + config.apiUrl);
  // ❌ عدم بررسی وجود apiUrl قبل از استفاده
}

export { appConfig, initializeApp };
