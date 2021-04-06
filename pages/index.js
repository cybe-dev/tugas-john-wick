import Link from "next/link";
import Image from "next/image";

export const Product = ({ img, name, price }) => {
  const uri = encodeURIComponent(`Saya mau pesan ${name}`);
  return (
    <div className="bg-white p-2 flex flex-col">
      <Image
        src={img}
        width={300}
        height={300}
        className="w-full object-cover"
      />
      <div className="mt-3 flex-1 mb-5">
        <span className="font-bold block text-gray-700">{name}</span>
        <span className="text-gray-600">{price}</span>
      </div>
      <Link href={`https://wa.me/6285609259005?text=${uri}`}>
        <a className="mt-auto block py-1 px-3 bg-yellow-600 text-white font-bold mt-6 text-center">
          Beli
        </a>
      </Link>
    </div>
  );
};

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-yellow-500 px-5 lg:px-20 h-16 flex items-center shadow-md mb-6">
        <h1>
          <Link href="/">
            <a
              className="text-white font-bold text-lg"
              style={{ fontFamily: "Montserrat" }}
            >
              Cyro Store
            </a>
          </Link>
        </h1>
      </div>
      <div className="px-5 lg:px-20 grid grid-flow-row grid-cols-2 lg:grid-cols-4 gap-10">
        <Product name="Hoodie P&B Halloween" price="Rp. 250,000" img="/1.jpg" />
        <Product name="Sweater Erigo" price="Rp. 275,000" img="/2.jpg" />
        <Product
          name="Hoodie Bape Space Camo"
          price="Rp. 300,000"
          img="/3.jpg"
        />
        <Product name="Pull & Bear" price="Rp. 225,000" img="/4.jpg" />
      </div>
      <div className="mt-auto py-5 lg:px-20 bg-gray-200 text-center py-5">
        &copy;2021 Cyro Store
      </div>
    </div>
  );
}
