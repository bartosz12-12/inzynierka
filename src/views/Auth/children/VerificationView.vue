<template>
  <div class="body">
    <div class="login_box">
        <p>{{ redirectMessage2 }}</p><br>
        <p>{{ redirectMessage }}</p>
    </div>
</div>
</template>

<script>
import { AuthService } from "@/services/AuthService/AuthService";

export default {
    data() {
        return {
            redirectMessage: "",
            redirectMessage2: "",
            authService: new AuthService(),
            url: "",
            token: "",

        };
    },
    mounted() {
        this.url = window.location.href;
        const parts = this.url.split('?token=');
        this.token = parts[parts.length - 1]
        
        this.redirectMessage2= this.$t("UserHasBeenSuccessfullyVerified");
        setTimeout(() => {
            this.redirectMessage = "Redirecting to the login page";
        }, 3000); 
        this.verifyUser();
    },
    methods:{
        async verifyUser() {
            await this.authService.verify(this.token);
           
            setTimeout(() => {
                    this.$router.push({name: 'Login'});
                }, 5000); 
        }
    }
};
</script>