const Pagination = ({ page, lastPage, setPage }) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        if(page < lastPage){
            setPage((prevState) => prevState + 1)
            scrollTop()
        }
    }
    const handlePrevPage = () => {
        if(page > 1) {
            setPage((prevState) => prevState - 1)
            scrollTop()
        }
    }
    return(
        <div className="flex justify-center items-center py-5 px-3 gap-6 text-color-primary text-xl">
            <button onClick={handlePrevPage} className="transition-all hover:text-color-accent"> Prev </button>
            <p> {page} of {lastPage} </p>
            <button onClick={handleNextPage} className="transition-all hover:text-color-accent"> Next </button>
        </div>
    )
}
export default Pagination