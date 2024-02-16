import api from "../api/api";
import CountButton from "./CountButton";

//Our Landing Page
function LandingPage() {
    //call our backend to get pokemon data
    let data = api
        .get("/pokemon")
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });

    return <CountButton />;
}

export default LandingPage;
