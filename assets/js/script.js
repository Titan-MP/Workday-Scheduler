const getStore = async () => {
  const store = await localStorage.hours ? JSON.parse(localStorage.hours) : [];
  for (const [i, task] of store.entries()) {
    $(`textarea:eq(${i})`).val(task);
  }
};

getStore();

currentDay.innerHTML = dayjs().format("MMM D YYYY, h:mm A ");

const hours = [
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
];

const cH = dayjs().format("H");

for (const hour of hours) {
  const rH = hours.indexOf(hour) + 1;

  main.innerHTML += `
    <div id="hour-${rH}" class="row time-block ${
      rH < cH ? "past" : rH > cH ? "future" : "present"
    }">
      <div class="col-2 col-md-1 hour text-center py-3">${hour}</div>
      <textarea class="col-8 col-md-10 description" rows="3"></textarea>
      <button onclick="saveStore()" class="btn saveBtn col-2 col-md-1" aria-label="save">
        <i class="fas fa-save" aria-hidden="true"></i>
      </button>
    </div>
  `;
}

const saveStore = () => {
  const areas = document.querySelectorAll("textarea");
  const store = [];

  areas.forEach((area) => {
    store.push(area.value);
  });

  localStorage.hours = JSON.stringify(store);
};