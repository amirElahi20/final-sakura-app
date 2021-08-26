
<template>

  <!-- this part is for phone pulsing that has shown in 1100px size.
with this pulse , client can call to the site admin number -->

  <div>
    <a class="phone-link" href="tel:123456">
      <div class="pulse">
        <font-awesome-icon class="phone" icon="phone" />
      </div>
    </a>
  </div>
</template>


<style lang="scss" scoped>
.pulse {
  width: 50px;
  height: 50px;
  background-color: #48b603;
  color: white;
  border-radius: 50%;
  text-align: center;
  line-height: 60px;
  font-size: 20px;
  position: fixed;
  z-index: 99999;
  margin-left: 50px;
  bottom: 4%;
  display: none;
  @media screen and (max-width: 1100px) {
    display: block;
  }
}

.pulse:before,
.pulse:after {
  content: "";
  position: absolute;
  left: -20px;
  top: -20px;
  right: -20px;
  bottom: -20px;
  border: 1px solid #48b603;
  border-radius: 50%;
  animation: pulsing 1.5s linear infinite;
}
.pulse:after {
  animation-delay: 0.5s;
}
@keyframes pulsing {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}
.call {
  color: black;
}
.phone-link {
  text-decoration: none;
  color: white;
}
</style>