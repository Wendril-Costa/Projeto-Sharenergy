import '../styles/components/pagination/index.css'

const Pagination = ({pages, setCurrentPage}: any) => {
    return (
        <div>
            {Array.from(Array(pages), (item, index) => {
                return <button 
                            className="paginationButton"
                            value={index} 
                            onClick={e => setCurrentPage(Number((e.target as HTMLTextAreaElement).value))}
                        >
                            {index + 1}
                        </button>
            })}
        </div>
    )
}

export default Pagination