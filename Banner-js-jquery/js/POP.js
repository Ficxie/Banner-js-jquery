$(document).ready(function () {

    $("#SignInLink").click(function () {
        var SignIn = $("#SignIn").html();
        show(SignIn);
    });

    $("#SignUpLink").click(function () {
        var SignUp = $("#SignUp").html();
        show(SignUp);
    });

    $("#close").click(function () {
        $("#layout-mask").hide();
        $("#layout-pop").hide();
    });

    function show(html) {
        $("#layout-mask").show();
        $("#layout-pop").show();
        $("#layoutConent").html(html);
    }

})