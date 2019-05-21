const $body = $('body');

class Robot {
    constructor(type, name) {
        this.type = type; 
        this.name = name;
   }
};

const naming = document.getElementById("userInput");
let robot = new Robot(naming);
$('.name').append(naming)
console.log(naming)

const create = ()=>{
    const selectedType = document.getElementById("selectedType")
    document.getElementById("type").value = selectedType.options[selectedType.selectedIndex].text;
    console.log(type)
};

$('.class').on('click', ()=> { 
    let input = document.getElementById("userInput").value;
    console.log(input);
    return;
});

/*[{ 
    UNIPEDAL: 'Unipedal',
    BIPEDAL: 'Bipedal',
    QUADRUPEDAL: 'Quadrupedal',
    ARACHNID: 'Arachnid',
    RADIAL: 'Radial',
    AERONAUTICAL: 'Aeronautical'
  }];
  */