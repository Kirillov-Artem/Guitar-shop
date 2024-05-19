class Spinner {
    handleClear() {
        ROOT_SPINNER.innerHTML = "";
    }

    render() {
        const html = `
        <div class = 'spinner-container'>
            <span class="loader"></span>
        </div>
        `;

        ROOT_SPINNER.innerHTML = html;
    }
}

const spinnerPage = new Spinner();
