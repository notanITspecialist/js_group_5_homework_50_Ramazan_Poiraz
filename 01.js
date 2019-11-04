
        class Product {
            constructor(title,calories) {
                this.title = title;
                this.calories = calories
            }
        }

        class Dish {
            constructor(title) {
                this.title = title;
                this.products = []
            }

            addProduct(product,weight) {
                product.weight = weight
                product.calories = (weight / 100) * product.calories
                this.products.push(product)
            }
        }

        class CaloriesCalculator {
            constructor() {
                this.thisDishes = []
            }
            addDish(dish) {
                dish.portion = 1;
                const dishes = this.thisDishes
                if(dishes.length < 1){
                    dishes.push(dish)
                }else{
                    dishes.forEach(function (elem) {
                        if(dish.title === elem.title){
                            dish.portion += 1
                        } else {
                            dishes.push(dish)
                        }

                    })
                }

            }

            getTotalCalories() {
                let totalCalories = 0
                this.thisDishes.forEach(function (elem) {
                    elem.products.forEach(function (product) {
                        totalCalories += product.calories
                    })
                })
                return totalCalories
            }

            getAllDishesInfo() {
                let titleInfo = ``
                
                const getCalories = function (elem) {
                    let calories = 0
                    elem.products.forEach(function (product) {
                        calories += product.calories
                    })
                    return calories * elem.portion

                }
                this.thisDishes.forEach(function (elem) {
                    let productInfo = ``
                    elem.products.forEach(function (product) {
                        productInfo += `  *${product.title}, ${product.weight * elem.portion} грамм, ${product.calories * elem.portion} ккал
                    `
                    })
                    titleInfo += `
                    ${elem.title} - ${elem.portion} порция, ${getCalories(elem)} калл
                    ${productInfo}
                    `
                })
                return `
                    ==========================
                    ${titleInfo}
                    ==========================
                    `
            }
        }

        const meat = new Product('Филе говядина', 158);

        const rice = new Product('Рис', 130);

        const onion = new Product('Лук', 40);

        const carrot = new Product('Морковь', 41);



        const plov = new Dish('Плов');

        plov.addProduct(meat, 110);

        plov.addProduct(rice, 150);

        plov.addProduct(onion, 25);

        plov.addProduct(carrot, 25);



        const calculator = new CaloriesCalculator();

        calculator.addDish(plov);
        calculator.addDish(plov);

        const calories = calculator.getTotalCalories();

        console.log(calories); // должно вывести 373.25



        const totals = calculator.getAllDishesInfo();

        console.log(totals);