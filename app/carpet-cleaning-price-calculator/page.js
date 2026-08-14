import PriceCalculator from "./PriceCalculator";

export const metadata = {
  title: "محاسبه‌گر قیمت قالیشویی | قالیشویی زارع",

  description:
    "محاسبه آنلاین هزینه تقریبی شستشوی فرش ماشینی، دستباف، گل‌ابریشم و موکت بر اساس متراژ و تعرفه قالیشویی زارع.",

  alternates: {
    canonical: "https://zarecarpet.com/carpet-cleaning-price-calculator",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function CarpetCleaningPriceCalculatorPage() {
  return <PriceCalculator />;
}
