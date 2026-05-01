import MerchCard from "@/components/MerchCard";

export default function Tournaments() {
  return (
    <div className="p-10">
      <section className="p-10 bg-gray-100">
  <h2 className="text-4xl font-bold text-black">Merchandise</h2>

  <div className="grid md:grid-cols-3 gap-6 text-black">
    
    <MerchCard
      name="Away Kit"
      price={1500}
      image="/kitA.jpeg"
    />

    <MerchCard
      name="Home Kit"
      price={1500}
      image="/kitB.jpeg"
    />

  </div>
</section>
    </div>
  );
}