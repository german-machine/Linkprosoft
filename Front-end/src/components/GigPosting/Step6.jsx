/* eslint-disable react/prop-types */


const Step6 = ({nextStep, prevStep, count}) => {

    const submitFormData = (e) => {
        e.preventDefault()
    }

  return (
    <form onSubmit={submitFormData}>

        <header className='w-[60%] space-y-3'>
            <h1 className='text-4xl w-full font-semibold'>
                Start the Gig Conversation
            </h1>
        </header>

        <main className="flex justify-start mt-8 gap-10 w-full">
            <div className="w-[40%]">
                <p>
                    Professionals are looking for:
                </p>
                <ul className="list-disc list-inside px-5">
                    <li>Clear expectations about your task</li>
                    <li>Skill set Required for your work</li>
                    <li>Good Communication</li>
                    <li>Details of how you or your team like to work.</li>
                </ul>
            </div>

            <div className="w-[60%] space-y-2">
                <h3>Describe what you need</h3>
                <div className="w-[90%]">
                    <textarea name="" id="" rows={8} className="border-2 w-full p-3 border-yellow-600"></textarea>
                    <p className="flex justify-end text-blue-500">minimum 100 characters</p>
                </div>

                <div className="mt-16">
                    <div className="mt-16">
                        
                    </div>
                </div>
            </div>

        </main>

        <div className='mt-12'>

            <div className='flex w-full justify-between'>
                <button className='bg-white  border-blue-500 border rounded-md py-2 px-5 hover:scale-105 text-blue-500'
                    onClick={prevStep}
                >Back</button>
                <button className='bg-blue-500  rounded-md py-2 px-5 hover:scale-105 text-white'
                    onClick={nextStep}
                    disabled={count === 6}
                >Next Skills</button>
            </div>
        </div>
    </form>
  )
}

export default Step6