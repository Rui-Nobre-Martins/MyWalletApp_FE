
function TransactionsHomeView() {
    return(
        <>
        <div className="transactionsHomeView">
            <div className="transactionsTitleHomeView">
                <p>ADD Transactions</p>
            </div>
            <div className="transactionForm">
                <form>
                    <label>Description</label>
                    <input type="text" id="text" name="text" placeholder="Description"/>
                    <br />
                    <label>Amount</label>
                    <input type="number" id="number" name="number" placeholder="Amount"/>
                    <br />
                    <button className="btnSubmit" type="send">OK</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default TransactionsHomeView