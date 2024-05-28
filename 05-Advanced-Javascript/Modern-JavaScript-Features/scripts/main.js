import axios from '../scripts/libs/axios.js';
// import tools, {business as ourBusiness, construction} from '../scripts/utils/toolbelt.js';
import tools, * as toolbelt from '../scripts/utils/toolbelt.js';


const dogImgElement = document.querySelector('.dog-image');


class ApiRequest {

    constructor() {
        this.ROOT_URL = 'https://random.dog/woof.json?filter=mp4,webm';
    }

    async getRequest() {
        const response = await axios.get(this.ROOT_URL);
        console.log(response);
        return response;
    }


}

async function renderImage() {
    const ApiRequestObject = new ApiRequest();
    const apiResponse = await ApiRequestObject.getRequest();
    const imgUrl = apiResponse.data.url;
    dogImgElement.src = imgUrl;
    
}

// renderImage();
// console.log(tools);
// construction();
// console.log(ourBusiness);

// const { name, address, phone } = ourBusiness;
// console.log( name, address, phone)

console.log(tools);
console.log(toolbelt.business)