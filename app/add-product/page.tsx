import AddForm from '@/components/AddForm';
import React from 'react'


const AddProductPage = () => {
  return (
    <div className="text-black px-4 md:px-12 bg-[#F8F9FA] pb-8">
      <h2 className='text-center font-semibold pt-8 text-xl md:text-2xl max-w-xl mx-auto'>Agregar Productos</h2>
      {/* Agrgamos form*/}
      <AddForm />
      {/* Fin del form */}
    </div>
  )
}

export default AddProductPage;