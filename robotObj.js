const robotType = [{ 
    UNIPEDAL: 'Unipedal',
    BIPEDAL: 'Bipedal',
    QUADRUPEDAL: 'Quadrupedal',
    ARACHNID: 'Arachnid',
    RADIAL: 'Radial',
    AERONAUTICAL: 'Aeronautical'
  }];

    let name = document.getElementById("name").value;
    let selectedType = '';
    function setName(userInputName) {
      name = userInputName;
    }
    console.log(name);
    function selectRobotTypeOption(index) {
      selectedType = robotType[index];
    }
    console.log(`${name} NUMBER 2`);

    function submit() {
        console.log(`${name} NUMBER 2.5`)
        let robot = {};
        robot.id = name;
        robot.type = selectedType;
        console.log(`${name} NUMBER 3`)
        // return robot; onclick="name=this.value"
      }
     
      function handleClick() {
        alert("Favorite weird creature: " + getRadioButtonValue(document.aye.whichThing));
        //event.preventDefault(); // disable normal form submit behavior
        return false; // prevent further bubbling of event
      }