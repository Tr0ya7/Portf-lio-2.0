export default function TechnologiesTags({ children, onClick }) {
    return (
        <div 
            className="m-2.5 px-5 py-2 hover:bg-[#345de159] rounded-lg cursor-pointer" onClick={ onClick } //() => onClick()
        >
            { children }
        </div>
    )
}