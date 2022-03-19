<template>
<nav class="navbar navbar-expand-xxlg navbar-light bg-light p-3 shadow">
    <router-link to="/" class="navbar-brand mb-0 h1" >Apprication</router-link>
    <div class="row">
        <div class="col">
            <router-link to="/form" class="toForm">Form</router-link> 
        </div>
        <div class="col">
            <router-link to="/result" class="toResult">Result</router-link>
        </div>
    </div>
    
</nav>
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