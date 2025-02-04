document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myform').addEventListener('submit', function(event) {
        event.preventDefault();
        document.getElementById('message').classList.remove('hidden');
        document.getElementById('contact-form').classList.add('hidden');
        });

        document.getElementById('message').addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('contact-form').classList.remove('hidden');
            document.getElementById('message').classList.add('hidden');
            });
});