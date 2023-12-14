<template>
    <div class="body">
    <div class="login_box">
        <p class="token">Podaj token</p>
        <div class="form_input_contrainer">
            <input class="dane" type="text" name="token" v-model="token">
            <label v-if="!token" for="token">Token</label>
        </div>
        <button>Zatwierdź</button>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            token:""
        }
    }
};
</script>

<style>

</style>