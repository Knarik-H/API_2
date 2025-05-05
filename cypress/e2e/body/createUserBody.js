 
    export const email = `user${Date.now()}@test.com`
    export const userBody = {
        name: 'KKK HHH',
        gender: 'female',
        email: email,
        status: 'active'
      };

   export const updatedBody = {
        name: "UPDATED_NAME",
        email: `updated${Date.now()}@test.com`,
        status: "active"
    }        
    
    export default {email, userBody, updatedBody}