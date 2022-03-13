<template>
<h1>Sign Up</h1>
<div class="container">
    <div class="email">
        <input type="text" placeholder="email" name="uname" required><br>
    </div>
    
    <div class="pass">
        <input type="password" placeholder="Password" name="psw" required><br>
    </div>
    <div class="submit">
        <button type="submit">Sign Up</button>
    </div>
</div>

</template>

<style>
.container{
    text-align: center;
    background-color: #101010;
    height: 200px;
    width: 200px;
    padding-top: 20px;
    border-radius: 15px;
    margin: 0 auto;
}

.pass{
    margin: 50px 0;
}
</style>