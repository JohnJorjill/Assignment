function bankAccount(name, type, deposit) {
    this.name = name;
    this.type = type;
    this.deposit = deposit;
}


var bank = {
    account_list: [],
    account_type: ['checking', 'saving', 'business']
};


var accountFactory = (function () {
    var newAccount;

    return {
        createAccount: function () {
            let name = window.document.getElementById("tfName").value;
            let type = window.document.getElementById("accountType").value;
            let deposit = window.document.getElementById("tfDeposit").value;
            newAccount = new bankAccount(name, type, deposit);
            bank.account_list.push(newAccount);
        },

        getAccount: function () {
            return newAccount;
        }
    }

})();

function initiate() {
    let temp1 = new bankAccount("Michael", "checking", 50);
    let temp2 = new bankAccount("James", "saving", 520);
    bank.account_list.push(temp1);
    bank.account_list.push(temp2);

    window.document.getElementById("btnCreate").onclick = buttonCreate;
    resetList();
}

function resetList() {
    window.document.getElementById("taAccountList").innerText = "";
    bank.account_list.forEach(element => {
        window.document.getElementById("taAccountList").append("Account name:" + element.name + " Account type:" + element.type + " balance:" + element.deposit + "\n");
    });
}

function buttonCreate() {
    accountFactory.createAccount();
    resetList();
}


window.onload = initiate;