/* eslint-disable react/prop-types */


const Step1 = ({nextStep, prevStep, count}) => {

    const submitFormData = (e) => {
        e.preventDefault()
    }

  return (
    <form onSubmit={submitFormData}>

        <div className='w-[60%] space-y-3'>
            <h1 className='text-5xl w-[70%]'>
                Choose a Strong title.1
            </h1>
            <p className='text-2xl opacity-50'>
                The right title helps your Gigs post to stand out to the right candidates.
                Its the first thing that they will see.
            </p>
        </div>

        <div className='mt-12'>
            <div className='w-[85%] flex'>
                <div className='w-full'>
                    <p>Write a title for your Gig post</p>
                    <input type="text" className='border-0 border-b-gray-400 border-b-2
                    w-2/3
                    outline-none mt-16 px-2'/>
                </div>

                <div className='w-full'>
                    <p>Example titles</p>
                    <ul className='list-disc px-8 space-y-5'>
                        <li>Build a user friendly e-commerce site using Framer</li>
                        <li>SEO specialist needed</li>
                    </ul>
                </div>
            </div>
            <div className='mt-16 flex w-full justify-between'>
                <button className='bg-white mt-16 border-blue-500 border rounded-md py-2 px-5 hover:scale-105 text-blue-500'
                    onClick={prevStep}
                    disabled={count===1}
                >Back</button>
                <button className='bg-blue-500 mt-16 rounded-md py-2 px-5 hover:scale-105 text-white'
                    onClick={nextStep}
                >Next Skills</button>
            </div>
        </div>
    </form>
  )
}

export default Step1