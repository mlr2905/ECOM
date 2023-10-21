class Car {
    constructor(car_brand , car_model, car_year, car_color, car_mileage) {
        // const this = { }
        // this.brand = car_brand
        this.brand = car_brand,
        this.model = car_model,
        this.year = car_year,
        this.color = car_color,
        this.mileage = car_mileage
        // return this
        
        //Object.freeze
    }

    set_brand(modified_brand) {
        this.brand = modified_brand;
    }
    set_model(modified_model) {
        this.model = modified_model;
    }        
    set_year(modified_year) {
        if (modified_year > 1900) {
            this.year = modified_year;
        }
    }        
    set_color(modified_color) {
        this.color = modified_color;
    }        
    set_mileage(modified_mileage) {
        this.mileage = modified_mileage;
    }
}
