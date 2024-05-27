const BASE_API_URL = "https://reqres.in/api";
const pageNumEl = document.querySelector(".page-number");
const totalPageEl = document.querySelector(".total-pages");

const usersListEl = document.querySelector(".users")
const adEl = document.querySelector(".ad")

let endpoint = "users";

const makeRequest = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_API_URL}/${endpoint}`);
    console.log(response.data);
      populatePage(response.data);
      populateUsers(response.data);

        adEl.innerText = JSON.stringify(response.data.support, null, "\t");
      
    return response.data;
  } catch (err) {
    console.error(":(", err);
  }
};

makeRequest(endpoint);
// <section>
//     <h2>Users</h2>
//     <ul class="users">
//       <li class="user">
//         <img class="user__avatar" src="https://via.placeholder.com/100" />
//         <span class="user__name">Jane Doe</span>
//         —
//         <span class="user__email">jane.doe@example.com</span>
//       </li>
//     </ul>
//   </section>

function populatePage(data) {
  pageNumEl.innerText = data.page;
  totalPageEl.innerText = data.total_pages;
}

function populateUsers(data) {
    const users = data.data
    users.forEach(user => {
        const liEl = document.createElement("li")
        liEl.classList.add("user")
        const imgEl = document.createElement("img")
        imgEl.classList.add("user__avatar")
        imgEl.src = user.avatar

        liEl.appendChild(imgEl)

        const spanOneEl = document.createElement("span")
        spanOneEl.classList.add("user__name");
        spanOneEl.innerText = `${user.first_name} ${user.last_name} — `

        liEl.appendChild(spanOneEl)

        spanTwoEl = document.createElement("span")
        spanTwoEl.innerText = `${user.email}`

        liEl.appendChild(spanTwoEl)
        usersListEl.appendChild(liEl)
    })
}
