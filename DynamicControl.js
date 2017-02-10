$(function () {
        $("#Button2").click( addTextbox);
        });

        function addTextbox() {
            var cobject = document.getElementById("Count");
            var c = cobject.value;
            var box = "<input type='text' id ='text" + c + "' name='text" + c + "' value='text" + c + "'/><br/>";
            $("#TextValueDiv> input:text:last").each(function () {
                $(this).next().after($(box));
            });
            var count = Number(c) + 1;
            cobject.value = count;
        }
        
        

