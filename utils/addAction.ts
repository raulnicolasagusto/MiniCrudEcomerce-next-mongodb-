"use server"

import { connectDB } from "@/api/db/connectDB";
import cloudinary from "./cloudinary";
import Product from "../api/models/product.model";


export async function addAction(formData: FormData) {
  
    try {
        // Extract form data
        const image = formData.get('image')as File;
        const name = formData.get('name');
        const price = formData.get('price');
        const link = formData.get('link');
        const description = formData.get('description');

        // Validate required fields
        if (!image || !name || !price || !link || !description) {
            throw new Error("Se necesita completar todos los campos");

        }

        await connectDB();
        // Here you would typically handle the data, e.g., save it to a database
        console.log("Product added:", { image, name, price, link, description });
        //Codigo para subir la imagen a Cloudinary
        const arrayBuffer = await image.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const imageResponse: any = await new Promise((resolve, reject) =>{
            cloudinary.uploader
            .upload_stream({
                resource_type: "auto",
                folder: "relojes",
            },async(error, result)=>{
                if(error){
                    return reject(error.message);
                }
                return resolve(result);
            }).end(buffer);
        });

        console.log("Image response: ", imageResponse);

        //guardar en la base de datos
        await Product.create({
            image: imageResponse.secure_url,
            name,
            price,
            link,
            description,
        });

        return{
            success: "Product added successfully",
        }

        }catch (error) {
            
            return { error: "Algo salio mal" };
        }
}