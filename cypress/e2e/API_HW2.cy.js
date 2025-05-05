//import { faker } from '@faker-js/faker'
import {email, userBody, updatedBody} from './body/createUserBody'
import UserCreatingRequests from './requests/createUserRequests'
describe('Test API requests on GoREST', () => {
    it('Test creating a new user', () => {
        const userCreatingRequests = new UserCreatingRequests()
        userCreatingRequests. setTokenAndAssertResponseBody()
        userCreatingRequests.getUserId()
        userCreatingRequests.updateUser()
        userCreatingRequests.secondGet()
        userCreatingRequests.deleteUser()
        userCreatingRequests.getDeleteUser()


    })


})


