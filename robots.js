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
    console.log(selectedType)
};

$('.clickBait').on('click', (e)=> { 
    e.preventDefault();
    let input = document.getElementById("userInput").value;
    let inputTwo = document.getElementById("type").value
    console.log(input);
    $('.nameS').append(`hello ${input}, type ${inputTwo}`)
    return;
});

const tasks=[
    {
      description: 'do the dishes',
      eta: 1000,
    },{
      description: 'sweep the house',
      eta: 3000,
    },{
      description: 'do the laundry',
      eta: 10000,
    },{
      description: 'take out the recycling',
      eta: 4000,
    },{
      description: 'make a sammich',
      eta: 7000,
    },{
      description: 'mow the lawn',
      eta: 20000,
    },{
      description: 'rake the leaves',
      eta: 18000,
    },{
      description: 'give the dog a bath',
      eta: 14500,
    },{
      description: 'bake some cookies',
      eta: 8000,
    },{
      description: 'wash the car',
      eta: 20000,
    },
  ];

  const doTask=()=>{
        const selectedTask = document.getElementById("selectedTask")
        document.getElementById("task").value = selectedTask.options[selectedTask.selectedIndex].text;
        console.log(selectedTask);
    };  

/*[{ 
    UNIPEDAL: 'Unipedal',
    BIPEDAL: 'Bipedal',
    QUADRUPEDAL: 'Quadrupedal',
    ARACHNID: 'Arachnid',
    RADIAL: 'Radial',
    AERONAUTICAL: 'Aeronautical'
  }];
  */