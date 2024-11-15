import Home from "@/components/Home";
import {TautanTerkait} from "@/components/Home/runningImage";
import {fetchProducts} from "@/core/services/api.services";

export default async function IndexPage() {
  const productsData = await fetchProducts();

  return (
    <div>
      <main className='flex '>
        <Home />
        <TautanTerkait data={productsData} />
      </main>
    </div>
  );
}
