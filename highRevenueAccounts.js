import { LightningElement, wire } from 'lwc';
import getHighRevenueAccountRecords from '@salesforce/apex/AccountController.getHighRevenueAccountRecords';
export default class HighRevenueAccounts extends LightningElement {
accountsToDisplay =[]; 
    @wire(getHighRevenueAccountRecords)//,{count: '$countOfRecords'})  //) remove in wire 
                                       // count it work when apex class using both of (wire and inperative).
    getAccountHandler(response){
        //{error:...,data:...,}
        //Case 1:-{error: undefined,data: ...}
        //Case 2:-{error: ...,data: undefined}
        const {data,error} =response;  //This is destructing
        //or
        //data = response.data;
        //error =response.error;

        if(error){
            console.error(error);
            return;
        }
        if(data){
            this.accountsToDisplay=data;
        }
    }
    // Adding From imperative video
    setcount(event){
        console.log('value',event.target.value);
        let inputValue =event.target.value;
        if(inputValue =='') return;
        this.countOfRecords =event.target.value;
    }
}