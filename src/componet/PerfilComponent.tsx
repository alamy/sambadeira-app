const PerfilComponent = ({ use }: any) => {
    return (
        <>
            <div className="grid grid-cols-2 gap-2 border border-white text-center mt-10 text-white ">
                <div className="rounded-full border border-white  w-20 h-20 mt-3 ml-3" >
                    <img className="rounded-full" src={use?.Foto} alt={use?.Nome} />
                </div>
                <div>
                    <p className='mt-4'>{use?.Nome}</p>
                    <p className='mb-4'>{use?.Ala} </p>
                </div>
            </div>
        </>
    )
}
export default PerfilComponent