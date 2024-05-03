import { Link } from "wouter";

function NavegationBar() {
    return(
        <>
        <div>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/transactions">Transactions</Link>
                <Link href="/settings">Settings</Link>
            </nav>
        </div>
        </>
    )
}

export default NavegationBar;