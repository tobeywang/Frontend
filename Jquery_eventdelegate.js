
//Jquery delegate Click function
        $('.Back').	delegate("", "click", function () {
                //目前畫面的日期
                var oriDate = $('#<%=lblLeftRightDate.ClientID %>').text();
                if (oriDate != '') {
                    var tempFull = new Date(oriDate);
                    var tempDate = tempFull.getDate();
                    //上一天
                    tempFull.setDate(tempDate - 1);
                    $('#<%=txtStartDate.ClientID %>').val(tempFull.getFullYear() + '/' + (tempFull.getMonth() + 1) + '/' + tempFull.getDate());
                    //觸發搜尋
                    $('#<%=btnSearch.ClientID %>').click();
                }
            });
            $('.Next').delegate("", "click", function () {
                var oriDate = $('#<%=lblLeftRightDate.ClientID %>').text();
                if (oriDate != '') {
                    var tempFull = new Date(oriDate);
                    var tempDate = tempFull.getDate();
                    tempFull.setDate(tempDate + 1);
                    $('#<%=txtStartDate.ClientID %>').val(tempFull.getFullYear() + '/' + (tempFull.getMonth() + 1) + '/' + tempFull.getDate());
                    $('#<%=btnSearch.ClientID %>').click();
                }
            });

            Search 按下後function
            $('#<%=lblLeftRightDate.ClientID %>').text($('#<%=txtStartDate.ClientID %>').val());
