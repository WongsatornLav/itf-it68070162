// const my_input = document.getElementById("my_input")
const accountbal = document.getElementById("accountbal")
const cashbal = document.getElementById("cashbal")
const logs = document.getElementById("result")
const opAmount = document.getElementById("bankOp")

function add() {
    my_input.value = Number(my_input.value) + 1
}

function setBalance() {
    account = Number(accountbal.value) || 0
    cash = Number(cashbal.value) || 0
    
    logs.value += `Current account balance: ${account}, Current cash balance: ${cash}\n`
}

function bankOp() {
    amount = Number(opAmount.value) || 0
    const type = document.getElementById("dropdown")
    const selected = type.options[type.selectedIndex].text.toLowerCase()
    
    if (amount >= 1) {
        if (selected == "deposit" && amount <= cash) {
            cash -= amount
            account += amount
            logs.value += `Current account balance: ${account}, Current cash balance: ${cash}\n`
        } else if (selected == "withdraw" && amount <= account) {
            cash += amount
            account -= amount
            logs.value += `Current account balance: ${account}, Current cash balance: ${cash}\n`
        } else {
            logs.value += `Fail!!!\n`
        }
    }
}