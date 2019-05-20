const robotType = [{ 
    UNIPEDAL: 'Unipedal',
    BIPEDAL: 'Bipedal',
    QUADRUPEDAL: 'Quadrupedal',
    ARACHNID: 'Arachnid',
    RADIAL: 'Radial',
    AERONAUTICAL: 'Aeronautical'
  }];

    let name = '';
    let selectedType = '';
    function setName(userInputName) {
      name = userInputName;
    }

    function selectRobotTypeOption(index) {
      selectedType = robotType[index];
    }

    function submit () {
        let robot = {};
        robot.name = name;
        robot.type = selectedType;
        return robot; 
      }