
class Person {
    constructor(_name, _age, _gender, _address) {

      this.name = _name
      this.age = _age
      this.gender = _gender
      this.address = _address


    }
    set_brand(_name) {
        this.name = _name;
    }

    // Setter for model
    set_model(_age) {
        this.age = _age;
    }

    // Setter for screen_size
    set_screen_size(_gender) {
        this.gender = _gender;
    }

    // Setter for storage_capacity
    set_storage_capacity(_address) {
        this.address = _address;
    }
  
    }