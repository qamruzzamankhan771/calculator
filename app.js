function clearDisplay() {
    document.getElementsByName('display')[0].value = '';
  }
  
  function deleteChar() {
    var display = document.getElementsByName('display')[0];
    display.value = display.value.slice(0, -1);
  }
  
  function appendToDisplay(value) {
    document.getElementsByName('display')[0].value += value;
  }
  
  function calculate() {
    var display = document.getElementsByName('display')[0];
    try {
      display.value = eval(display.value);
    } catch (error) {
      alert('Invalid calculation');
    }
  }
  