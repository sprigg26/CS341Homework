//Dylan Sprigg
$(document).ready(function () {
    // Form validation
    $("#order-form").submit(function (event) {
        event.preventDefault();
        var notes = $("#notes").val().toLowerCase();

        if (notes.indexOf("vegan") !== -1) {
            alert("Warning this cheesecake contains dairy");
        } else {
            var quantity = $("#quantity").val();
            var topping = $("input[name='topping']:checked").val();
            var orderDetails = "<p>Thank you! Your order has been placed </p><p>Quantity: " + quantity + "</p><p>Topping: " + topping + "</p><p>Notes: " + notes + "</p>";
            $("#order-form").html(orderDetails); // Replaces the form with order summary
        }
    });

    // Dropdown hover effect
    $(".dropdown").hover(function () {
        $(".dropdown-content").toggle();
    });

    // Month selection
    $(".dropdown-content p").click(function () {
        var selectedMonth = $(this).text();
        $(".dropdown").html(selectedMonth + '<div class="dropdown-content">...</div>'); // Changes text to the selected month
        $(".dropdown-content").hide();
    });
});
