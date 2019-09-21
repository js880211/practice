 $(document).ready(function() {
        $("#btn1").click(()=> {/*
            $.get("http://localhost:5050/load", function(data2, status) {
                console.log(data2);
                $.each(data2, function(index, value) {
                    $("#media").append("<br>")
                    $("#media").append('<img id="' + value + '"class="img-fluid mx-auto d-block" src="http://localhost:5050/images/' + value + '">')
                    $(".container").append('<div class="modal" id="myModal"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">圖片資料</h4><button type="button" class="close" data-dismiss="modal">&times;</button></div><div class="modal-body"></div><div class="modal-footer"><button type="button" class="btn btn-danger" data-dismiss="modal">關閉</button></div></div></div></div>')
                })
            })
            */
            $("#media").empty();
            
            
            fetch('http://localhost:5050/load',{method:'GET'})
            .then((res)=>{
                console.log(res);
                return res.json();
            })
            .then((data)=>{
                console.log(data);
                for(i=0;i<data.length;i++){
                $("#media").append("<br>")
                $("#media").append('<img id="' + data[i] + '"class="img-fluid mx-auto d-block" src="http://localhost:5050/images/' + data[i] + '">')
                }
                
            })
        })
       
        $("img").click(() =>{
            $(".modal-body").text($(this).attr("id"))
            $('#btnTrigger').click();
        })
    })
