const app = new Vue (
    {
        el : '#app',

        activeElement : 0,
        data : {
            images : [
                {
                    nome : 'First Guitar',
                    url : '/Users/Matteo/Desktop/BOOLEAN/CLASSE 55/vue-slider/img/fender-img-1.jpeg', 
                },
                {
                    nome : 'Second Guitar',
                    url : '/Users/Matteo/Desktop/BOOLEAN/CLASSE 55/vue-slider/img/fender-img-2.jpeg',
                },
                {
                    nome : 'Third Guitar',
                    url : '/Users/Matteo/Desktop/BOOLEAN/CLASSE 55/vue-slider/img/fender-img-3.jpeg',
                },
                {
                    nome : 'Fourth Guitar',
                    url : '/Users/Matteo/Desktop/BOOLEAN/CLASSE 55/vue-slider/img/fender-img-strato.jpeg',
                },
            ]            
        },

        methods : {
            prev(){
                if (this.activeElement === 0){
                    this.activeElement = this.images.lenght - 1;
                } else {
                    this.activeElement--;
                }
            },

            next(){
                if (this.activeElement === this.images.lenght -1){
                    this.activeElement = 0;
                } else {
                    this.activeElement++;
                }
            },

        },
        
    } 
);

