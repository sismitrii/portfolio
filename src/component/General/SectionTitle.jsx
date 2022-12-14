
export default function SectionTitle({colored, children}){
    return(
    <div className="relative w-fit mb-14">
        <h3 className={` text-3xl md:text-5xl font-light mb-5 ${colored ? 'text-navBlue' : 'text-white'}`}>{children}</h3>
        <div className={`absolute right-0 w-[70px] border-4 ${colored ? 'border-bgBlue' : 'border-navBlue'}`}></div>
    </div>
    )
}