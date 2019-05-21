const $body = $('body');

class Robot {
    constructor(type, name) {
        this.type = type; 
        this.name = name;
   }
};

const naming = document.getElementById("userInput");
let robot = new Robot(naming);

console.log(naming)

const create = ()=>{
    const selectedType = document.getElementById("selectedType")
    document.getElementById("type").value = selectedType.options[selectedType.selectedIndex].text;
    console.log(type)
};

$('.clickBait').on('click', (e)=> { 
    e.preventDefault();
    let input = document.getElementById("userInput").value;
    let inputTwo = document.getElementById("type").value
    console.log(input);
    $('.nameS').append(`hello ${input}, type ${inputTwo}`)
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