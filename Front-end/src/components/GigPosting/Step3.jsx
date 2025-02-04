/* eslint-disable react/prop-types */


const Step3 = ({nextStep, prevStep}) => {

    const submitFormData = (e) => {
        e.preventDefault()
    }

  return (
    <form onSubmit={submitFormData}>

        <div className='w-[60%] space-y-3'>
            <h1 className='text-5xl w-[70%]'>
                Scope of your work
            </h1>
            <p className='text-2xl opacity-50'>
                Consider the size and time it will take to complete your project
            </p>
        </div>

        <div className='mt-16'>
            <div className='w-[80%] flex gap-6 items-center flex-wrap'>
                <div className='w-[48%] space-y-2'>
                    <label htmlFor="">Duration</label>
                    <input type="text" className="w-full border-2 p-3 rounded-md" placeholder="eg. One time, 3 Months, 6 Months"/>
                </div>
                <div className='w-[48%] space-y-2'>
                    <label htmlFor="">Level</label>
                    <input type="text" className="w-full border-2 p-3 rounded-md" placeholder="eg, Entry, Professional, Expert level"/>
                </div>
                <div className='w-[48%] space-y-2'>
                    <label htmlFor="">Scale</label>
                    <input type="text" className="w-full border-2 p-3 rounded-md" placeholder="eg, Large, Medium, Small"/>
                </div>

            </div>
            <div className='mt-7 flex w-full justify-between'>
                <button className='bg-white mt-16 border-blue-500 border rounded-md py-2 px-5 hover:scale-105 text-blue-500'
                    onClick={prevStep}
                >Back</button>
                <button className='bg-blue-500 mt-16 rounded-md py-2 px-5 hover:scale-105 text-white'
                    onClick={nextStep}
                >Next Budget</button>
            </div>
        </div>
    </form>
  )
}

export default Step3