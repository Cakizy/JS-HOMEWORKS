let maxMoney = 1532;
alert(`Welcome, thank you for using our ATM`);
let input = prompt(`If you want to withdraw money then write 1, if you want to check your account ballance then write 2.`);
let choose = parseInt(input);
switch (choose) {
    case 1:
        let input2 = prompt(`Please enter how much money you want to withdraw.`);
        let money = parseInt(input2);
        if (money <= maxMoney) {
            function withdraw() {
                let sum = maxMoney - money;
                return sum;
            }
            let input3 = prompt(`Do you want a transaction confirmation? (Please answer with Yes or No)`);
            switch (input3) {
                case `yes`:
                case `Yes`:
                    alert(`You withdraw $${money}. Your current account balance is $${withdraw()}`);
                    break;
                case `no`:
                case `No`:
                    alert(`You withdraw $${money}.`);
                    break;
                default:
                    alert(`Sorry something went wrong.`);
                    break;
            }
        } else if (money > maxMoney) {
            alert(`Sorry you don't have enough funds.`);
        } else {
            alert(`Sorry something went wrong.`);
        }
        break;
    case 2:
        alert(`Your current account balance is $${maxMoney}`);
        break;
    default:
        alert(`Sorry something went wrong.`);
        break;
}