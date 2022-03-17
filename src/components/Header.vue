<template>
<header>
    <div class="title">アプリ名</div>
    <div class="header-nav">
        <router-link to="/form" class="toForm">Form</router-link> 
        <router-link to="/result" class="toresult">Result</router-link>
    </div>
</header>
</template>
<style>
header{
    display: flex;
    align-items: center;
    height: 80px;
    justify-content: space-between;
    background-color: #ababab;
}
.title{
    margin-left: 25px;
    font-style: italic;
    font-size: 30px;
}
.header-nav{
    margin-right: 25px;
    font-size: 25px;
}
.toForm{
    margin-right: 25px;
}
</style>