import Image from "next/image";

export default function MerchCard({ name, price, image }) {
  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full transform transition duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.01]">

      <div className="relative w-full h-64 bg-gray-50 flex items-center justify-center overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4 text-center flex flex-col flex-grow justify-between min-h-[120px]">
       <h3 className="font-bold text-lg mb-2">{name}</h3>

       <p className="text-blue-600 font-bold mb-4">
          KES {price}
        </p>

        <button className="mt-auto w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
          Add to Cart
       </button>
    </div>

  </div>  
  );
}