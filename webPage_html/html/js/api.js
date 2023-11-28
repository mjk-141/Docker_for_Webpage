document.addEventListener("DOMContentLoaded", () => {
    const currencyOne = document.getElementById("currencyOne");
    const amountOne = document.getElementById("amount-one");
    const swap = document.getElementById("swap");
    const rate = document.getElementById("rate");
    const currencyTwo = document.getElementById("currencyTwo");
    const amountTwo = document.getElementById("amount-two");

    // 환율 업데이트

    const updateCurrency = async () => {
        const url = await fetch(
            `https://v6.exchangerate-api.com/v6/52f1f656328d5996e352de41/latest/${currencyOne.value}`
        );

        data = await url.json();

        rate.innerText = "1 " + currencyOne.value + " = " + data.conversion_rates[currencyTwo.value] + currencyTwo.value;

        amountTwo.value = (
            amountOne.value * data.conversion_rates[currencyTwo.value]
        ).toFixed(2);
    };

    // 환율 서로 바꾸기

    function changeCurrency() {
        let temp;

        temp = currencyTwo.value;

        currencyTwo.value = currencyOne.value;
        currencyOne.value = temp;
        updateCurrency();
    }

    updateCurrency();

    currencyOne.addEventListener("change", updateCurrency);
    currencyTwo.addEventListener("change", updateCurrency);
    amountOne.addEventListener("input", updateCurrency);
    swap.addEventListener("click", changeCurrency);
});