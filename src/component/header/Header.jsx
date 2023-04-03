

const Header = ()=>{
    return(
        <header className="min-w-full flex justify-between items-center pr-3 pl-3 pt-2 pb-2  bg-green-400">
            <h3 className=" text-slate-950 text-xl font-bold ">facebook</h3>         
            <form action="">
                <input type="text" placeholder="ค้นหาบน Facebook:"/>
            </form>
            <div>
                <div><i></i></div>
                <div><i></i></div>
                <div><i></i></div>
            </div>
        </header>
    )
}
export default Header