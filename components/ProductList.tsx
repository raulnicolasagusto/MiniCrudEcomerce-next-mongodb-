import Image from "next/image";
import Link from "next/link";


const ProductList = () => {
    const product = ["","",""]
  return (
    <div className='px-4 md:px-12 py-5 md:py-10 flex justify-center items-center' id='product'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-12 gap-5">
            {product.map((product, index) => (
                <Link href="/product/123" key={index}>
                    <Image src="/watch1.jpg" alt="prodcut-image" width={1000} height={1000} className="max-w-[17rem] h-72 object-center rounded-lg object-cover" />
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold">
                            a very good watch
                        </h2>
                        <p className="text-sm text-gray-500">
                            $1200
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default ProductList