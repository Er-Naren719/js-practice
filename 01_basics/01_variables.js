const accountId = 54;
let accountEmail = "narendra.patil@ayekart.com";
var accountPasskey = "ahsdkj";
location = "Pune";
let state;


// accountId = 45; // This is not allowed
accountEmail = "np@np.com"
accountPasskey = "asd"
location = "Mumbai"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPasskey, location, state])