let time = new Date();
currentDay.innerHTML = time.toDateString();
const main = document.querySelector('main');
const hours = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM'];

hours.forEach((hour,i) => {
  let rH = i+9;
  let cH = time.getHours();

  main.innerHTML += `
  <div id="hour-9" class="row time-block ${rH<cH ? 'past' : rH>cH ? 'future' : 'present'} ">
    <div class="col-2 col-md-1 hour text-center py-3">${hour}</div>
    <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
    <button class="btn saveBtn col-2 col-md-1" aria-label="save">
      <i class="fas fa-save" aria-hidden="true"></i>
    </button>
</div>
  `;
});