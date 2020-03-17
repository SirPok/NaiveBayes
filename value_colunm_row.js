function get_value_colunm_row() {

    var colunm = document.getElementById('num_colunm').value;
    var row = document.getElementById('num_row').value;

    var edit_colunm = colunm - parseInt(1);

    console.log(colunm);


    var value_class  = new Array(parseInt(colunm));
    var value_head_table = new Array(parseInt(colunm));
    // value_class[0] = "c_";
    // console.log(value_class);


    var countt = 1 ;
    var count = 0 ;
    
    for(var x = 1 ; x <= colunm ; x++){

        $('#head_table').append('<th class="add_table"><div  style="width: 100px;"><input type="text" class="form-control" id="insert_colunm"></div></th>');
        




            value_head_table[count] = ".t_"+parseInt(countt);
            $('.add_table').addClass(value_head_table[count]);
            console.log(value_head_table[count]);
            // $(value_head_table[count]).addClass('bg-dark');




            value_class[count] = ".c_"+ countt ;

            console.log(value_class[count]);
         

        $('#insert_colunm').addClass(value_class[count]);

        $(value_class[count]).addClass('bg-dark');

        count++;
        countt++;

    }
    // for(var y = 1 ; y <= row ; y++){

    //     $('#add_row').append('<tr id="test"><td><div  style="width: 100px;"><input type="text" class="form-control" id=""></div></td></tr>');

    //     for(var m = 1 ; m <= 1 ; m++){

    //         $('#test').append('<td><div  style="width: 100px;"><input type="text" class="form-control" id=""></div></td>');

    //     }

    // }


}