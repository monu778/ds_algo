var first_conveyer = ['-','-','-','-','-'];
var second_conveyer = ['-','-','-','-','-'];
f_length = first_conveyer.length;
s_length = second_conveyer.length;
no_seconds = 0;
no_trash = 2;
pos1 = 0;
pos2 = s_length-1;


function no_count(arr) {
    var no_counts = {"-":0,"T":0};
    
    for(i in arr) {
        no_counts[arr[i]]++ 
    }
    return no_counts;
}

move(first_conveyer,second_conveyer,no_trash,no_seconds,pos1,pos2);


function move(first_conveyer,second_conveyer,no_trash,no_seconds,pos1,pos2) {
    t_count = no_count(first_conveyer)['T']
    dash_count = no_count(first_conveyer)['-'];
    t1_count = no_count(second_conveyer)['T'];
    dash1_count = no_count(second_conveyer)['-'];
     
    if(no_trash == 0 && dash1_count == 5 && dash_count == 5) {
       console.log("No balls left ");
       return no_seconds;
    } else if( t_count == 0 && t1_count == 0 && no_trash > 0 && no_seconds == 0  ){
        first_conveyer[pos1] = 'T';
        no_seconds++;
        no_trash--;
        console.log(first_conveyer,'F',second_conveyer)
        move(first_conveyer,second_conveyer,no_trash,no_seconds,pos1,pos2)
    } else if(t_count == 1 && t1_count == 0 && no_trash > 0 ) {
        second_conveyer[pos2] = 'T'
        first_conveyer[pos1] = '-';
        no_seconds++;
        no_trash--;
        pos1++;
        first_conveyer[pos1] = 'T'; 
        console.log(first_conveyer,'F',second_conveyer)
        move(first_conveyer,second_conveyer,no_trash,no_seconds,f_length,s_length)
    } else if(t_count-t1_count == 0 && no_trash>0) {
    
        if(first_conveyer[first_conveyer.length-1] == "-") {
            no_seconds++;
            no_trash--;
            pos1++;
            first_conveyer[first_conveyer.length-1] = 'T'
            first_conveyer[pos1] = 'T'
            second_conveyer[pos2] = '-'
            pos2--;
            second_conveyer[pos2] = 'T'
            console.log(first_conveyer,'F',second_conveyer)
            move(first_conveyer,second_conveyer,no_trash,no_seconds,f_length,s_length)
        }              
    }else if((t_count == t_count) && no_trash>0) {

        first_conveyer[first_conveyer.length-1] = 'T';
        first_conveyer[pos1] = '-'
        pos1++;
        first_conveyer[pos1] = 'T'
        second_conveyer[pos2]='-'
        pos2--
        second_conveyer[pos2] = 'T'
        move(first_conveyer,second_conveyer,no_trash,no_seconds,f_length,s_length)
       
    
    } else if( t_count-t1_count == 1)  {
        second_conveyer[pos2] = '-'
        pos2--;
        second_conveyer[pos2] = 'T'

        console.log(first_conveyer,'F',second_conveyer)
        move(first_conveyer,second_conveyer,no_trash,no_seconds,f_length,s_length)

        //console.log(first_conveyer,'F',second_conveyer)
    }
}
