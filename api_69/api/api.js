//console.log(1234)
function LoadData(Search) {
  const url = ` https://openapi.programming-hero.com/api/phones?search=${Search}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => DisplayData(data.data));
}

const DisplayData = phones => {
  console.log(phones[0]);
  const Divcontainer = document.getElementById("containers");
  Divcontainer.textContent = "";
  //display fixed data from api
  phones=phones.slice(0,3)
  //if api has no data then show a message
  const nophone = document.getElementById("no-data-found");
  if(phones.length==0){
    nophone.classList.remove("invisible");

  }else{
    nophone.classList.add("invisible");
  }
  phones.forEach(phone => {
    const createDiv = document.createElement("div");
    createDiv.classList.add("col");
    createDiv.innerHTML = `
    <div
                  class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                  <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                    <img
                      class="rounded-t-lg   "
                      src="${phone.image}"
                      alt="" />
                  </a>
                  <div class="p-2">
                    <h5
                      class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      ${phone.brand}
                    </h5>
                    <p class="mb-4 text-base truncate text-neutral-600 dark:text-neutral-200">
                    ${phone.slug}
                    </p>
                    <button
                      type="button"
                      class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                      data-te-ripple-init
                      data-te-ripple-color="light">
                      Buy Now
                    </button>
                  </div>
                </div>
    `
    Divcontainer.appendChild(createDiv)
  });
};
document.getElementById("button-addon3").addEventListener("click", function () {
    const searchField = document.getElementById("search");
    const searchText = searchField.value;
    //console.log(searchText)
    LoadData(searchText);
});
LoadData();
