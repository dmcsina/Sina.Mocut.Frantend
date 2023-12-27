

export class Keypress {

    phonenumber(key:KeyboardEvent){
        if (key.key>'آ' && key.key<'ی') {
            key.preventDefault();
        }
        if (key.key>'A' && key.key<'z') {
            key.preventDefault();
        }
    }
    code(key:KeyboardEvent){
        if (key.key>'آ' && key.key<'ی') {
            key.preventDefault();
        }
        if (key.key>'A' && key.key<'z') {
            key.preventDefault();
        }
    }
}