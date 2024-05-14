import { Link } from "wouter"

function NavegationBar() {
    return (
        <>
        <nav className="navBar">
            <div className="navLink">                               
                <Link href="/">Overview</Link>
                <Link href="/transactions">Transactions</Link>
            </div>
        </nav>
        </>
    )
}

export default NavegationBar