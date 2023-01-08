window.addEventListener('load', () => {
  const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
  let lastChecked;
  function handleCheck(e) {
    let inBetween = false;
    if (e.shiftKey && this.checked) {
      checkboxes.forEach((checkbox) => {
        console.log(checkbox);
        if (checkbox === lastChecked || checkbox === this) {
          inBetween = !inBetween; // it will toggle to true or false.
          console.log(inBetween);
          console.log('Starting to check them in between!');
        }
        if (inBetween) {
          checkbox.checked = true;
        }
      });
    }

    lastChecked = this;
  }

  checkboxes.forEach((checkbox) =>
    checkbox.addEventListener('click', handleCheck)
  );
});
