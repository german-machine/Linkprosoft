const Button = ({ handleNext, text }) => {
    return (
        <button
            onClick={handleNext}
            className="flex justify-center text-center place-self-end w-[40%] sm:w-[25%] py-2 bg-blue-500 relative font-Inter text-white rounded"
        >
            {text}
        </button>
    )
}

export default Button
