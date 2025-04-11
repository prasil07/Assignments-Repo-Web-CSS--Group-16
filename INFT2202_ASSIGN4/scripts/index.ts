const HomePage = () => {
    const feedBackForm = document.getElementById("feedback-form");
    if (feedBackForm) {
        feedBackForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const nameInput = form.querySelector("#name");
            const feedbackInput = form.querySelector("#feedback");
            console.log('sd', form, nameInput, feedbackInput);

            let isValid = true;
            if (!(nameInput instanceof HTMLInputElement) || !(feedbackInput instanceof HTMLTextAreaElement) || !(form instanceof HTMLFormElement)) return;

            // Custom validation logic
            if (nameInput.value.trim().length < 3) {
                nameInput.classList.add("is-invalid");
                isValid = false;
            } else {
                nameInput.classList.remove("is-invalid");
                nameInput.classList.add("is-valid");
            }

            if (feedbackInput.value.trim().length < 10) {
                feedbackInput.classList.add("is-invalid");
                isValid = false;
            } else {
                feedbackInput.classList.remove("is-invalid");
                feedbackInput.classList.add("is-valid");
            }

            // If valid, show modal and log form data
            if (isValid) {
                const formData = new FormData(form);
                console.log("Name:", formData.get("name"));
                console.log("Feedback:", formData.get("feedback"));

                // Show the Bootstrap modal
                const feedbackModal = new window.bootstrap.Modal(
                    document.getElementById("feedbackModal") as HTMLDialogElement
                );
                feedbackModal.show();

                // Clear form fields and validation styles
                form.reset();
                form.querySelectorAll(".is-valid, .is-invalid").forEach((input) => {
                    input.classList.remove("is-valid", "is-invalid");
                });
            }
        });
    }

    const getInvolved = document.getElementById("getInvolved");

    if (getInvolved) {
        getInvolved.addEventListener("click", () => {
            // to Opportunities page
            window.router.navigate("/opportunities");
        });
    }
}