const robotType = [{ 
    UNIPEDAL: 'Unipedal',
    BIPEDAL: 'Bipedal',
    QUADRUPEDAL: 'Quadrupedal',
    ARACHNID: 'Arachnid',
    RADIAL: 'Radial',
    AERONAUTICAL: 'Aeronautical'
  }];

    let rname = document.getElementById("userInputName").value;
    let selectedType = '';
    function setName(userInputName) {
      rname = userInputName;
    }
    console.log(rname);
    function selectRobotTypeOption(index) {
      selectedType = robotType[index];
    }
    console.log(`${rname} NUMBER 2`);

    function submit() {
        console.log(`${name} NUMBER 2.5`)
        let robot = {};
        robot.id = rname;
        robot.type = selectedType;
        console.log(`${name} NUMBER 3`)
        // return robot; 
      }
     
    