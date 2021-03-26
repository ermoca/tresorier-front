/* tslint:disable */
/* eslint-disable */
/**
 * Tresorier
 * Trésorier api front to back
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, superTokenAxios } from './base';

/**
 * 
 * @export
 * @interface Account
 */
export interface Account {
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof Account
     */
    amount: number;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    currency: string;
    /**
     * 
     * @type {boolean}
     * @memberof Account
     */
    archived: boolean;
}
/**
 * 
 * @export
 * @interface Budget
 */
export interface Budget {
    /**
     * 
     * @type {string}
     * @memberof Budget
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Budget
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof Budget
     */
    isDefault?: boolean;
}

/**
 * AccountApi - axios parameter creator
 * @export
 */
export const AccountApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Add a new account
         * @param {string} budgetId 
         * @param {string} name 
         * @param {number} amount 
         * @param {string} currency 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addAccount: async (budgetId: string, name: string, amount: number, currency: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'budgetId' is not null or undefined
            assertParamExists('addAccount', 'budgetId', budgetId)
            // verify required parameter 'name' is not null or undefined
            assertParamExists('addAccount', 'name', name)
            // verify required parameter 'amount' is not null or undefined
            assertParamExists('addAccount', 'amount', amount)
            // verify required parameter 'currency' is not null or undefined
            assertParamExists('addAccount', 'currency', currency)
            const localVarPath = `/account`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (budgetId !== undefined) {
                localVarQueryParameter['budget_id'] = budgetId;
            }

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            if (amount !== undefined) {
                localVarQueryParameter['amount'] = amount;
            }

            if (currency !== undefined) {
                localVarQueryParameter['currency'] = currency;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete account
         * @param {number} accountId id of the account you want to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAccount: async (accountId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('deleteAccount', 'accountId', accountId)
            const localVarPath = `/account`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (accountId !== undefined) {
                localVarQueryParameter['account_id'] = accountId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Finds accounts by budget
         * @param {string} budgetId id of the budget whose accounts you want to retrieve
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAccountsByBudget: async (budgetId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'budgetId' is not null or undefined
            assertParamExists('findAccountsByBudget', 'budgetId', budgetId)
            const localVarPath = `/account/budget`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (budgetId !== undefined) {
                localVarQueryParameter['budget_id'] = budgetId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Rename an account
         * @param {string} id 
         * @param {string} name 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAccount: async (id: string, name: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateAccount', 'id', id)
            // verify required parameter 'name' is not null or undefined
            assertParamExists('updateAccount', 'name', name)
            const localVarPath = `/account`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AccountApi - functional programming interface
 * @export
 */
export const AccountApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AccountApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Add a new account
         * @param {string} budgetId 
         * @param {string} name 
         * @param {number} amount 
         * @param {string} currency 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addAccount(budgetId: string, name: string, amount: number, currency: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addAccount(budgetId, name, amount, currency, options);
            return createRequestFunction(localVarAxiosArgs, superTokenAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete account
         * @param {number} accountId id of the account you want to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteAccount(accountId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteAccount(accountId, options);
            return createRequestFunction(localVarAxiosArgs, superTokenAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Finds accounts by budget
         * @param {number} budgetId id of the budget whose accounts you want to retrieve
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findAccountsByBudget(budgetId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Account>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findAccountsByBudget(budgetId, options);
            return createRequestFunction(localVarAxiosArgs, superTokenAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Rename an account
         * @param {string} id 
         * @param {string} name 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateAccount(id: string, name: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateAccount(id, name, options);
            return createRequestFunction(localVarAxiosArgs, superTokenAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AccountApi - factory interface
 * @export
 */
export const AccountApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AccountApiFp(configuration)
    return {
        /**
         * 
         * @summary Add a new account
         * @param {string} budgetId 
         * @param {string} name 
         * @param {number} amount 
         * @param {string} currency 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addAccount(budgetId: string, name: string, amount: number, currency: string, options?: any): AxiosPromise<string> {
            return localVarFp.addAccount(budgetId, name, amount, currency, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete account
         * @param {number} accountId id of the account you want to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAccount(accountId: number, options?: any): AxiosPromise<string> {
            return localVarFp.deleteAccount(accountId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Finds accounts by budget
         * @param {string} budgetId id of the budget whose accounts you want to retrieve
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAccountsByBudget(budgetId: string, options?: any): AxiosPromise<Array<Account>> {
            return localVarFp.findAccountsByBudget(budgetId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Rename an account
         * @param {string} id 
         * @param {string} name 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAccount(id: string, name: string, options?: any): AxiosPromise<string> {
            return localVarFp.updateAccount(id, name, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AccountApi - object-oriented interface
 * @export
 * @class AccountApi
 * @extends {BaseAPI}
 */
export class AccountApi extends BaseAPI {
    /**
     * 
     * @summary Add a new account
     * @param {string} budgetId 
     * @param {string} name 
     * @param {number} amount 
     * @param {string} currency 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public addAccount(budgetId: string, name: string, amount: number, currency: string, options?: any) {
        return AccountApiFp(this.configuration).addAccount(budgetId, name, amount, currency, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete account
     * @param {number} accountId id of the account you want to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public deleteAccount(accountId: number, options?: any) {
        return AccountApiFp(this.configuration).deleteAccount(accountId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Finds accounts by budget
     * @param {string} budgetId id of the budget whose accounts you want to retrieve
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public findAccountsByBudget(budgetId: string, options?: any) {
        return AccountApiFp(this.configuration).findAccountsByBudget(budgetId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Rename an account
     * @param {string} id 
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public updateAccount(id: string, name: string, options?: any) {
        return AccountApiFp(this.configuration).updateAccount(id, name, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * BudgetApi - axios parameter creator
 * @export
 */
export const BudgetApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Add a new budget
         * @param {string} name name of the new budget
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addBudget: async (name: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('addBudget', 'name', name)
            const localVarPath = `/budget`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication accessToken required

            // authentication refreshTokenId required

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete budget
         * @param {number} budgetId id of the budget you want to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteBudget: async (budgetId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'budgetId' is not null or undefined
            assertParamExists('deleteBudget', 'budgetId', budgetId)
            const localVarPath = `/budget`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (budgetId !== undefined) {
                localVarQueryParameter['budget_id'] = budgetId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Finds budgets by user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findBudgetsByUser: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/budget/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update a budget
         * @param {string} budgetId id of the updated budget
         * @param {string} newName new name of the new budget
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateBudget: async (budgetId: string, newName: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'budgetId' is not null or undefined
            assertParamExists('updateBudget', 'budgetId', budgetId)
            // verify required parameter 'newName' is not null or undefined
            assertParamExists('updateBudget', 'newName', newName)
            const localVarPath = `/budget`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (budgetId !== undefined) {
                localVarQueryParameter['budget_id'] = budgetId;
            }

            if (newName !== undefined) {
                localVarQueryParameter['new_name'] = newName;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BudgetApi - functional programming interface
 * @export
 */
export const BudgetApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BudgetApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Add a new budget
         * @param {string} name name of the new budget
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addBudget(name: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addBudget(name, options);
            return createRequestFunction(localVarAxiosArgs, superTokenAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete budget
         * @param {number} budgetId id of the budget you want to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteBudget(budgetId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteBudget(budgetId, options);
            return createRequestFunction(localVarAxiosArgs, superTokenAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Finds budgets by user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findBudgetsByUser(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Budget>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findBudgetsByUser(options);
            return createRequestFunction(localVarAxiosArgs, superTokenAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update a budget
         * @param {string} budgetId id of the updated budget
         * @param {string} newName new name of the new budget
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateBudget(budgetId: string, newName: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateBudget(budgetId, newName, options);
            return createRequestFunction(localVarAxiosArgs, superTokenAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * BudgetApi - factory interface
 * @export
 */
export const BudgetApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BudgetApiFp(configuration)
    return {
        /**
         * 
         * @summary Add a new budget
         * @param {string} name name of the new budget
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addBudget(name: string, options?: any): AxiosPromise<string> {
            return localVarFp.addBudget(name, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete budget
         * @param {number} budgetId id of the budget you want to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteBudget(budgetId: number, options?: any): AxiosPromise<string> {
            return localVarFp.deleteBudget(budgetId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Finds budgets by user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findBudgetsByUser(options?: any): AxiosPromise<Array<Budget>> {
            return localVarFp.findBudgetsByUser(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update a budget
         * @param {string} budgetId id of the updated budget
         * @param {string} newName new name of the new budget
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateBudget(budgetId: string, newName: string, options?: any): AxiosPromise<string> {
            return localVarFp.updateBudget(budgetId, newName, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * BudgetApi - object-oriented interface
 * @export
 * @class BudgetApi
 * @extends {BaseAPI}
 */
export class BudgetApi extends BaseAPI {
    /**
     * 
     * @summary Add a new budget
     * @param {string} name name of the new budget
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BudgetApi
     */
    public addBudget(name: string, options?: any) {
        return BudgetApiFp(this.configuration).addBudget(name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete budget
     * @param {number} budgetId id of the budget you want to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BudgetApi
     */
    public deleteBudget(budgetId: number, options?: any) {
        return BudgetApiFp(this.configuration).deleteBudget(budgetId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Finds budgets by user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BudgetApi
     */
    public findBudgetsByUser(options?: any) {
        return BudgetApiFp(this.configuration).findBudgetsByUser(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update a budget
     * @param {string} budgetId id of the updated budget
     * @param {string} newName new name of the new budget
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BudgetApi
     */
    public updateBudget(budgetId: string, newName: string, options?: any) {
        return BudgetApiFp(this.configuration).updateBudget(budgetId, newName, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * PersonApi - axios parameter creator
 * @export
 */
export const PersonApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Login
         * @param {string} email 
         * @param {string} password 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSession: async (email: string, password: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'email' is not null or undefined
            assertParamExists('createSession', 'email', email)
            // verify required parameter 'password' is not null or undefined
            assertParamExists('createSession', 'password', password)
            const localVarPath = `/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (email !== undefined) {
                localVarQueryParameter['email'] = email;
            }

            if (password !== undefined) {
                localVarQueryParameter['password'] = password;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Logout
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSession: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/logout`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication accessToken required

            // authentication refreshTokenId required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PersonApi - functional programming interface
 * @export
 */
export const PersonApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PersonApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Login
         * @param {string} email 
         * @param {string} password 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createSession(email: string, password: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createSession(email, password, options);
            return createRequestFunction(localVarAxiosArgs, superTokenAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Logout
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteSession(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSession(options);
            return createRequestFunction(localVarAxiosArgs, superTokenAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PersonApi - factory interface
 * @export
 */
export const PersonApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PersonApiFp(configuration)
    return {
        /**
         * 
         * @summary Login
         * @param {string} email 
         * @param {string} password 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSession(email: string, password: string, options?: any): AxiosPromise<string> {
            return localVarFp.createSession(email, password, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Logout
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSession(options?: any): AxiosPromise<string> {
            return localVarFp.deleteSession(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PersonApi - object-oriented interface
 * @export
 * @class PersonApi
 * @extends {BaseAPI}
 */
export class PersonApi extends BaseAPI {
    /**
     * 
     * @summary Login
     * @param {string} email 
     * @param {string} password 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PersonApi
     */
    public createSession(email: string, password: string, options?: any) {
        return PersonApiFp(this.configuration).createSession(email, password, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Logout
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PersonApi
     */
    public deleteSession(options?: any) {
        return PersonApiFp(this.configuration).deleteSession(options).then((request) => request(this.axios, this.basePath));
    }
}


