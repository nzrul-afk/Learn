class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.transactions.push({ type: "deposit", amount: amount });
      this.balance += amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    } else {
      return `Deposit amount must be greater than zero.`;
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.transactions.push({ type: "withdraw", amount: amount });
      this.balance -= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    } else {
      return "Insufficient balance or invalid amount.";
    }
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const deposits = [];
    for (const { type, amount } of this.transactions) {
      if (type === "deposit") {
        deposits.push(amount);
      }
    }
    return `Deposits: ${deposits.join(",")}`;
  }

  listAllWithdrawals() {
    const withdrawals = [];
    for (const { type, amount } of this.transactions) {
      if (type === "withdraw") {
        withdrawals.push(amount);
      }
    }
    return `Withdrawals: ${withdrawals.join(",")}`;
  }
}

const myAccount = new BankAccount();
myAccount.deposit(100000);
myAccount.withdraw(1000);
myAccount.withdraw(1000);
myAccount.withdraw(1000);
myAccount.deposit(10000);
myAccount.checkBalance();