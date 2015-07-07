var londonChoices = [{pro: "Marmite", points: 10}, {pro: "Chocolate", points: 15}, {pro: "Curry", points: 10}, {pro: "Sleep", points: 10}, {pro: "Coffee", points: 10}, {pro: "Wine", points: 10}, {pro: "Mild summers", points: 10}, {pro: "Museums", points: 10}, {pro: "Greenery", points: 10}];
var nycChoices = [{pro: "Subway", points: 10}, {pro: "Night Life", points: 15}, {pro: "Sushi", points: 10}, {pro: "Beer", points: 10}, {pro: "Taxis", points: 10}, {pro: "Cute shoes", points: 10}, {pro: "Dating", points: 10}, {pro: "Chinese food", points: 10}, {pro: "Beer Gardens", points: 10}, {pro: "Shopping", points: 10}, {pro: "Lower taxes", points: 10}, {pro: "Laundry service", points: 10}];
var balance = 50;

/// creating the buttons with pros and cons 


function createCheckbox(london, nyc) {

    london.forEach(function(i){
        var checkbox = ('<span class="check"><input type="checkbox" name="'+ i.pro + '" value="'+ i.pro + '" onchange="whichCity(value)">' + i.pro + '</span>')
        $(checkbox).prependTo($("#checks"));
       
    });
    nyc.forEach(function(i){
        var checkbox = ('<span class="check"><input type="checkbox" name="'+ i.pro + '" value="'+ i.pro + '" onchange="whichCity(value)">' + i.pro + '</span>')
        $(checkbox).prependTo($("#checks"));
       
    });

};


//// click event functions 

function whichCity(val){
	
	londonChoices.forEach(function(obj){
		if(obj.pro === val){
			balance -= obj.points;
			updateGauges(balance);
		}
	})
	nycChoices.forEach(function(obj){
		if(obj.pro === val){
			balance += obj.points;
			updateGauges(balance);
		}
	})

}