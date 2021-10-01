/*
    Snail in the Well
    The snail climbs up 7 feet each day and slips back 2 feet each night.
    How many days will it take the snail to get out of a well with the given depth?
*/
function main(arg) {
    let depth = parseInt(arg,10); //  converts the given 'arg' into the depth as an integer
    let day = 0;
    let height = 0;

    do {
        day ++;
        height = height + 7;
        if (height < depth) {
            height = height - 2;
        }
    }
    while (height < depth);
    console.log(`${day} days`);
}

main(31);
main(44);
main(26);