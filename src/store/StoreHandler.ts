import { Budget, Account, Category, MasterCategory } from '@/model/model'
import AccountService from '@/services/AccountService'
import BudgetService from '@/services/BudgetService'
import CategoryService from '@/services/CategoryService'
import MasterCategoryService from '@/services/MasterCategoryService'
import { StoreState } from '@/store/index'
import { Store } from 'vuex'

export default class StoreHandler {
  public static async initStore (store: Store<StoreState>) {
    await StoreHandler.initBudget(store)
  }

  public static async updateOnBudgetChange (store: Store<StoreState>) {
    this.updateAccounts(store)
    this.updateMasterCategories(store)
    this.updateCategories(store)
  }

  public static async updateAccounts (store: Store<StoreState>) {
    if (store.state.budget) {
      AccountService.getAccounts(store.state.budget).then(
        (accounts: Account[]) => {
          store.dispatch('updateAccounts', accounts)
        }
      )
    }
  }

  public static async updateCategories (store: Store<StoreState>) {
    if (store.state.budget) {
      CategoryService.getCategories(store.state.budget).then(
        (categories: Category[]) => {
          store.dispatch('updateCategories', categories)
        }
      )
    }
  }

  public static async updateMasterCategories (store: Store<StoreState>) {
    if (store.state.budget) {
      MasterCategoryService.getMasterCategories(store.state.budget).then(
        (masterCategories: MasterCategory[]) => {
          store.dispatch('updateMasterCategories', masterCategories)
        }
      )
    }
  }

  public static async initBudget (store: Store<StoreState>) {
    if (!store.state.budget) {
      BudgetService.getDefaultBudget().then(
        (budget: Budget) => {
          store.dispatch('updateBudget', budget)
        }
      )
    }
  }

  public static getCategoryById (store: Store<StoreState>, categoryId: string): Category | null {
    for (const category of store.state.categories) {
      if (category.id === categoryId) {
        return category
      }
    }
    return null
  }

  public static getCategoriesByMasterCategory (store: Store<StoreState>, masterCategory: MasterCategory, archived: boolean): Category[] {
    const categories: Category[] = []
    for (const category of store.state.categories) {
      if (category.masterCategoryId === masterCategory.id && category.archived === archived) {
        categories.push(category)
      }
    }
    return categories
  }

  public static getCategoriesByArchivedStatus (store: Store<StoreState>, archived: boolean): Category[] {
    const categories: Category[] = []
    for (const category of store.state.categories) {
      if (category.archived === archived) {
        categories.push(category)
      }
    }
    return categories
  }
}
