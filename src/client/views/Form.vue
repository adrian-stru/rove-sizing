<template>
    <div class="pb-12">
        <div class="w-full">

            <div class="field-group w-full"
                 :class="{ 'field-group--error': $v.emailAddress.$error }">
                <label class="field-label">Email Address</label>
                <input class="field-input"
                       type="email"
                       v-model.trim="$v.emailAddress.$model"
                       :class="{ 'field-input-error': $v.emailAddress.$error }" />
                <div v-if="$v.emailAddress.$error">
                    <div class="field-error" v-if="!$v.emailAddress.required">
                        Email address is required.
                    </div>
                    <div class="field-error" v-if="!$v.emailAddress.email">
                        Email must be valid.
                    </div>
                </div>
            </div>

            <div class="field-group w-full"
                 :class="{ 'field-group--error': $v.firstName.$error }">
                <label class="field-label">First Name</label>
                <input class="field-input"
                       v-model.trim="$v.firstName.$model"
                       :class="{ 'field-input-error': $v.firstName.$error }" />
                <div v-if="$v.firstName.$error">
                    <div class="field-error"
                         v-if="!$v.firstName.required">
                        First name is required.
                    </div>
                </div>
            </div>

            <div class="field-group w-full"
                 :class="{ 'field-group--error': $v.lastName.$error }">
                <label class="field-label">Last Name</label>
                <input class="field-input"
                       v-model.trim="$v.lastName.$model"
                       :class="{ 'field-input-error': $v.lastName.$error }" />
                <div v-if="$v.lastName.$error">
                    <div class="field-error" v-if="!$v.lastName.required">
                        Last Name is required
                    </div>
                </div>
            </div>
        </div>

        <div class="field-group w-full">
            <label class="field-label">Subscribe To Newsletter</label>
            <div class="relative py-5">
                <input class="field-input opacity-0 z-0" type="checkbox" v-model="subscribe">
                <div class="absolute pin-t z-10 pt-5 h-8 w-8 cursor-pointer">
                    <div @click.prevent="toggleSubscribe">
                        <img v-if="subscribe" src="../assets/images/checkbox-checked.svg"/>
                        <img v-else src="../assets/images/checkbox.svg"/>
                    </div>
                </div>
            </div>
        </div>

        <Nav :config="navConfig" class="z-50"/>
    </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';
import Nav from '../components/Nav.vue';

export default {
  components: {
    Nav,
  },
  data() {
    return {
      navConfig: {
        left: {
          name: 'Back',
          route: '/selection',
        },
        right: {
          name: 'Next',
          route: '/finish',
        },
      },
      emailAddress: '',
      firstName: '',
      lastName: '',
      subscribe: true,
    };
  },
  validations: {
    firstName: {
      required,
    },
    lastName: {
      required,
    },
    emailAddress: {
      required,
      email,
    },
  },
  methods: {
    toggleSubscribe() {
      this.subscribe = !this.subscribe;
    },
  },
  beforeRouteLeave(to, from, next) {
    if (to.name === 'selection') {
      next();
    }

    this.$v.$touch();
    if (this.$v.$invalid) {
      next(false);
    } else {
      this.$store.commit('updateFirstName', this.firstName);
      this.$store.commit('updateLastName', this.lastName);
      this.$store.commit('updateEmailAddress', this.emailAddress);
      this.$store.commit('updateSubscribeToNewsletter', this.subscribe);
      next();
    }
  },
};
</script>

<style lang="scss" scoped>
    .field-group {
        color: white;
        width: 100%;
        padding: 20px 2.5%;
        border-bottom: 1px solid white;
        // .field-group--error {}
    }
    .field-label {
        font-size: 24px;
        display: block;
        width: 100%;
    }

    .field-input {
        width: 100%;
        margin: 10px 0;
        padding: 5px 2.5px;
        outline: none;
        background-color: #000;
        color: white;
        font-size: 36px;
        // .field-input-error {}
    }

    .field-error {
        font-size: 12px;
        color: white;
    }

</style>
