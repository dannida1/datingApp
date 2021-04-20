var users = [{
        name: 'Lucy',
        gender: 'F',
        hobby: 'pets',
        age: 25,
        avatar: 'avatar1.png'
    },
    {
        name: 'Betty',
        gender: 'F',
        hobby: 'pets',
        age: 36,
        avatar: 'avatar2.png'
    },
    {
        name: 'Ronald',
        gender: 'M',
        hobby: 'music',
        age: 45,
        avatar: 'avatar3.png'
    },
    {
        name: 'Christopher',
        gender: 'M',
        hobby: 'sports',
        age: 45,
        avatar: 'avatar4.png'
    },
    {
        name: 'Ximena',
        gender: 'F',
        hobby: 'reading',
        age: 50,
        avatar: 'avatar5.png'
    },
    {
        name: 'Paul',
        gender: 'M',
        hobby: 'shopping',
        age: 55,
        avatar: 'avatar6.png'
    },
    {
        name: 'Charlie',
        gender: 'M',
        hobby: 'pets',
        age: 28,
        avatar: 'avatar7.png'
    },
];


window.addEventListener('load', function() {

    var results = document.getElementById('results');

    function search() {

        //get gendered
        let genderField = document.getElementById('gender'); //accesses the entire field
        let selectedField = genderField.selectedIndex; //access the index of the members...
        let gender = genderField.options[selectedField].value; //to pick the actual value

        //get hobby
        let hobbyField = document.getElementById('hobby'); //access the hobby hobby Field
        let hobby = hobbyField.value; //gets the actual value of the hobby field

        //get minimum age
        let minAge = document.getElementById('min_age');
        let minAgeValue = minAge.value;

        //get maximum age
        let maxAge = document.getElementById('max_age');
        let maxAgeValue = maxAge.value;

        //logic
        var resultsHtml = '';
        var userLength = users.length;

        for (var i = 0; i < userLength; i++) {
            //check gender
            if (gender == 'A' || gender == users[i].gender) {
                //check hobby
                if (hobby == '' || hobby == users[i].hobby) {
                    //check age
                    if (users[i].age >= minAgeValue && users[i].age <= maxAgeValue || maxAgeValue == '' && minAgeValue <= users[i].age) {
                        resultsHtml += '<div class="person-row">\
                           <img class="img-responsive" src="images/' + users[i].avatar + '" />\
                           <div class="personal-info">\
                           <div>' + users[i].name + '</div>\
                           <div>' + users[i].hobby + '</div>\
                           <div>' + users[i].age + '</div></div>\
                           <button>Add as friend</button></div>';
                    }
                }
            }
        }

        results.innerHTML = resultsHtml;
    }
    var searchBtn = document.getElementById('searchBtn');

    searchBtn.addEventListener('click', search);
});