<script setup>
import { reactive } from 'vue';
const status = reactive({
    n1: 0,
    n2: 0,
    operator: '+',
    result: 0,
});

const calcResult = () => {
    switch (status.operator) {
        case '+':
            status.result = status.n1 + status.n2;
            break;
        case '-':
            status.result = status.n1 - status.n2;
            break;
        case '*':
            status.result = status.n1 * status.n2;
            break;
        case '/':
            status.result = status.n1 / status.n2;
            break;
        default:
            status.result = 0;
    }
};

const n1Input = (event) => {
    status.n1 = parseFloat(event.target.value) || 0;
    calcResult()
};

const n2Input = (event) => {
    status.n2 = parseFloat(event.target.value) || 0;
    calcResult()
};

const changeOperator = (event) => {
    status.operator = event.target.value;
    calcResult();
}

</script>

<template>
    <div class="calc-box">
        <input type="number" required step="0.01" :value="status.n1" @keyup="n1Input">
        <select :value="status.operator" @change="changeOperator">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">x</option>
            <option value="/">/</option>
        </select>
        <input type="number" required step="0.01" :value="status.n2" @keyup="n2Input">
        <h2>Resultado: {{ status.result }} </h2>
    </div>
</template>

<style>
.calc-box {
    display: flex;
    flex-direction: column;
    align-items: left;
    max-width: 280px;
    width: 100%;
    height: auto;
    margin: 0 auto;
}

input,
select {
    margin-bottom: 24px;
    padding: 8px;
    border: none;
    outline: none;
    background-color: azure;
}

h2 {
    margin-top: 4vh;
    text-align: center;
    color: azure;
}
</style>