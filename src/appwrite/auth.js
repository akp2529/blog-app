import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount) {
                // call another method [ LOGIN ]
                return this.login({email, password});
            } else {
                return userAccount;
            }
        }
        catch (error) {
            console.log("Appwrite service :: createAccount :: error", error)
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            console.log("Appwrite service :: login :: error", error)
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();            
        } catch (error) {
            // throw error
            console.log("Appwrite service :: getCurrentUser :: error", error)
        }

        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error)
        }
    }

}

const authService = new AuthService();

export default authService


// In this file here there is a Class called "AuthService". and an object "authService" and exported it to use it by .method() {createAccount(), login(), getCurrentUser(), logout()}

// constructor() is coded, so that the user will only be created when the object of the class is invoked. (helps in not creating unnecessery datas. )

// inside the constructor : 
// client object is linked with the Appwrite URLs to make client, 
// then account object is used to get class Account. 

// createAccount : method with parameters - email, password, name
// user account is created with uniqueID. & if created return to login 

// login : method to login - by .createEmailSession()

// getCurrentUser : method to get user - by .get()

// logout - method to logout - by .deleteSessions()
