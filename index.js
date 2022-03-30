import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/petite-vue/0.4.1/petite-vue.es.min.js";
import Person from "./components/schema/person.json" assert { type : 'json' };

const person = () => {
    return {
        $template : '#person',
        year : new Date().getFullYear(),
        // SCHEMA DATA
        name : Person.name,
        image : Person.image,
        jobTitle : Person.jobTitle,
        orgName : Person.worksFor.name,
        links : Person.sameAs
    }
}

self.addEventListener('load', () => {
    createApp({ person }).mount()
})