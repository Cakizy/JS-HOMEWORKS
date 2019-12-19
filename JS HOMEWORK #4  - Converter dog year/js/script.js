let input = prompt(`Type 1 if you want to convert human years to Dog years otherwise type 2`);
let converter = parseInt(input);
switch (converter) {
    case 1:
        let input2 = prompt(`Please enter human years to be converted in to dog years`);
        let humanyear = parseInt(input2);

        function humanDog() {
            let sum = humanyear * 7;
            return sum;
        }
        alert(`You're dog have ${humanDog()} human year based on the conversion rate of 1 human year to 7 dog years`);
        break;
    case 2:
        let input3 = prompt(`Please enter dog years to be converted in to human years`);
        let dogyear = parseInt(input3);

        function dogHuman() {
            let sum = dogyear / 7;
            return sum;
        }
        alert(`You're dog have ${dogHuman()} dog year based on the conversion rate of 7 dog years to 1 human year`);
        break;
    default:
        text = alert(`You should enter (1 or 2) with a number. `);
        break;

}