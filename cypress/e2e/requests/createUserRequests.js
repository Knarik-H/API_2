import {userBody, updatedBody} from '../body/createUserBody.js'

class UserCreatingRequests {
    setTokenAndAssertResponseBody() {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            body: userBody,
            headers: {
                Authorization: `Bearer 4b5b0d78ae56f6e39e80f56739bf2bc9cc95c972866f12e94ea859c58bc2c3d1`
                  }       
            }).then((response)=>{
                expect(response.body).to.include(userBody)
                expect(response.body).to.have.property("id")
                this.userId = response.body.id 
                const userId = response.body.id
                cy.wrap(userId).as('userId')
            })
    }
    getUserId(){
        cy.get('@userId').then((id)=>{
            cy.request({
                url: `https://gorest.co.in/public/v2/users/${id}`,
                headers: {
                    Authorization: `Bearer 4b5b0d78ae56f6e39e80f56739bf2bc9cc95c972866f12e94ea859c58bc2c3d1`
                    }
            }).then((responseId)=>{
                expect(responseId.body.id).to.eq(id)
                expect(responseId.body).to.include(userBody)
                })  
        })
    }

    updateUser(){
        cy.get('@userId').then((id)=>{
        cy.request({
            method: "PATCH",    
            url: `https://gorest.co.in/public/v2/users/${id}`,
            body: updatedBody,
            headers: {
                Authorization: `Bearer 4b5b0d78ae56f6e39e80f56739bf2bc9cc95c972866f12e94ea859c58bc2c3d1`
                }
            }).then((responsePatch)=>{
                expect(responsePatch.body).to.include(updatedBody)
            })
        })
    }
    secondGet(){
        cy.get('@userId').then((id)=>{
        cy.request({
            url: `https://gorest.co.in/public/v2/users/${id}`,
            headers: {
                Authorization: `Bearer 4b5b0d78ae56f6e39e80f56739bf2bc9cc95c972866f12e94ea859c58bc2c3d1`
                    }
            }).then((responseSecondGet)=>{
                expect(responseSecondGet.body.id).to.eq(id)
                expect(responseSecondGet.body).to.include(updatedBody)
                })  
            })
    }
    deleteUser(){
        cy.get('@userId').then((id)=>{
        cy.request({
            method: "DELETE",
            url: `https://gorest.co.in/public/v2/users/${id}`,
            headers: {
                Authorization: `Bearer 4b5b0d78ae56f6e39e80f56739bf2bc9cc95c972866f12e94ea859c58bc2c3d1`
                    }
            }).then((responseDelete) => {
                expect(responseDelete.status).to.eq(204)
            })
        })

    }
    getDeleteUser(){
        cy.get('@userId').then((id)=>{
        cy.request({
            url: `https://gorest.co.in/public/v2/users/${id}`,
            failOnStatusCode: false,
            headers: {
                Authorization: `Bearer 4b5b0d78ae56f6e39e80f56739bf2bc9cc95c972866f12e94ea859c58bc2c3d1`
                    }
            }).then((response3rdGet)=>{
                expect(response3rdGet.status).to.eq(404)
                
                })      
            })

    }

}

export default UserCreatingRequests
