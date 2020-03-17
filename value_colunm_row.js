function get_value_colunm_row() {

    var colunm = document.getElementById('num_colunm').value;
    var row = document.getElementById('num_row').value;

    var edit_colunm = colunm - parseInt(1);

    console.log(colunm);
    // console.log(row);

    var value_class  = new Array(parseInt(colunm));
    var value_table = new Array(parseInt(colunm));
    // value_class[0] = "c_";
    // console.log(value_class);


    var countt = 1 ;
    var count = 0 ;
    
    for(var x = 1 ; x <= colunm ; x++){

        $('#head_table').append('<th class="add_table'+ countt +'"><div  style="width: 100px;"><input type="text" class="form-control insert_colunm'+ countt +'"></div></th>');
        

            value_table[count] = ".add_table"+countt;
            // $(value_table[count]).addClass('bg-dark');

            value_class[count] = ".insert_colunm"+countt;
            // $(value_class[count]).addClass('bg-dark');


        count++;
        countt++;



        

    }

    var count_row_index = 0 ;
    var count_row = 1 ;
    var value_row = new Array(parseInt(row));


    for(var m = 1 ; m <= row ; m++){

        $('#add_row').append('<tr class="add_td'+count_row+'"></tr>');
        value_row[count_row_index] = ".add_td"+count_row;

        console.log(value_row[count_row_index]);

        for(var n = 1 ; n <= colunm ; n++){

            $(value_row[count_row_index]).append('<td><div  style="width: 100px;"><input type="text" class="form-control" id="value_insert_row'+count_row+'"></div></td>');
            
            count_row++;
        }


        
        count_row_index++;
    }





}