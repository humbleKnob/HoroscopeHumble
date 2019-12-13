function onSubmit() {
    var signs = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "-CAUTION ABNORMALITY DETECTED"];
    var message = [" It’s imperative that you spend the next 7 days learning everything there is to know about the migration habits of the east asian tunneling frog" +
    ". It has to do with you winning a lot of money, so just do it.", " Things get adventurous this week. You know how you always want to order that other dish at Thai but then you’re like “what if I don’t like it and then I’ve wasted all this money when I could have just ordered Pad Thai which I already know that I like”? Well this week Aquarius, you take the plunge. Also, get a more interesting life. That is grim.", " You will encounter frustration when you come across a Capricorn trying to research an animal that I made up. On Jah if you even THINK about snitching, remember the golden rule 'snitches get stitches.", " You will have a conversation with an inanimate object, whether you know it or not, by inanimate object I mean something that isn't alive, doesn't matter if it was one day, just cant be breathing now.", " you will find your soul mate today, they will be with their partner, married, with 4 kids, do you really want to ruin that? Sorry.", " Make sure to look where your driving all of this week, you'll thank me later with a clear conscience, and no dents on your car.", " Your only job is too keep balling out, everyone around you wishes they were as cool as you, you may feel really proud this week, stay Humble your Majesty", " All leos named Leo will form a militia and will have a bloody takeover of the dominican republic, don't miss out, if you're not named Leo, find somewhere to hide for the next couple months", " If you like eating bananas, take a break for the next week, actually month if you really want to be safe", " do not invest in any blender companies on the stock market. Just don't, when you get a lamborghini in four years you'll thank me by buying me one", " The equilibrium of Saturn's seventh moon alignment with Pluto sets the sun in your water axis this week, this could go many ways, so take precaution by giving everyone you see a gift, money is advised", "this week will throw you many curve balls, it is necessary too remember these words, it is a matter of life and death, preposterous silicon banana chicken egg run", "YOU HAVE INPUTED A FALSE DATE, YOUR DATA WILL BE SOLD TO THE CHINESE GOVERNMENT AND THIS COMPUTER WILL SELF DESTRUCT IN 5 SECONDS"];
    var images = ["img/capri.jpeg", "img/aqua.jpg", "img/pisces.jpeg", "img/aries.jpg",
        "img/taurus.jpg", "img/gemini.png", "img/cancer.png", "img/leo.png",
        "img/virgo.jpg", "img/libra.png", "img/scorp.png", "img/sag.jpg", "img/ben.jpeg"];
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var username = document.getElementById("username").value;
    var sign = horoscope(month, day);
    var birthday = findBirthday(month, day);
    if(sign !== 12) {
        document.getElementById('horoscope').innerHTML = username + ", " + birthday + "your sign is " + signs[sign] + ", " + message[sign] + ". ";
    } else {
        document.getElementById('horoscope').innerHTML = signs[12] + message[12];
    }
    document.getElementById('image').src = images[sign];

}
function horoscope(month, day){

    var sign = 0;
    if(month == 0){
        if(day <= 19){
            sign = 0;
        }
        if(day >= 20){
            sign = 1;
        }
    }
    if(month == 1){
        if(day <=18){
            sign = 1;
        }
        if(day >=19 && day <= 29){
            sign = 2;
        }
        if(day >= 30){
            sign = 12;
        }
    }
    if(month == 2){
        if(day <= 20){
            sign = 2;
        }
        if(day >=21){
            sign = 3;
        }
    }
    if(month == 3){
        if(day <= 19){
            sign = 3;
        }
        if(day >= 20 && day <= 30){
            sign = 4;
        }
        if(day > 30){
            sign = 12;
        }
    }
    if(month == 4){
        if(day <= 20){
            sign = 4;
        }
        if(day >= 21){
            sign = 5;
        }
    }

    if(month == 5){
        if(day <= 20){
            sign = 5;
        }
        if(day >= 21 && day <= 30){
            sign = 6;
        }
        if(day > 30){
            sign = 12;
        } 
    }
    if(month == 6){
        if(day <= 22){
            sign = 6;
        }
        if(day >= 23){
            sign = 7;
        }
    }
    if(month == 7){
        if(day <= 22){
            sign = 7;
        }
        if(day >= 23){
            sign = 8;
        }
    }
    if(month == 8){
        if(day <= 22){
            sign = 8;
        }
        if(day >= 23 && day <= 30){
            sign = 9;
        }
        if(day > 30){
            sign = 12;
        }
    }
    if(month == 9){
        if(day <= 22){
            sign = 9;
        }
        if(day >= 23){
            sign = 10;
        }
    }
    if(month == 10){
        if(day <= 21){
            sign = 10;
        }
        if(day >= 22 && day <= 30){
            sign = 11;
        }
        if(day > 30){
            sign = 12;
        }
    }
    if(month == 11){
        if(day <= 21){
            sign = 11;
        }
        if(day >= 22){
            sign = 0;
        }
    }

    return sign;
}

function findBirthday(userMonth, userDay){
    var bday = "";
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentDay = currentDate.getDate();
    if(userDay == currentDay && userMonth == currentMonth){
        bday = " I hope you have a great birthday! ";
    }
    return bday;
}