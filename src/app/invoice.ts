import { Dzial } from "./dzial";
import { Customer } from "./customer";

export class Invoice{
    
    dzial: Dzial;
    customer: Customer;

    id: number;
    type: number;
    number: number;
    numberplanid: number;
    extnumber: string;
    cdate: number;
    customerid: number;
    userid: number;
    name: string;
    address: string;
    zip: string;
    city: string;
    ten: string;
    ssn: string;
    paytime: number;
    closed: number;
    reference:number;
    odbiorca: string;
    reason: string;
    divisionid: number;
    countryid: number;
    paytype: number;
    sdate: number;
    div_name: string;
    div_address: string;
    div_city: string;
    div_zip: string;
    div_countryid: number;
    div_ten: string;
    div_regon: string;
    div_account: string;
    div_inv_header: string;
    div_inv_footer: string;
    div_inv_author: string;
    div_inv_cplace: string;
    div_shortname: string;
    fullnumber: string;
    cancelled: number;
    published: number;
    receiver_name: string;
    receiver_address: string;
    receiver_zip: string;
    receiver_city: string;
    receiver_ten: string

    constructor(){

    }

}