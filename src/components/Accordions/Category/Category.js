import { useState } from 'react'

const Category = () => {
    const [open, setOpen] = useState(false);
    const openHandler = () => {
        setOpen(!open);
    };

  return (
    <div className='w-full'>
        <div className="flex flex-col gap-0-8">
            <label className="font-fN">კატეგორია *</label>
            <div className='flex justify-between px-1-6 py-1-2 rounded-1-2 border-0-1 border-grey01 bg-white03 outline-none'>
                <input 
                    type='text'
                    name='categoryId'
                    placeholder='აირჩიეთ კატეგორია' 
                    className='outline-none'
                />
                <button onClick={openHandler}><img src='/svg/arrow-down.svg'/></button>
            </div>
        </div>
        {open && (
            <div className='p-1-6 rounded-1-2 border-0-1 border-grey02 mt-0-4'>
                <div className='flex flex-wrap items-start gap-0-8'>
                    Content here, data from Api
                </div>
            </div>
        )}
    </div>
  )
}

export default Category