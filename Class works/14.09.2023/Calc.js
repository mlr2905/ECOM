class Calc {
            
    constructor(_num1Input,_num2Input,_operatorSelect,_result) {
        // const this = { }
        // this.brand = car_brand
        this.num1Input = _num1Input,
        this.num2Input = _num2Input,
        this.operatorSelect = _operatorSelect,
        this.result = _result
        }
      
    set_num1(_num1Input) {
        this.num1Input = _num1Input;
    }
    set_num2(_num2Input) {
        this.num2Input = _num2Input;
    }
    set_operator(_operatorSelect) {
        this.operatorSelect = _operatorSelect;
    }
    set_result(_result) {
        this.result = _result;
    }
}