const robotType = [{ 
    UNIPEDAL: 'Unipedal',
    BIPEDAL: 'Bipedal',
    QUADRUPEDAL: 'Quadrupedal',
    ARACHNID: 'Arachnid',
    RADIAL: 'Radial',
    AERONAUTICAL: 'Aeronautical'
  }];
    // let rname = '';
    // let selectedType = '';
    // function setName(userInputName) {
    //   rname = userInputName;
    // }

    function selectRobotTypeOption(index) {
      selectedType = robotType[index];
    }

    function submit() {
        console.log(`${name} NUMBER 2.5`)
        let rname = document.getElementById("userInputName").value;
        let robot = {};
        robot.id = rname;
        robot.type = selectedType;
        console.log(`${name} NUMBER 3`)
        // return robot; onclick="name=this.value"
      }
     
      function handleClick() {
        alert("Favorite weird creature: " + getRadioButtonValue(document.aye.whichThing));
        //event.preventDefault(); // disable normal form submit behavior
        return false; // prevent further bubbling of event
      }

    //  at bottom of form Robot name: 
    //   <input name="Name" type="text" id="userInput" />
    //   <br>
    //   <input type="button" onclick="create()" value="Submit" />