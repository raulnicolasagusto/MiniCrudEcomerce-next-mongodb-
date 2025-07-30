"use client";

import { addAction } from '@/utils/addAction'
import React, { ChangeEvent } from 'react'
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const AddForm = () => {
    const router = useRouter();
    const [imageURL, setImageURL] = React.useState<string | null>(null);
    async function clientAddAction(formData: FormData) {
        const {error, success} =await addAction(formData);

        if(error){
            toast.error(error);

        }
        if(success){
            toast.success(success);
            // Reset the form after successful submission
            formData.forEach((value, key) => {
                if (key !== 'image') {
                    formData.set(key, '');
                }
            });
            router.push('/'); // Redirect to the home page or another page after successful submission
            setImageURL(null); // Reset the image preview
        }
    }

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const fileSize = file.size;

            if(Math.round(fileSize / 1024) > 1024){
                toast.error("File size exceeds 1MB");
            }else{
                setImageURL(URL.createObjectURL(file));
            }
        }
    }
    
  return (
    <form action={clientAddAction} className='w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md scape-y-4 md:mt-5'>
        {imageURL && (<Image src={imageURL} alt="img" width={200} height={200} className="max-w-full object-cover object-center" />)}
        <div className='flex flex-col w-full'>
            <label>Product Image: </label>
            <input onChange={handleImageChange} type="file" accept="image/*" name="image"  className='w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500'/>
        </div>
        <div className='flex flex-col w-full'>
            <label>Name: </label>
            <input type="text" name="name" placeholder='Enter the product name' className='w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500'/>
        </div>
        <div className='flex flex-col w-full'>
            <label>Price: </label>
            <input type="number" name="price" placeholder='Enter the product price' className='w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500'/>
        </div>
        <div className='flex flex-col w-full'>
            <label>Seller's Link: </label>
            <input type="text" name="link" placeholder='Link to where buyers can find you' className='w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500'/>
        </div>
        <div className='flex flex-col w-full'>
            <label>Description: </label>
            <textarea rows={4} name="description" placeholder='Enter the product description' className='w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500'></textarea>
        </div>
        <button type="submit" className='mt-5 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-500 transition-colors rounded-md cursor-pointer'>Add Product</button>
    </form>
  )
}

export default AddForm

// finalizado la carga de archivos en mongo db, pendiente el fetch de los datos, editar y eliminar, el video quedo en 1:36:00 hs de 2:52:00 hs
// https://www.youtube.com/watch?v=uEb1fVFcTg8
//canal Emmanuel Ezeigbo
//vide nombre: Build and Deploy a Minimalistic E-commerce App with Next.js 15, TypeScript & MongoDB
