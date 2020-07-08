"use strict";

//const btnTaskSeven = document.querySelector("#task-seven");

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const transaction = {};
    transaction.id = this.transactions.length + 1;
    transaction.amount = amount;
    transaction.type = type;
    return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.balance += amount;
    this.transactions.push(transaction);
    console.log(`Операция успешна! Текущий балланс ${this.balance}`);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    const currentBalance = this.getBalance();
    if (currentBalance < amount) {
      console.log(`Недостаточно средств! Текущий балланс ${this.balance}`);
    } else {
      const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
      this.balance -= amount;
      this.transactions.push(transaction);
      console.log(`Операция успешна! Текущий балланс ${this.balance}`);
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    return this.transactions.find((transaction) => transaction.id === id);
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let allTransactions = this.transactions.filter(
      (transaction) => transaction.type === type
    );
    let result = 0;
    for (const obj of allTransactions) {
      result += obj["amount"];
    }
    return result;
  },
};

//btnTaskSeven.addEventListener("click", () => {});
