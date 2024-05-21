import { Link } from "wouter"
import { FiUser, FiLogIn} from "react-icons/fi"


function NavegationBar() {
    return (
        <>
        <div className="w-full flex items-center justify-center h-16 bg-white drop-shadow mb-4">
            <header className="flex w-full max-w-7xl items-center justify-center gap-x-10">
                
                <Link href="/overview">
                    <img className="size-10 hover:bg-slate-100 rounded"
                    src="../public/images/favicon.png" alt="Logo da My Wallet App" />
                </Link>

                <Link
                className="cursor-pointer max-w-96 p-2 text-black font-medium hover:bg-slate-100 rounded"
                href="/overview">Overview
                </Link>

                <Link 
                className="cursor-pointer max-w-96 p-2 text-black font-medium hover:bg-slate-100 rounded"
                href="/transactions">Transactions
                </Link>

                {/* <Link href="/settings">Settings</Link> */}

                <Link 
                className="cursor-pointer max-w-96 p-2 text-white font-medium hover:bg-slate-100"
                href="/overview">
                <FiUser size={24} color="#000"></FiUser>
                </Link>

            </header>
        </div>

        </>
    )
}

export default NavegationBar