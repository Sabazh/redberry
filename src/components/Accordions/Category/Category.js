import { useState } from 'react'

const Category = ({ value, onChange, categories}) => {

  const [open, setOpen] = useState(false)
  const openHandler = () => {
    setOpen(!open)
  }
  const activeTitle =
    categories.find((item) => item.id === value)?.title || 'აირჩიეთ კატეგორია'
  return (
    <div className="w-full relative">
      <div className="flex flex-col gap-0-8">
        <label className="font-fN">კატეგორია *</label>
        <div className="flex justify-between px-1-6 py-1-2 rounded-1-2 border-0-1 border-grey01 bg-white03 outline-none">
          <span>{activeTitle}</span>
          <button onClick={openHandler} type="button">
            <img src="/svg/arrow-down.svg" />
          </button>
        </div>
      </div>
      {open && (
        <div className="p-1-6 rounded-1-2 border-0-1 border-grey02 mt-0-4 absolute top-100-percent w-full left-0">
          <div className="flex flex-wrap gap-0-8">
            {categories.map((item) => (
              <button
                key={item.id}
                onClick={() => onChange(item.id)}
                type="button"
                className={`${
                  item.id === value ? 'bg-slate-500' : ''
                } block h-4-0 border-0-1 rounded-1-2`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Category
