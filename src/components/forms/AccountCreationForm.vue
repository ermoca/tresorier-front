<template>
  <div id="accountCreationForm">
    <input id="newAccountName" class="form-control" v-model="name" :placeholder="$t('ACCOUNT_NAME')">
    <label for="newAccountAmount">{{ $t('INITIAL_AMOUNT') }}</label>
    <input id="newAccountAmount" class="form-control" v-model.number="amount">
    <button class="btn btn-outline-info" v-on:click="createAccount">{{$t('CREATE_ACCOUNT')}}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AccountService from '@/services/AccountService'
import Utils from '@/utils/Utils'

export default defineComponent({
  name: 'AccountCreationForm',
  data () {
    return {
      name: '',
      amount: 0
    }
  },
  emits: ['updateAccountList', 'closeForm'],
  methods: {
    createAccount () {
      if (this.$store.state.budget) {
        AccountService.createAccount(this.$store.state.budget, this.name, Utils.getCentsAmount(this.amount)).then(
          () => {
            this.$emit('updateAccountList')
            this.$emit('closeForm')
          }
        )
      }
    }
  }
})
</script>
