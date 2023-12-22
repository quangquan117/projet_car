class Dates {
    static time() {
        console.log("time");
        const date = new Date().getFullYear();
        const el = document.querySelector("footer p");
        el.innerHTML += `&copy - MIT - ${date}`;
    }
};

export let newDates = new Dates();