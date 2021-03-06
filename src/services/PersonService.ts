import { StoreState } from '@/store/index'
import { Store } from 'vuex'
import { personApi } from '@/services/api/apis'
import router, { RouterPages, redirectToLoginPageIfUnauthorizedError } from '@/router'
import axios from 'axios'

interface LoginResponse {
    name: string;
    unlockingDate: number;
}

export default class PersonService {
  public static async createSession (store: Store<StoreState>, email: string, password: string): Promise<LoginResponse> {
    let data
    let response
    try {
      response = await personApi.createSession(email, password)
      data = response.data
      store.dispatch('updateLogged')
      router.push(RouterPages.home)
    } catch (exception) {
      if (axios.isAxiosError(exception)) {
        response = exception.response
        data = (response) ? response.data : {}
      }
    }
    return JSON.parse(data)
  }

  public static async deleteSession (store: Store<StoreState>) {
    const response = await personApi.deleteSession()
    redirectToLoginPageIfUnauthorizedError(response)
    store.dispatch('updateLogged')
    router.push(RouterPages.login)
  }
}
