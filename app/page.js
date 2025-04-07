// app/page.js


import Slider from './_components/Slider';
import Cards from './_components/Cards';
import ServiceHighlight from './_components/ServiceHighlight';
import TehranMapSection from './_components/TehranMapSection';


export default function HomePage() {
  return (
    <>
      
      <Slider />
      <Cards />
      <ServiceHighlight />
      <TehranMapSection />
      


      {/* بقیه کامپوننت‌ها همینجا */}
    </>
  );
}
