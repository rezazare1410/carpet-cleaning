import ClientComponent from "./ClientComponent";

export default function AutomaticCarpetCleaningPage() {
  return (
    <div className="page-container" style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>قالیشویی با دستگاه‌های تمام اتوماتیک</h1>

      <p>
        قالیشویی با دستگاه‌های اتوماتیک، یک روش پیشرفته و به‌ روز برای شستشوی فرش‌هاست که دقت بالا، سرعت عملکرد و بهداشت کامل را به همراه دارد.
      </p>
      <p>
        در این روش از تکنولوژی جدید و مواد شوینده استاندارد استفاده می‌شود تا بدون آسیب به بافت، فرش کاملاً تمیز و سالم تحویل داده شود.
      </p>

      {/* 👇 کارت‌ها اینجاست */}
      <ClientComponent />
    </div>
  );
}
