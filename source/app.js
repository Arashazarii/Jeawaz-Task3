const citiesByProvince = {
  "آذربایجان شرقی": ["اهر", "تبریز", "خسروشاه", "مراغه", "میانه"],
  "آذربایجان غربی": ["ارومیه", "بوکان", "خوی", "ماکو", "نقده", "میاندوآب"],
  اردبیل: ["اردبیل", "بیله‌سوار", "خلخال", "مشگین‌شهر", "نیر", "سرعین"],
  اصفهان: [
    "اصفهان",
    "خمینی‌شهر",
    "کاشان",
    "گلپایگان",
    "نجف‌آباد",
    "فولادشهر",
    "شهرضا",
    "زرین‌شهر",
  ],
  تهران: [
    "اندیشه",
    "اسلام‌شهر",
    "تهران",
    "دماوند",
    "پردیس",
    "رباط‌کریم",
    "ورامین",
    "شهریار",
  ],
  فارس: ["شیراز", "جهرم", "کازرون", "مرودشت", "لار", "فسا"],
  "خراسان رضوی": [
    "تربت‌حیدریه",
    "سبزوار",
    "مشهد",
    "نیشابور",
    "قوچان",
    "گناباد",
  ],
  خوزستان: ["آبادان", "بهبهان", "خرمشهر", "دزفول", "اهواز", "شادگان"],
};

// مرتب کردن استان‌ها به ترتیب حروف الفبا
const sortedProvinces = Object.keys(citiesByProvince).sort((a, b) =>
  a.localeCompare(b, "fa")
);

// پر کردن لیست استان‌ها
const provinceSelect = document.getElementById("province");
sortedProvinces.forEach((prov) => {
  const opt = document.createElement("option");
  opt.value = prov;
  opt.textContent = prov;
  provinceSelect.appendChild(opt);
});

const citySelect = document.getElementById("city");

provinceSelect.addEventListener("change", () => {
  const selectedProvince = provinceSelect.value;
  citySelect.innerHTML = ""; // پاک کردن شهرهای قبلی

  if (selectedProvince && citiesByProvince[selectedProvince]) {
    citySelect.disabled = false;

    // مرتب کردن شهرها به ترتیب حروف الفبا
    const sortedCities = citiesByProvince[selectedProvince].sort((a, b) =>
      a.localeCompare(b, "fa")
    );

    // اضافه کردن گزینه پیش‌فرض
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "شهرتان را انتخاب کنید";
    citySelect.appendChild(defaultOption);

    // اضافه کردن شهرها
    sortedCities.forEach((city) => {
      const opt = document.createElement("option");
      opt.value = city;
      opt.textContent = city;
      citySelect.appendChild(opt);
    });
  } else {
    citySelect.disabled = true;
    const opt = document.createElement("option");
    opt.textContent = "شهرتان را انتخاب کنید";
    opt.value = "";
    citySelect.appendChild(opt);
  }
});
