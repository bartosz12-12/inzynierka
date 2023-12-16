<template>
  <div class="body">
  <div class="login_box">
    <p>{{$t("SuccessfullyRegisteredUserEmailWithVerificationLinkHasBeenSent")}}</p>
    
    
  <div class="container-button">
    <button class="button" @click="
    $router.replace({
      name: 'Login',
    })
  ">{{$t("LogIn")}}</button>
  </div>
  </div>
</div>
</template>