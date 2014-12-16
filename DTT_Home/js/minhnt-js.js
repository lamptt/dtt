/**
 * Created by Brook on 16/12/2014.
 */
$(document).ready(function ()
{
    $("#tab2").hide();
    $("#tab4").hide();
    $("#tab1").click(function()
    {
        $("#tab2").toggle(200);
        $("#tab4").hide(200);
    });
    $("#tab3").click(function()
    {
        $("#tab4").toggle(200);
        $("#tab2").hide(200);
    });
});
