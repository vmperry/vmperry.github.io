let balance = 100;

function handleMenu(option) {
    const output = document.getElementById('output');

    if (option == 1) {
        output.innerHTML = 'Your account balance is £' + balance;
    } else if (option == 2) {
        const depositAmount = parseFloat(prompt('How much would you like to deposit?'));
        deposit(depositAmount);
    } else if (option == 3) {
        const withdrawAmount = parseFloat(prompt('How much would you like to withdraw?'));
        withdraw(withdrawAmount);
    } else if (option == 4) {
        output.innerHTML = "Have a nice day!";
    } else {
        output.innerHTML = 'Invalid input. Please select 1, 2, 3, or 4.';
    }
}

function deposit(amount) {
    const output = document.getElementById('output');
    if (isNaN(amount)) {
        output.innerHTML = 'Invalid input. Please enter a valid number.';
    } else if (amount < 0) {
        output.innerHTML = 'Deposit amount cannot be negative.';
    } else if (amount > 0) {
        balance += amount;
        output.innerHTML = `You have deposited £${amount}. Your new balance is £${balance}.`;
    } else {
        output.innerHTML = 'Amount to deposit must be greater than zero.';
    }
}

function withdraw(withAmount) {
    const output = document.getElementById('output');
    if (isNaN(withAmount)) {
        output.innerHTML = 'Invalid input. Please enter a valid number.';
    } else if (withAmount < 0) {
        output.innerHTML = 'Withdrawal amount cannot be negative.';
    } else if (withAmount <= balance) {
        balance -= withAmount;
        output.innerHTML = `You have withdrawn £${withAmount}. Your new balance is £${balance}.`;
    } else {
        output.innerHTML = 'Insufficient funds.';
    }
}
